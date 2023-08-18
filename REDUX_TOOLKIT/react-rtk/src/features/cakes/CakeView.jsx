import React from "react"
import {  useSelector } from "react-redux"

const CakeView = () => {

    const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
  return (
    <div>
<h1> number of cakes {numOfCakes}</h1>
<button> order cakes</button>
<button> restock cakes</button>
    </div>
  )
}

export default CakeView
