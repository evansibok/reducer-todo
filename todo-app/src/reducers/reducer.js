
export const initialState = {
	todoList: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589
		}
	]
}

export default function reducer(state, action) {
	switch (action.type) {
		default:
			return state;
	}
}