import React, { Component } from 'react';
import { connect } from 'react-redux'; // the glue betwen react and redux
//A container is a react component that has
//a direct connection to the state managed by redux
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //function that generate a actually ends up flowing through all the different reducers
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as mapStateToProps
  //inside of BookList
  return {
    books: state.books
  };
}
//anythng returned from this function will end u as mapStateToProps
//on the booklist container
function mapDispatchToProps(dispatch) {
  //whenever select book is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component an produces a container
//promote booklist from a component to a container it needs to know
//about this new dispatch methond selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
