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
        <EndText></EndText>
		  </EndTextContainer >
    </FooterContainer>
	)
}



