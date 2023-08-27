const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const ADD_CAKE = 'ADD_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


//Action Creator
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function addCake(){
    return{
        type:ADD_CAKE,
        info:'add cake'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'buy icecream'
    }
}
// (previousState,action) => newState

// Reducers
const initialCakeState = {
    numOfCakes:10,
}
const initialIceCreamState = {
    numOfIceCreams:20
}
// Reducer Function
/*
const reducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}*/
const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}


const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
// Redux store

// Allows access to state via getState()
// Allows tate to be updated via dispatch(action)
// Registers listeners via subscribe(listener)



const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})
const store = createStore(rootReducer,applyMiddleware(logger))

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log(''))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(addCake())
store.dispatch(buyIceCream())
unsubscribe();