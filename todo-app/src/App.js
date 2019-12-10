import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from '../src/reducers/reducer'
import * as types from '../src/reducers/actionTypes'
import TodoList from '../src/components/todoList'
import TodoForm from './components/todoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.todos)

  const onValueChange = evt => {
    dispatch({
      type: types.INPUT_CHANGE,
      payload: {
        ...state,
        [evt.target.name]: evt.target.value
      }
    });
  }

  const addTodo = todo => {
    dispatch({
      type: types.ADD_TODO,
      payload: [...state.todos, todo],
    })
  }

  return (
    <div className="App">
      <TodoList todos={state.todos} />
      <TodoForm todos={state.todos} onValueChange={onValueChange} addTodo={addTodo} />
    </div>
  );
}

export default App;
