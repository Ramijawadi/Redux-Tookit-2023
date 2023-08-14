console.log("Welcome to redux course");

const {createAction, createReducer, builder, configureStore} = require("@reduxjs/toolkit")
const logger  = require('redux-logger').createLogger();
//initialstate

const initialState = {

    counter : 0,
};
//Create Action 

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const reset = createAction("RESET");
const incrementBy = createAction(INCREMENT_By = (amount)=> {

    return{

        payload:{
        amount,

}}
});
console.log(INCREMENT_By(30))
//create Reducer

 const counterSlice =  createReducer (initialState , (builder)=> {

//increment
builder.addCase(increment , (state)=> {
 state.counter += 1;
})

//decrement
builder.addCase(decrement , (state)=> {

    state.counter -=1;

})

builder.addCase(reset , (state)=> {

    state.counter = 0;
})

builder.addCase(incrementBy , (state , action)=> {

    state.counter = action.payload.amount;
})

})

//Store
const store = configureStore ({
    reducer : counterSlice,
    middleware: (getDefaultMiddelware)=> getDefaultMiddelware().concat(logger)
})
//dispatch action
 
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(incrementBy(100));
console.log(store.getState());

