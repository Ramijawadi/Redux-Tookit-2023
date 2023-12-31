const {createAsyncThunk , createSlice , configureStore} = require('@reduxjs/toolkit')
const axios = require ('axios');

const API = 'https://jsonplaceholder.typicode.com/posts'
const initialState = {

    posts :[],
    loading : false ,
    error : null 
}

//initial state
//asyncThunk

const fetchPosts = createAsyncThunk("posts/fetchPosts" ,async ()=> {

   const res= await axios.get(API);
   return res.data ;
})

//slice

 const postSlice = createSlice ({
    name : "posts",
    initialState,
    extraReducers :(builder) => {

builder.addCase(fetchPosts.pending,(state, action)=> {
    state.loading = true ;

});

builder.addCase(fetchPosts.fulfilled, (state, action)=>{
    state.posts=action.payload;
    state.loading= false;
});
builder.addCase(fetchPosts.rejected, (state, action)=> {
    state.posts = [];
    loading = false ;
    state.error = action.payload;
})

}


})

//generate reducer
const postReducer = postSlice.reducer

//store 
const store = configureStore ({
    reducer : postReducer
})

//dispatch 
store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(fetchPosts());