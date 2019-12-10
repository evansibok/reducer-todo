import * as types from './actionTypes'

export const initialState = {
	todos: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: Date.now()
		}
	],
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
		default:
			return state;
	}
}