import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {iceCremeOrder , iceCremeRestock} from './icecreamSlice'

const IceCreamView = () => {
  const [value , setValue]= useState(1)
const numOfCream = useSelector((state)=>state.cream.numOfCream )
const dispatch = useDispatch()
  return (
    <div>
    <h1> number of ice Cream  {numOfCream}</h1>
    <button onClick={()=>dispatch(iceCremeOrder())} > order ice Cream</button> <br /><br />

    <input type='number' value={value} onChange={(e)=>setValue(parseInt (e.target.value))} /> <br /> <br />

    <button onClick={()=>dispatch(iceCremeRestock(value))}> restock ice Creams </button>
        </div>
  )
}

export default IceCreamView
