//All actions is a function here.
//Everything inside of these function is exactly what the reducers will listen.

export const addTodo = text => ({  //text is parameter of the addTodo.
  type: 'ADD_TODO',  //Action that will be executed.
  payload: { text },  //Every second information that we're passing to the reducers we use inside of a 'payload'.
});

//instead of text it's better use id to remove.
export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id },
});
