const redux = require("redux");

//create store from redux
const createStore = redux.createStore;


//action
const CAKE_ORDERS= 'CAKE_ORDERS' ;


function OrderCake (){

    return{
        type : CAKE_ORDERS,
        quantity : 1 ,

    }

}

const initialState = {

    numOfCakes : 10 
}


//(previous state , action)=> new state


const reducer = (state = initialState , action) => {
 switch(action.type){
case 
CAKE_ORDERS : return{

    ...state , 
    numOfCakes : state.numOfCakes - 1 ,
}
default:
    return state
 }

}
const store = createStore(reducer);
console.log('initial state' , store.getState())

const unsubscribe = store.subscribe(()=> {

    console.log("update state", store.getState())
})


store.dispatch(OrderCake());
store.dispatch(OrderCake());
store.dispatch(OrderCake());
