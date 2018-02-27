import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //for each key, we assign one reducer and that reducer is responsible
  //a piece of state
  //key : reducer 
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
