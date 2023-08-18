
import IceCreamView from './features/icecream/iceCreamView'
import CakeView from './features/cakes/cakeView'
import UserView from './features/user/userView'

import './App.css'

function App() {
  return (
    <>
      <div className="app">
<CakeView />
<IceCreamView />
<UserView />
      </div>
     
    </>
  )
}

export default App
