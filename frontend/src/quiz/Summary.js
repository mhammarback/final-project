import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { quiz } from '../reducers/quiz'

import { Button } from '../lib/Button'

export const Summary = () => {
	const summary = useSelector((state) => state.quiz.summary)
	const dispatch = useDispatch()
	
  return (
		<Section>
		  <h2>We have your results</h2> 
		    <p>You answered {summary.correctAnswers} correct  out of {summary.numberOfQuestions} questions! </p>
			  <p>{summary.quote}</p>
			  <NavLink to="/quiz"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></NavLink>
    </Section>
  )
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`  
