

const { Immer } = require('immer');
const redux = require('redux');
const createStore = redux.createStore;
const producer = require('immer').produce

const initialState = {

    name: 'rami',
    adress: {

        street: 'monastir 2000',
        city: 'hay 10',
        state: 'single'
    }
}

//actions
const UPDTAE_STREET = 'UPDTAE_STREET'


//action creator
function updateStreet(street) {

    return {
        type: UPDTAE_STREET,
        payload: street,
    }
}

//create reducer 

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDTAE_STREET:
            // return{
            //     ...state,
            //     adress:{
            //     ...state.adress,
            //     street : action.payload,
            // },

            return producer(state, (draft) => {
                draft.adress.street = action.payload
            })
            default: {
            return state
        }
    }
}
const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
})

store.dispatch(updateStreet('sidi bouzid  6100'));

unsubscribe()


