const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require("redux-logger")
const cakeReducer = require('../features/cakes/cakeSlice')
const iceReducer = require('../features/icecream/icecreamSlice')
//nous permer de voir les modification de state on console.log
const logger = reduxLogger.createLogger()

const store = configureStore({
reducer:{
 cakes: cakeReducer,
 cream : iceReducer,
},
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

module.exports = store