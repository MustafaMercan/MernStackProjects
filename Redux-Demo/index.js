
const redux = require('redux');

const createStore = redux.createStore;


const BUY_CAKE = 'BUY_CAKE';



// Defination Action
function buyCake()
{   
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}



// State
const initialState = {
    numOfCakes : 10,
}


// (previousState, action) => newState

//reducer
const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        default: return state;
    }
}




const store = createStore(reducer);
console.log(store.getState());
const unsubscribe =  store.subscribe(() => {
    console.log('Updated store ', store.getState().numOfCakes);
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe();

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