const redux = require("redux");

//create store from redux
const createStore = redux.createStore;


//action
const CAKE_ORDERS= 'CAKE_ORDERS' ;
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const CAKE_lOSS = 'CAKE_lOSS';

//action creator
function OrderCake (){

    return{
        type : CAKE_ORDERS,
        payload : 1 ,

    }

}

 function Restock (qte = 1){
return {

    type :CAKE_RESTOCK ,
    payload : qte 

}

}

function Loss (qte = 1){

    return {

        type:CAKE_lOSS,
        payload : qte
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
   case 
   CAKE_RESTOCK : 
   return {
...state,
numOfCakes: state.numOfCakes + action.payload

   }
   case 
   CAKE_lOSS : 
   return {
    ...state ,
    numOfCakes: state.numOfCakes - action.payload
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
store.dispatch(Restock(3));
store.dispatch(Loss(5));
