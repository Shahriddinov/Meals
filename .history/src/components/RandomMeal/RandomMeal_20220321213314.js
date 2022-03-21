import React, {useEffect, useContext} from 'react'
import "./RandomMeal.scss"
import {myContext} from "./context/context"
function RandomMeal () {

  const {randomMeal, fetchRandomMeal} = useContext(myContext);
  return (
    <div className="random">
     
    </div>
  )
}

export default RandomMeal
