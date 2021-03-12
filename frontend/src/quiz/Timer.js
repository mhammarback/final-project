import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Progressbar } from '../lib/Progressbar'

export const Timer = () => {
  const timerStart = useSelector((state) => state.quiz.timerStart)
  const deciseconds = useSelector((state) => state.quiz.deciseconds)
  const dispatch = useDispatch()

  useEffect(() => {
    let timerInterval = null
    if (deciseconds === 0) {
      dispatch(quiz.actions.setTimer())
      dispatch(quiz.actions.enableNextButton())
      clearInterval(timerInterval)
    }
    if (timerStart) {
      timerInterval = setInterval(() => {
        dispatch(quiz.actions.countdowndeciseconds())
      }, 100)
    }
    return () => clearInterval(timerInterval)
  }, [timerStart, deciseconds, dispatch])

  return (
    <>
      <Progressbar />
    </>
  )
}