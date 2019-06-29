import React, { Fragment } from 'react';
import { connect } from 'react-redux'; //Connects 'reducers/todos.js' to here throughout 'const mapStateToProps'.
import PropTypes from 'prop-types'; //Validation of the components.
import * as TodoActions from './store/actions/todos'; //Connects 'actions/todos.js' to here.
import { bindActionCreators } from 'redux'; //Will apply the Dispatch in the actions (execute).

const TodoList = ({ todos, addTodo, removeTodo}) => (
  <Fragment>

    <ul>
      {todos.map(todo => (   //Everytime when you use 'map' you have to use some 'id'.
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
        ))}
    </ul>

    <button onClick={() => addTodo('Study React!')}>Add</button>
    {/* We cannot use 'onClick={addTodo('Study')}, if we do it we'll execute this function, so we create a function before */}

  </Fragment>
);

//Transform the information from redux into properties, creating then the list of todos.
const mapStateToProps = state => ({
  todos: state.todos,
  //'state' represents all the informations inside of the redux and the 'todos' is reducer of todos.
});

//Dispatch is our 'action' in the todos.js function.
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
