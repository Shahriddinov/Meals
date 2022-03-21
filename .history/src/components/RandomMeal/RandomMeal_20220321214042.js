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
       <div key={meal.idMeal} className="random-grid">
         <div className="random-grid-controls">
           <img src={meal.strMealThumb} alt="#"/>
           <button>Generate Another Meal</button>
         </div>
         <div className="random-grid-instractions">
           <h4>Instructions</h4>
           <p>meal.strInstructions</p>
         </div>
       </div>
     ))}
    </div>
  )
}

export default RandomMeal
