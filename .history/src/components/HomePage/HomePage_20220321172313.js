import React, {useState, useEffect, useContext} from 'react'
import "./HomePage.scss"
import myContext from '.'
function HomePage() {

  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <div className="home">
      <div className="home-search">
        <input type="text" className="" placeholder="Type a meal name..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button>Search Meal</button>
      </div>

      <div className="home-meals">

      </div>
    </div>
  )
}

export default HomePage

