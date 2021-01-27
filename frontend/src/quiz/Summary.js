import React from 'react'
import { Navlink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { Button } from '../lib/Button'
export const Summary = () => {
	const summary = useSelector((state) => state.quiz.summary)
	const dispatch = useDispatch()

  return (
		<>
		  <h2>We have your results</h2> 
		  <p>You answered {summary.correctAnswers} / {summary.numberOfQusetions} questions! </p>
			<p>{summary.quote}</p>
			<Navlink to="/quiz"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></Navlink>
    </>
  )
}