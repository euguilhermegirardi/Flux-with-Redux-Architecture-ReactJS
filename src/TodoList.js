import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TodoActions from './store/actions/todos';
import { bindActionCreators } from 'redux';

const TodoList = ({ todos, addTodo, removeTodo}) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
        ))}
    </ul>
    <button onClick={() => addTodo('Study React!')}>Add</button>
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

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
