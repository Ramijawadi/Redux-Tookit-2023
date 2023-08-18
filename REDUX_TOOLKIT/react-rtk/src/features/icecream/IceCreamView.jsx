import React from 'react'
import { useSelector } from 'react-redux'


const IceCreamView = () => {
const numOfCream = useSelector((state)=>state.cream.numOfCream )

  return (
    <div>
    <h1> number of ice Cream  {numOfCream}</h1>
    <button> order ice Cream</button>
    <button> restock ice Creams </button>
        </div>
  )
}

export default IceCreamView
