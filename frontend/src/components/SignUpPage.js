import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { user } from '../reducers/user'
import { Button } from '../lib/Button'

const SIGNUP_URL = 'https://final-project-technigo.herokuapp.com/user'

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
  <Section>
  <form className='login-form form-style' onSubmit={handleSubmit}>
    <h1>SIGN UP</h1>
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
          <Button className='input-button' type='submit'>Sign up</Button>
          <p>Already a user?</p>
            <Button className="input-button" type="button" onClick={() => setPage('login')}>Log in</Button>
        </div>
      </form>
      {error && <div className="div-error">{`${error}`}</div>}
    </Section>
  </>
  )
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`  

