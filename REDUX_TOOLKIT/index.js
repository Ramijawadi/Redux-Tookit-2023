const store = require('./app/store')
const cakeActions = require('./features/cakes/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial state',store.getState())
const unsubscribe = store.subscribe (()=>{
console.log('updated state',store.getState())
})


store.dispatch(fetchUsers())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.restock(4))

// store.dispatch(iceCreamActions.iceCremeOrder())
// store.dispatch(iceCreamActions.iceCremeOrder())
// store.dispatch(iceCreamActions.iceCremeOrder())
// store.dispatch(iceCreamActions.iceCremeRestock(10))



unsubscribe()