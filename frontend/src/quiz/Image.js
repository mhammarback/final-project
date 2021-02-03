import React from 'react'
import { useSelector } from 'react-redux'

import { QuestionPicture } from '../lib/Container'

export const Image = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    return (
        <QuestionPicture src={require(`../img/${question.image}`)} alt="group"/>
    )
}