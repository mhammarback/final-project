import React from 'react'
import styled from 'styled-components/macro'

import { Nav } from '../components/Nav'

export const Footer = () => {
	return (
    <Footer>
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
    </Footer>
	)
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 80px 10px;
  background-color: #F5E9DC; 
`

const EndTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const EndText = styled.p`
  @media (min-width: 700px) and (max-width: 1024px) {
  width: 20%;
	margin: 40px 50px 0px 0px;
	}
	@media (min-width: 1024px) {
	width: 20%;
	margin: 40px 50px 0px 0px;
	}
`