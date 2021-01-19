
import React from 'react'
import { Nav } from '../components/Nav'

export const Header = () => {
	return (
    <header>
      <Nav />
			<div className="header-color-container">
				<h1>CONSENT</h1>
        <p>from 1 july 2018 consent is a part of the Swedish law</p>
			</div>
    </header>
	)
}
