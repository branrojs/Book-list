//state argument is not application state, only the state
//this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      //return a fresh object
      return action.payload;
  }
  return state
}

//reducers are in charge of manipulating or changing our app state over time
//with the use of actions 
