import React from 'react';
import { Provider } from 'react-redux'; //Will pass to all the components inside the informations about the state redux.
import store from './store'; //To use in 'Provider'.
import TodoList from './TodoList'; //To use 'TodoList.js'.
import './config/reactotron'; //Just to debug.

console.tron.log('test');

const App = () => (
  <Provider store={store}>
    {/* We HAVE to use 'store' inside of the Provider (rule). */}

    <TodoList />
  </Provider>
)

export default App;
