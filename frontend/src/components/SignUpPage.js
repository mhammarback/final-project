import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../reducers/user'

const SIGNUP_URL = 'https://test/users'

export const SignUpPage = ({ setPage }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector((store) => store.user.errorMessage)

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()
  

  fetch(SIGNUP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password })
  })
  .then ((res) => {
    if (!res.ok) {
      throw new Error('Could not create account. Please try a new username')
    }
    return res.json()
  })
  .then ((json) => {
    dispatch(user.actions.setUserId({ userId: json.userId}))
    dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
  })
  .catch((error) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }))
  })
}  
  
return ( 
  <>
  <form className='login-form form-style' onSubmit={handleSubmit}>
    <h1>Sign up </h1>
      <div className='content-container'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Enter Name...'
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength='2'
          maxLength='20'
          required
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter Password...'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength='5'
          required
        />
        <button className='input-button' type='submit'>Sign up</button>
      </div>
    </form>
    <p>Already a user?</p>
    <button className="input-button" type="button" onClick={() => setPage('login')}>Log in</button>
  </>
)
}