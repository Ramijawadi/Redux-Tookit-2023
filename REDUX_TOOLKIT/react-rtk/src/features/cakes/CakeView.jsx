
import {  useSelector , useDispatch  } from "react-redux"
import {order , restock} from './cakeSlice'
const CakeView = () => {
const dispatch= useDispatch()
    const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
  return (
    <div>
<h1> number of cakes {numOfCakes}</h1>
<button onClick={()=>dispatch(order())} > order cakes</button>
<button onClick={()=>dispatch(restock(5))}> restock cakes</button>
    </div>
  )
}

export default CakeView
