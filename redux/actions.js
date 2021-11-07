import axios from 'axios';

//action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_SESSION = 'UPDATE_SESSION';

//action creators
export const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

export const getConnections = () => {
	return (dispatch) => {
		axios.get("http://jsonplaceholder.typicode.com/users")
			.then(response => {
				const users = response.data
        dispatch(addContact(users))
        console.log(users)
			})
			.catch(error => {
				const errorMsg = error.message
			})
	}
}
