const createSlice= require('@reduxjs/toolkit').createSlice

const initialState = {

    numOfCream : 20
}


const iceCreamSlice = createSlice ({

    name:"icecream" ,
    initialState,

    reducers:{

        iceCremeOrder:(state)=> {
       state.numOfCream--

        },
        iceCremeRestock:(state , action)=> {
            state.numOfCream+= action.payload
        }

    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions