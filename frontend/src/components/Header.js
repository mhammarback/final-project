import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'

import { Nav } from '../components/Nav'
import  { HamburgerMenu }  from '../components/Menu'
import { HiddenBurger, HiddenNav } from '../lib/Container'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = 'main-menu'
	
  return (
    <HeaderContainer>
      <HiddenBurger>
	<div ref={node}>
          <HamburgerMenu open={open} setOpen={setOpen} id={menuId} />   
        </div>
      </HiddenBurger>
	<HiddenNav>
          <Nav />
	</HiddenNav>	
	  <HeaderColorContainer>
	    <HeaderText>CONSENT</HeaderText>
	      <HeaderTextSmall>from 1 july 2018 consent is a part of the Swedish law</HeaderTextSmall>
	  </HeaderColorContainer>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
  margin-bottom: 100px;
`

const HeaderColorContainer = styled.div`
  background-color: #F5E9DC;
  width:70%;
  height: 400px;
  text-align: center;

  @media (min-width: 700px) and (max-width: 1024px) {
    height: 450px;
  }
  @media (min-width: 1024px) {
    height: 450px;
  }
`
 const HeaderText = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  margin:0px;
  font-size: 70px;

@media (min-width: 700px) and (max-width: 1024px) {
  left: 60%;
  font-size: 130px;
}

@media (min-width: 1024px) {
  left: 60%;
  font-size: 180px;
}
`

const HeaderTextSmall = styled.p`
  display: none;
  position: absolute;
  top: 40%;
  left: 54%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #000;
  margin:0px;
	
  @media (min-width: 780px) and (max-width: 1024px) {
    display:flex;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%); 
    font-size: 17px;
   }

  @media (min-width: 1024px) and (max-width: 1640px) {
    display:flex;
    top: 45%;
    left: 52%;
    transform: translate(-50%, -50%);
    font-size: 22px;
  }

  @media (min-width: 1640px) {
    display: none;
  }
`
