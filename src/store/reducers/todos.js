//It's important to start the reducer with a simples value. Just to initialize the state with some information.
//"INITIAL_STATE" is the default parameter
const INITIAL_STATE = [
  {id: 1, text: 'Do the dishes'},
  {id: 2, text: 'Lunch with wife'},
  {id: 3, text: 'Study English'},
];

//The reducer will be (always) a function!
//Reducer will listen when some action is called, then reducer will edit the state.
//So... the "state" will receive the information before the action, then the action will inform the new information.
//Example: ['Cinema on Friday', 'Study React'] => state (state is the "array" before being manipulated by the Reducer)
//Then from the TodosList.js component we call the action "addTodo('Study React!')" => action.
//So the 'action' will add the new information in the array. All 'action' has a 'type', example: ADD_TODO or REMOVE_TODO
export default function todos(state = INITIAL_STATE, action){
  switch (action.type){
  //'swtich' = Inside of the reducer we will manipulate 'action.type' and based in the result of the 'action.type' we...
  //...will do something with ou state of todos.

    case 'ADD_TODO':  //'case' = If the action wich was called is the 'ADD_TODO' do the action.
      return [...state, {id: Math.random(), text: action.payload.text }];

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);  //return 'todos' that have different id from the selected one.

    //return state; (just in case if we don't edit anything. So the reducer will call the state without changes.)
    default:
      return state;
  }
}
