const {createSlice, configureStore} = require ("@reduxjs/toolkit");

//initial state 
const initialState = {
    counter : 0
};


// create slice


const counterSlice = createSlice ({
name : "counter",
initialState,
reducers:{

    //increment
    increment: (state , action)=> {
    state.counter =   state.counter + 1 ;
  },
//decrement

decrement: (state , action) => {
state.counter = state.counter -  1 ;

},
//incerement by amount
incrementBy: (state, action) => {

    state.counter = action.payload;
},

//reset a zero
reset:(state , action) => {

    state.counter = 0 ;
}
}

});

//Generate Actions 

const {increment , decrement , incrementBy, reset} = counterSlice.actions; 

//Generate Reducer
const counterReducer = counterSlice.reducer;

//store 
const store = configureStore ({
    reducer : counterReducer,
});

//disptach

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementBy(140));
store.dispatch(reset());

console.log(store.getState());

