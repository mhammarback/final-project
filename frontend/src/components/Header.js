
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
    <header>
      <section className ="navbar">
        <div>
        <NavLink to ="/" className="nav-links">
          SIGN UP
          </NavLink>
          ||
          <NavLink to="/about" exact className="nav-links">
          SIGN IN 
          </NavLink>
        </div>
        <div className ="links-right">
          <NavLink to ="/" className="nav-links">
          DISCUSSION CARDS
          </NavLink>
          <NavLink to="/discussion" exact className="nav-links">
          LAWBOOK
          </NavLink>
          <NavLink to="/contact" exact className="nav-links">
          QUIZ
          </NavLink>  
        </div> 

      </section>
			
			<div className="header-color-container">
				<h1>CONSENT</h1>
        <p>from 1 july 2018 consent is a part of the Swedish law</p>
			</div>


    </header>
	)
}
