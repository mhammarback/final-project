import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'
import { Button, SmallButton } from '../lib/Button'
import { ContainerCenter , QuizOptionsContainer, ContainerColor  } from '../lib/Container'
import { Timer } from '../quiz/Timer'
import { TimeIsUp } from '../quiz/TimeIsUp'

 
export const Quiz = () => {
	const disabled = useSelector((state) => state.quiz.disabled)
  const deciseconds = useSelector((state) => state.quiz.deciseconds)
  const optionDisabled = useSelector((state) => state.quiz.optionDisabled)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions.length)
  const index = (useSelector((state) => state.quiz.questions)).indexOf(question)
  const { options } = question

  const showSummaryButton = useSelector((state) => state.quiz.showSummary)
  const answers = useSelector((state) => (state.quiz.answers))
  const correct = (answers.filter((answer) => answer.isCorrect)).length

	const dispatch = useDispatch()

	if (!question) {
    return <p>Oh no! I could not find the current question!</p>
  }

	return (
		<ContainerColor>
		<h2>Question {(index + 1)} of {questions}: <span>{question.questionText}</span></h2>
		<>
			<QuizOptionsContainer>

      {options.map((option, optionindex) => {
        return (
          <Button
            background={(optionindex === question.correctAnswerIndex) ? 'green' : 'red'}
            disabled={optionDisabled || deciseconds === 0}
            onClick={() => {
            dispatch(quiz.actions.submitAnswer({ questionId: index, answerIndex: optionindex }))
            }}>
            <li key={optionindex}>{option}</li>
            </Button>
            )
       })}
      </QuizOptionsContainer>
		</>
		{showSummaryButton &&
      <section>
          <NavLink to="/summary">
            <SmallButton onClick={() => dispatch(quiz.actions.setSummary({ numberOfQuestions: questions, correctAnswers: correct }))}>See results</SmallButton>
          </NavLink>
        </section>}
      {!showSummaryButton &&
        <section>
					{(deciseconds > 0) ? <TimeIsUp color="rgba(0, 0, 0, 0)" /> : <TimeIsUp color="rgba(0, 0, 0, 1)" />}

          <ContainerCenter>
            <SmallButton disabled={(index === 0)} onClick={() => dispatch(quiz.actions.goToPreviousQuestion())}>Back</SmallButton>
            <SmallButton disabled={disabled} onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next</SmallButton>
            <NavLink to="/quiz-home"><SmallButton onClick={() => dispatch(quiz.actions.restart())}>Restart</SmallButton></NavLink>
          </ContainerCenter>
					<Timer />
        </section>}
    </ContainerColor>
  )
}

