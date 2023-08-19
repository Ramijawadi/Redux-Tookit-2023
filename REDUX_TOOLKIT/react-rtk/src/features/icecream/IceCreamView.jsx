
import { useSelector , useDispatch } from 'react-redux'
import {iceCremeOrder , iceCremeRestock} from './icecreamSlice'

const IceCreamView = () => {
const numOfCream = useSelector((state)=>state.cream.numOfCream )
const dispatch = useDispatch()
  return (
    <div>
    <h1> number of ice Cream  {numOfCream}</h1>
    <button onClick={()=>dispatch(iceCremeOrder())} > order ice Cream</button>
    <button onClick={()=>dispatch(iceCremeRestock(5))}> restock ice Creams </button>
        </div>
  )
}

export default IceCreamView
