import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Button } from '../lib/Button'

export const QuizHome = () => {
	return(
		<>
		<Section>
		<h1>Welcome to the quiz page username</h1>
		 <NavLink to="/quiz-start"><Button>start</Button></NavLink>
		</Section>
		</>
	)
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`  