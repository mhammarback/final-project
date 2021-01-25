import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SignUpPage } from '../components/SignUpPage'
import { LoginPage } from '../components/LoginPage'
import { QuizPage } from '../pages/QuizPage'


export const LoginSignup = () => {
  const [page, setPage] = useState('signup')
  const accessToken = useSelector((store) => store.user.accessToken)
  
  if (!accessToken) {
    return (
      <>
        {page === 'signup' ? (<SignUpPage setPage={setPage} />) : (<LoginPage setPage={setPage} />)}
      </>
    )
  } else {
      return (
        <QuizPage setPage={setPage} />
      )
    }
}