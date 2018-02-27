import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super (props);
    
    this.state = { term: ''};
    //                   this -> instance of search_bar
    //  function <- onInputChange binding a new instance of itself with SearchBar
    //  if u ever passing a callback around as a function like this and that callback has a reference to
    // this, need to bind the context 
    this.onInputChange = this.onInputChange.bind(this);
  }  
  
  onInputChange(event) {
    //if you have a callback with a this reference, remember always to bind it to the constructor
    this.setState({ term: event.target.value });
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    
    // We need to go and fetch weather data
  } 
  
  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
      </form>
    )
  }
}