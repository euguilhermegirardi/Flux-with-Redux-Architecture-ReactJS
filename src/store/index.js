//Initial configuration of redux.

import { createStore, compose, applyMiddleware } from 'redux'; //Will initialize the redux of our application.
import reducers from './reducers'; //Importing reducers (reducers/todos.js).

const composer = process.env.NODE_ENV !== 'development'
  ? compose(
    applyMiddleware(...[]), //3 points to use the middleware as an argument of the function.
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]); //If we are in the production space we use only 'applymiddleware'.

// const store = createStore( () => {} );
const store = createStore(reducers, composer); //Use 'reducers' as parameter to use in 'createStore'.
//'composer' will send all the informations to Reactotron.

export default store;
