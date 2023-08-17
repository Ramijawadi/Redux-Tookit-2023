const store = require('./app/store')
const cakeActions = require('./features/cakes/cakeSlice').cakeActions

console.log('initial state',store.getState())
const unsubscribe = store.subscribe (()=>{
console.log('updated state',store.getState())
})

store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.restock(4))

unsubscribe()