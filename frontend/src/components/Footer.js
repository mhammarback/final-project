import React from 'react'

import { Nav } from '../components/Nav'
import { FooterContainer, EndTextContainer } from '../lib/Container'
import { EndText } from '../lib/Text'


export const Footer = () => {
	return (
    <FooterContainer>
      <div className="hidden-nav">
		<Nav />
      </div>
		  <EndTextContainer >
        <EndText> This is my final project for the Technigo Bootcamp.
					I wanted to build a webpage in a topic i care about. 
					One way to reduce sexual assaults is to teach young adults about consent.
					And that is the purpose of this website.
		    </EndText>
		  </EndTextContainer >
    </FooterContainer>
	)
}



