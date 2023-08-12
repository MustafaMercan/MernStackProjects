
const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


// Defination Action
function buyCake()
{   
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIceCream()
{
    return{
        type:BUY_ICECREAM,
        info:'Second redux action'
    }
}



// State
/*
const initialState = {
    numOfCakes : 10,
    numOfIceCreams:20
}*/

const initialCakeState = {
    numOfCakes:10,
}
const initialIceCreamState = {
    numOfIceCreams:20,
}
// (previousState, action) => newState

/*
//reducer
const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }
        default: return state;
    }
}
*/

const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));

console.log(store.getState());

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

store.dispatch(buyIceCream())



store.dispatch(buyCake())



/*
const store = createStore(reducer) // Create store 
console.log('Initial state', store.getState()) // we can access state with getState() method.
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) // subscribe method allow us for listening state.
store.dispatch(buyCake()); // Dispatch(action) allows state to be updated.
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

*/