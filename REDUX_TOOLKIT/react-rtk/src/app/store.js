import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require("redux-logger")
import  cakeReducer from '../features/cakes/cakeSlice'
import  iceReducer  from '../features/icecream/icecreamSlice'
//nous permer de voir les modification de state on console.log
// const logger = reduxLogger.createLogger()
import  userReducer  from '../features/user/userSlice'

export const store = configureStore({
reducer:{
 cake: cakeReducer,
 cream : iceReducer,
 user: userReducer 
},
// middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
