import React from 'react'
import styled from 'styled-components'

import { ContainerCenter } from '../lib/Container'

export const TimeIsUp = ({ color }) => {
  return (
    <ContainerCenter>
      <Text color={color}>You're too slow, consider taking the quiz again!</Text>
    </ContainerCenter>
  )
}

const Text = styled.p`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: ${(props) => props.color};
  -webkit-transition: color .3s ease;
  -o-transition: color .3s ease;
  transition: color .3s ease;
  margin-top: 5px;
  @media (max-width: 500px) {
    font-size: 12px;
    font-style: italic;
  }
`