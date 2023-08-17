const { cakeActions } = require('../cakes/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {

    numOfCream: 20
}


const iceCreamSlice = createSlice({

    name: "icecream",
    initialState,

    reducers: {

        iceCremeOrder: (state) => {
            state.numOfCream--

        },
        iceCremeRestock: (state, action) => {
            state.numOfCream += action.payload
        },
    },
    //on utulise si on veu modifier un autre reducer  dans le notre slice
    // extraReducers: {
    //     ['cake/order']: (state) => {
    //         state.numOfCream--
    //     },}

    extraReducers: (builder) => {

        builder.addCase(cakeActions.order, (state) => {

            state.numOfCream--
        }
)}





})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions