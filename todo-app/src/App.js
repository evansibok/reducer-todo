import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from '../src/reducers/reducer'
import * as types from '../src/reducers/actionTypes'
import TodoList from '../src/components/todoList'
import TodoForm from './components/todoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onValueChange = evt => {
    dispatch({
      type: types.INPUT_CHANGE,
      payload: evt.target.value
    });
  }

  const addTodo = () => {
    dispatch({
      type: types.ADD_TODO,
      payload: {
        id: Date.now(),
        completed: false,
        item: state.text
      },
    })
  }

  const toggleComplete = id => {
    dispatch({
      type: types.TOGGLE_COMPLETE,
      payload: {
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
      }
    })
  }

  return (
    <div className="App">
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
      <TodoForm text={state.text} onValueChange={onValueChange} addTodo={addTodo} />
    </div>
  );
}

export default App;
