import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components/macro'

export const Nav = () => {
  return (
    <NavBar>
      <div>
        <NavLink to ='/sign' exact className='nav-links'>
        SIGN UP
        </NavLink>
        ||
        <NavLink to='/sign' exact className='nav-links'>
        SIGN IN 
        </NavLink>
      </div>
      <div>
        <NavLink to ='/lawbook' exact className='nav-links'>
        LAWBOOK 
        </NavLink>
        <NavLink to='/discussion' exact className='nav-links'>
        DISCUSSION CARDS
        </NavLink>
        <NavLink to='/forum' exact className='nav-links'>
        FORUM
        </NavLink>
        <NavLink to='/' exact className='nav-links'>
        HOME 
        </NavLink>   
      </div> 
    </NavBar>
  )
}

export const NavBar = styled.section`
  display: flex;
  flex-direction: column;
  margin:10px;  

  @media (min-width: 1024px) {
  flex-direction: row;
  }
`
