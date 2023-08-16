const redux = require("redux");

//create store from redux
const createStore = redux.createStore;


//action
const CAKE_ORDERS= 'CAKE_ORDERS' ;


//action creator
function OrderCake (){

    return{
        type : CAKE_ORDERS,
        quantity : 1 ,

    }

}

//initial state
const initialState = {

    numOfCakes : 10 
}


//(previous state , action)=> new state .. the Reducer


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



//subscribe the store or connect the store
const unsubscribe = store.subscribe(()=> {
    console.log("update state", store.getState())
})

 // dispatch actions
store.dispatch(OrderCake());
store.dispatch(OrderCake());
store.dispatch(OrderCake());
