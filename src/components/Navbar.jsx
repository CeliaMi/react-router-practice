import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container">
           <NavLink  className="btn btn-outline-light" to="/">Home</NavLink> 
           <NavLink className="btn btn-outline-light" to="/about">About</NavLink> 
           <NavLink className="btn btn-outline-light" to="/blog">Blog</NavLink> 
        </div>
    </nav>
  )
}

export default Navbar