// import  {cakeActions} from '../cakes/cakeSlice';

import {createSlice}  from '@reduxjs/toolkit'
import {order as cakeOrder} from '../cakes/cakeSlice'


const initialState = {

    numOfCream: 20
}


export const iceCreamSlice = createSlice({

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
    //on utulise map object notation 
    // extraReducers: {
    //     ['cake/order']: (state) => {
    //         state.numOfCream--
    //     },}

    extraReducers: (builder) => {

        builder.addCase(cakeOrder, (state) => {

            state.numOfCream--
        }
)}





})

export default iceCreamSlice.reducer
export const {iceCremeOrder , iceCremeRestock} = iceCreamSlice.actions