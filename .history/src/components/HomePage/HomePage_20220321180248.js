import React, {useState, useCallback, useContext} from 'react'
import "./HomePage.scss"
import {myContext} from '../context/context'
function HomePage() {

  const [searchTerm, setSearchTerm] = useState("");
 
  const {fetchHomePageMeals, meals} = useContext(myContext);
  const fetchHomePageMealsHandler = useCallback(()=>{
    fetchHomePageMeals(searchTerm)
  }, [searchTerm, fetchHomePageMeals]);
  return (
    <div className="home">
      <div className="home-search">
        <input type="text" className="" placeholder="Type a meal name..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button onClick={fetchHomePageMealsHandler} >Search Meal</button>
      </div>

      <div className="home-meals">
       {meals?.length > 0 ? meals.map(meal=>{
         <div></div>
       })}
      </div>
    </div>
  )
}

export default HomePage

