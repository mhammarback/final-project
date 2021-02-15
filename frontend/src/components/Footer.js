import React from 'react'

import { Nav } from '../components/Nav'
import { FooterContainer, EndTextContainer, HiddenNav } from '../lib/Container'
import { EndText } from '../lib/Text'


export const Footer = () => {
  return (
    <FooterContainer>
      <HiddenNav>
        <Nav />
      </HiddenNav>
        <EndTextContainer >
          <EndText>This is my final project during the Technigo Bootcamp 2020/2021</EndText>
	</EndTextContainer >
    </FooterContainer>
  )
}



