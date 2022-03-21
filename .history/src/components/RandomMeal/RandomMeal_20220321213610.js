import React, {useEffect, useContext} from 'react'
import "./RandomMeal.scss"
import {myContext} from "./context/context"
function RandomMeal () {

  const {randomMeal, fetchRandomMeal} = useContext(myContext);

  useEffect(()=>{
    fetchRandomMeal();
  },[fetchRandomMeal])
  return (
    <div className="random">
     {randomMeal.map(meal=>(
       <div>
         <div>

         </div>
         <div>
           <h4>Instructions</h4>
         </div>
       </div>
     ))}
    </div>
  )
}

export default RandomMeal
