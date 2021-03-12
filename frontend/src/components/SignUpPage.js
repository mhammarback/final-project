import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../reducers/user'
import { Button } from '../lib/Button'
import { Form, Section, FormContent, FormInput } from '../lib/Form'

const SIGNUP_URL = 'https://final-project-technigo.herokuapp.com/users'

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
    <Form onSubmit={handleSubmit}>
    <h2>SIGN UP</h2>
      <FormContent>
        <label>Name</label>
        <FormInput
          type='text'
          placeholder='Enter Name...'
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength='2'
          maxLength='20'
          required
        />
        <label>Password</label>
        <FormInput
          type='password'
          placeholder='Enter Password...'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength='5'
          required
        />
          <Button className='input-button' type='submit'>Sign up</Button>
            <p>Already a user?</p>
              <Button className='input-button' type='button' onClick={() => setPage('login')}>Log in</Button>
        </FormContent>
      </Form>
      {error && <div>{`${error}`}</div>}
    </Section>
  </>
  )
}

