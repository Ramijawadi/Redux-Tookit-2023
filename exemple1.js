const redux = require("redux");
const combineReducers = redux.combineReducers;
//create store from redux
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


//action
const CAKE_ORDERS = 'CAKE_ORDERS';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const CAKE_lOSS = 'CAKE_lOSS';

const ICECREAM_ORDERS = 'ICECREAM_ORDERS';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';

//action creator
function OrderCake() {

    return {
        type: CAKE_ORDERS,
        payload: 1,

    }

}

function Restock(qte = 1) {
    return {

        type: CAKE_RESTOCK,
        payload: qte

    }

}

function Loss(qte = 1) {

    return {

        type: CAKE_lOSS,
        payload: qte
    }
}

function iceCremeOrder(qte = 1) {

    return {
        type: ICECREAM_ORDERS,
        payload: qte
    }
}

function iceCremeRestock(qte = 1) {

    return {
        type: ICECREAM_RESTOCK,
        payload: qte
    }
}

//initial state
// const initialState = {

//     numOfCakes: 10,
//     numOfIceCream : 20,
// }

const iniatialCakeState = {

    numOfCakes: 10
}

const initialIceCreamState = {

    numOfIceCream: 20
}



//(previous state , action)=> new state .. the Reducer


const cakeReducer = (state = iniatialCakeState, action) => {
    switch (action.type) {
        case
            CAKE_ORDERS: return {

                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case
            CAKE_RESTOCK:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload

            }
        case
            CAKE_lOSS:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }


        default:
            return state
    }

}



const iceCreamReducer = (state = initialIceCreamState, action) => {

    switch (action.type) {


        case
            ICECREAM_ORDERS:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }


        case
            ICECREAM_RESTOCK:
            return {

                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream : iceCreamReducer,
})


const store = createStore(rootReducer  , applyMiddleware(logger));
console.log('initial state', store.getState())



//subscribe the store or connect the store
const unsubscribe = store.subscribe(() => {
    // console.log("update state", store.getState())
})

// dispatch actions
// store.dispatch(OrderCake());
// store.dispatch(OrderCake());
// store.dispatch(OrderCake());
// store.dispatch(Restock(3));
// store.dispatch(Loss(5));

const actions = bindActionCreators({ OrderCake, Restock, Loss, iceCremeOrder, iceCremeRestock }, store.dispatch)
actions.OrderCake();
actions.OrderCake();
actions.OrderCake();
actions.Restock(3);
actions.Loss(5);
actions.iceCremeOrder();
actions.iceCremeOrder();
actions.iceCremeRestock(3);

