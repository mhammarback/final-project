import React, { useState, useRef } from 'react'

import { Nav } from '../components/Nav'
import  { HamburgerMenu }  from '../components/Menu'

export const Header = () => {
	const [open, setOpen] = useState(false)
	const node = useRef()
	const menuId = 'main-menu'
	
	return (
    <header>
			<div className="hidden-hamburger">
			  <div ref={node}>
          <HamburgerMenu pen={open} setOpen={setOpen} id={menuId} />   
        </div>
		  </div>
			<div className="hidden-nav">
        <Nav />
			</div>	
			<div className="header-color-container">
				<h1>CONSENT</h1>
        <p>from 1 july 2018 consent is a part of the Swedish law</p>
			</div>
    </header>
	)
}
