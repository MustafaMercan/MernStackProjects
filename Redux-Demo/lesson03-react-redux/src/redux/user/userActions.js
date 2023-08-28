import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'
export const fetchUserRequest = () => {
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUserSucces = (users) => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure = (error) => {
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        console.log('sa')
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUserSucces(users))

        })
        .catch(error => {
            const errMsg = error.message;
            dispatch(fetchUserFailure(errMsg))
        })
    }
}