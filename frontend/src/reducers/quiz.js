import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 0, questionText: 'First question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
  { id: 1, questionText: 'Second question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Third question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'Four question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Five question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
  { id: 5, questionText: 'Six question', options: ['first', 'second', 'third', 'four'], correctAnswerIndex: 1 },
]

const results = [
	{ text: 'Great job all correct answers'},
	{ text: 'So close, one more time and you will ace it'},
	{ text: 'Keep on practicing'},
]

const summary = {
  numberOfQuestions: null,
  correctAnswers: null,
  quote: null,
}

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  disabled: true,
  optionDisabled: false,
  deciseconds: 100,
  timerStart: true,
  showSummary: false,
  results,
  summary
}

export const quiz = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		submitAnswer: (state, action) => {
			state.timerStart = false
      state.disabled = false
      state.optionDisabled = true
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

			if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.showSummary = true
      }

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
			}
			
		  state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

		goToNextQuestion: (state) => {
			state.disabled = true
			state.optionDisabled = false
			state.deciseconds = 100
			state.timerStart = true
			state.currentQuestionIndex += 1
		},
		goToPreviousQuestion: (state) => {
			state.disabled = true
			state.optionDisabled = false
			state.deciseconds = 100
			state.timerStart = true
			state.currentQuestionIndex -= 1
		},
		restart: () => {
			return initialState
		},
		setTimer: (state) => {
			state.timerStart = false
		},
		countdowndeciseconds: (state) => {
      state.deciseconds -= 1
		},
		enableNextButton: (state) => {
      state.disabled = false
		},
		setSummary: (state, action) => {
			const { numberOfQuestions, correctAnswers } = action.payload
      state.summary.numberOfQuestions = numberOfQuestions
      state.summary.correctAnswers = correctAnswers

			if (correctAnswers > 5 ) {
				state.summary.quote = state.results[0].text
			} else if ( correctAnswers > 4) {
				state.summary.quote = state.results[1].text
			} else if ( correctAnswers > 2) {
				state.summary.quote = state.results[2].text
			}
		}
	}
})