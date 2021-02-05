import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'
import { Button } from '../lib/Button'
import { MediumCard } from '../lib/Cards'
import { Section } from '../lib/Container'

export const Summary = () => {
	const summary = useSelector((state) => state.quiz.summary)
	const dispatch = useDispatch()
	
  return (
		<Section>
      <MediumCard>
		  <h2>We have your results</h2> 
		    <p>You answered {summary.correctAnswers} correct  out of {summary.numberOfQuestions} questions! </p>
			  <p>{summary.quote}</p>
			  <NavLink to="/quiz"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></NavLink>
        </MediumCard>
    </Section>
  )
}
