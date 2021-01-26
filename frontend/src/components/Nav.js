import React from 'react'
import { NavLink } from 'react-router-dom'


export const Nav = () => {
  return (
    <section className ="navbar">
     <div>
      <NavLink to ="/sign" className="nav-links">
      SIGN UP
      </NavLink>
      ||
      <NavLink to="/about" exact className="nav-links">
      SIGN IN 
      </NavLink>
    </div>
    <div className ="links-right">
      <NavLink to ="/lawbook" className="nav-links">
      LAWBOOK 
      </NavLink>
      <NavLink to="/discussion" exact className="nav-links">
      DISCUSSION CARDS
      </NavLink>
      <NavLink to="/" exact className="nav-links">
      HOME 
      </NavLink>  
    </div> 
  </section>
  )
}

