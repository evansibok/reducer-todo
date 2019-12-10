import * as types from './actionTypes'

export const initialState = {
	todos: [],
	text: '',
}

export function reducer(state, action) {
	switch (action.type) {
		case types.INPUT_CHANGE:
			return {
				...state,
				text: action.payload
			}
		case types.ADD_TODO:
			return {
				text: "",
				todos: [...state.todos, action.payload]
			}
		case types.TOGGLE_COMPLETE:
			return {
				...state,
				todos: [...action.payload.todos]
			}
		case types.CLEAR_COMPLETED:
			return {
				...state,
				todos: [...action.payload.todos]
			}
		default:
			return state;
	}
}