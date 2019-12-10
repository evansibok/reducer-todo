import * as types from './actionTypes'

export const initialState = {
	todos: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589
		}
	]
}

export function reducer(state, action) {
	switch (action.type) {
		case types.INPUT_CHANGE:
			return {
				...state,
				[action.payload.name]: action.payload.value
			}
		case types.ADD_TODO:
			return {
				...state.todos,
			}
		default:
			return state;
	}
}