const redux = require('redux');
const axios = require('axios');
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware;

const API = 'https://jsonplaceholder.typicode.com/users'
const initialState = {

    loading: false,
    users: [],
    error: ''
}

const FETCH_DATA_REQUESTED = 'FETCH_DATA_REQUESTED'
const FETCH_DATA_SUCCEDED = 'FETCH_DATA_SUCCEDED'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

//ACTIONS CREATORS

function FetchDataRequested() {

    return {
        type: FETCH_DATA_REQUESTED
    }
}

function FetchDataSucceded(users) {
    return {
        type: FETCH_DATA_SUCCEDED,
        payload: users
    }
}
function FetchDataFailure(error) {
    return {
        type: FETCH_DATA_FAILURE ?
            payload : error

    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA_REQUESTED: {
            return {
                ...state,
                loading: true,
               
            }
        }
        case FETCH_DATA_SUCCEDED: {
            return {
                loading: false,
                users: action.payload,
                error: '',

            }
        }

        case FETCH_DATA_FAILURE: {
            return {
                loading: false,
                users: [],
                error: action.payload,
            }


        }
    }

}

  const fetchUsers = () => {
 return function(dispatch){
dispatch(FetchDataRequested())
    axios.get(API).then((response) => {
        const users = response.data.map((user)=> user.id) 
        dispatch(FetchDataSucceded(users))
    }).catch ((error) => {
dispatch(FetchDataFailure(error.message))
        //error
    })
 }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
 store.subscribe (()=> {

    console.log('the store value' , store.getState()) 
 })

 store.dispatch(fetchUsers())
