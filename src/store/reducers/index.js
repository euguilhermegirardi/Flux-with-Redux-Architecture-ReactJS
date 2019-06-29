//Here we will register the 'reducer' (reducers/todos.js) inside of the 'store'.

import { combineReducers } from 'redux'; //As we'll have many reducers, we'll combine all the reducers in just one place.
import todos from './todos'; //Importing reducers (reducers/todos.js).

export default combineReducers({
  todos,
});
