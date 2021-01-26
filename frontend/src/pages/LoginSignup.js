import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SignUpPage } from '../components/SignUpPage'
import { LoginPage } from '../components/LoginPage'
//import { QuizHome } from '../quiz/QuizHome'
import { StartPage } from './StartPage'


export const LoginSignup = () => {
  const [page, setPage] = useState('login')
  const accessToken = useSelector((store) => store.user.accessToken)
  
  if (!accessToken) {
    return (
      <>
        {page === 'login' ? (<LoginPage setPage={setPage} />) : (<SignUpPage setPage={setPage} />)}
      </>
    )
  } else {
      return (
        <StartPage setPage={setPage} />
      )
    }
}
