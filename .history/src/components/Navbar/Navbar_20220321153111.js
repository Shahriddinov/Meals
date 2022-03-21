import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
          <h1>Meals <span>App</span></h1>
      </div>
      <div className="navbar-links">
          <ul>
              <li>Home</li>
              <li>Categories</li>
              <li>Random</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
