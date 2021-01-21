import React from 'react'

import { StyledBurger, StyledMenu } from './BurgerStyling'

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us"></span>
        SIGN UP || SIGN IN 
      </a>
      <a href="/discussion">
        <span role="img" aria-label="price"></span>
        DISCUSSION CARDS
        </a>
      <a href="/lawbook">
        <span role="img" aria-label="contact"></span>
        LAWBOOK
        </a>
				<a href="/quiz">
        <span role="img" aria-label="contact"></span>
        QUIZ
        </a>
    </StyledMenu>
  )
}

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}


