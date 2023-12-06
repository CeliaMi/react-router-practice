import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <NavLink  className="nav-item active" to="/">Home</NavLink> 
           <NavLink className="nav-item active" to="/about">About</NavLink> 
           <NavLink className="nav-item active" to="/blog">Blog</NavLink> 
           </ul>
        </div>
    </nav>
  )
}

export default Navbar