import React from 'react'

import { Nav } from '../components/Nav'

export const Footer = () => {
	return (
    <div className ="container">
      <div className="hidden-nav">
			<Nav />
      </div>
			  <div className="end-text">
          <p> This is my final project for the Technigo Bootcamp.
						I wanted to build a webpage in a topic i care about. 
						One way to reduce sexual assaults is to teach young adults about consent.
					  And that is the purpose of this website. ....</p>
			  </div>
    </div>
	)
}

