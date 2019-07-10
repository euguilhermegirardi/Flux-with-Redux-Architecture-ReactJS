import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import './config/reactotron';

console.tron.log('test');

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

export default App;
