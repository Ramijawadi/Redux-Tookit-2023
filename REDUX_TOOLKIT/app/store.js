const configureStore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cakes/cakeSlice')

const store = configureStore({
reducer:{
 cakes: cakeReducer
}
})

module.exports = store