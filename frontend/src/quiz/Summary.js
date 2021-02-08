import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'
import { Button } from '../lib/Button'
import { Section } from '../lib/Container'
import { SectionQuiz } from '../lib/Form'
import { QuizIcon  } from '../lib/Icons'

export const Summary = () => {
	const summary = useSelector((state) => state.quiz.summary)
	const dispatch = useDispatch()
	
  return (
		<Section>
      <SectionQuiz>
		    <h2>We have your results</h2> 
		      <p>You answered {summary.correctAnswers} correct  out of {summary.numberOfQuestions} questions! </p>
			      <p>{summary.quote}</p>
			        <QuizIcon  src={summary.image} alt="" />
			          <NavLink to="/quiz"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></NavLink>
      </SectionQuiz>
    </Section>
  )
}
