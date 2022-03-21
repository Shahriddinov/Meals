import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
          <h1>Meals <span>App</span></h1>
      </div>
      <div className="navbar-links">
          <ul>
           <Link to="/">
             {""}
           </Link>
           <Link to="/categories">
             {""}
             </Link> 
           <Link to="/random">
             {""}
             </Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
