const redux = require('redux')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios')


const initialState = {
    loading:false,
    users:[],
    error :''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//Actions creator

const fetchUserRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = (error) => {
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

//define reducer function
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload

            }
        default:
            return state
        
    }

}
// asyn action creator
const fetchUsers = (dispatch) => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })

    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleWare))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())