import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div>
           <NavLink to="/">Home</NavLink> 
           <NavLink to="/about">About</NavLink> 
           <NavLink to="/blog">Blog</NavLink> 
        </div>
    </nav>
  )
}

export default Navbar