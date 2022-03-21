import React, {useState, useEffect} from 'react'
import "./HomePage.scss"
function HomePage() {

  const searchTerm, setSearchTerm
  return (
    <div className="home">
      <div className="home-search">
        <input type="text" className="" placeholder="Type a meal name..."/>
        <button>Search Meal</button>
      </div>

      <div className="home-meals">

      </div>
    </div>
  )
}

export default HomePage

