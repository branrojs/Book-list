export function selectBook(book) {
  //selectBook is an action creator, it need to return an action,
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

//actions and actions creators
//they are just simple functions that return an action (a plain JSObject)
//they must always have a type defined and they can optionally have a payload
//or any other number of properties 
