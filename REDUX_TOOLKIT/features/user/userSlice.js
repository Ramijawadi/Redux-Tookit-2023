const createSlice = require("@reduxjs/toolkit").createSlice
const axios = require('axios')
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

const API = 'https://jsonplaceholder.typicode.com/users'
const initialState = {

    loading: false,
    user:[],
    error:''
}

const fetchUsers = createAsyncThunk ('user/fetchUsers' ,() => {
return (
axios.get(API).then((response)=> response.data.map ((user)=> user.id))
)})

const userSlice = createSlice ({

name:'user',
initialState,
extraReducers: builder => {

    builder.addCase(fetchUsers.pending , state => {

        state.loading = true 
    })
    builder.addCase(fetchUsers.fulfilled , (state , action) => {

        state.loading = false ,
        state.users = action.payload,
        state.error=''
    })
    builder.addCase(fetchUsers.rejected , (state , action) => {

        state.loading = false ,
        users = [],
        state.error = action.error.message
    })
}

})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers