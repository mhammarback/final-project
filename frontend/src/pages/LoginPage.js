import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { user, logout } from '../reducers/user'
import { Button } from '../lib/Button'

const LOGIN_URL = 'https://login-logout-authentication.herokuapp.com/sessions'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState('')

  const handleLoginSuccess = (loginResponse) => {
    dispatch(user.actions.setAccessToken({ accessToken: loginResponse.accessToken}))
    dispatch(user.actions.setUserId({ userId: loginResponse.userId}))
    dispatch(user.actions.setUserName({ name: loginResponse.name }))
  }

   const handleLoginFailed = () => {
    dispatch(logout())
    }

  const handleLogin = (event) => {
    event.preventDefault()

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          setErrorMessage(true)
        } else {
          setErrorMessage(false)
          setLogin(true)
          return res.json()
        }
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err))
  }
  
  if (login === false) {
  return (
    <section className ="login-container">
      <form className='form-style'>
        <h1>Login</h1>
        <div className='content-container'>
          <label>
          <input
            type='text'
            placeholder='Enter email...'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            minLength='2'
            required
            className="message-field"
          />
					</label>
          <label>
          <input
            type='password'
            placeholder='Enter Password...'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength='5'
            required
            className="message-field"
          />
					</label>
          <Button className='input-button' type='submit' onClick={handleLogin}>
            Login
          </Button>
          <Button>
            Sign up
          </Button>
        </div>
      </form>
      {errorMessage === true ? <p>Could not login, try again</p> : null }
    </section>
  )
  } else {
    return <Redirect to='/forum' />
  }
}

/*
  <Button
    type="submit"
    onClick={handleNewUser}>
    Sign up
  </Button> */