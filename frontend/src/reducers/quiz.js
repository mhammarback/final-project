import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 0, questionText: 'Can consent be rewoked?', options: ['No', 'Sometimes', 'Yes', 'Not sure'], image:'group.jpg', correctAnswerIndex: 2 },
  { id: 1, questionText: 'If you are in a relationship,do you automaticly have your partners consent?', options: ['Of course', 'Not sure', 'Yes, we are together?', 'No'], image:'group.jpg', correctAnswerIndex: 3 },
  { id: 2, questionText: 'Can people give consent while they are sleeping?', options: ['No', 'If they said yes before they fell to sleep', 'Yes', 'Not sure'], image:'group.jpg', correctAnswerIndex: 0 },
  { id: 3, questionText: 'Do i need to make sure i have consent?', options: ['Yes', 'Not sure', 'No', 'Sometimes'], image:'group.jpg', correctAnswerIndex: 0 },
  { id: 4, questionText: 'Does a person need to say No verbaly to not give consent?', options: ['Not sure', 'Ofcourse', ' Yes', 'No'], image:'group.jpg', correctAnswerIndex: 3 },
  { id: 5, questionText: 'What year did Sweden add the consent law?', options: ['2000', '2018', '2010', '2020'], image:'group.jpg', correctAnswerIndex: 1 },
]

const results = [
	{ text: 'Great job, all correct answers!', image: './images/love.png' },
	{ text: 'So close, one more time and you will ace it!', image: './images/good-review.png' },
	{ text: 'Keep on practicing, this is important!', image:'./images/message.png' },
]

const summary = {
  numberOfQuestions: null,
  correctAnswers: null,
  quote: null,
  image: null,
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
				state.summary.image = state.results[0].image
			} else if ( correctAnswers > 4) {
				state.summary.quote = state.results[1].text
				state.summary.image = state.results[1].image
			} else if ( correctAnswers > 2) {
				state.summary.quote = state.results[2].text
				state.summary.image = state.results[2].image
			}
		}
	}
})