import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user, login } from '../reducers/user'
import { Button } from '../lib/Button'
import { Form, Section, FormContent, FormInput } from '../lib/Form'

export const LoginPage = ({ setPage }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector((store) => store.user.errorMessage)
	
  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(name, password))
  }
	
  return ( 
  <>
    <Section>
      <Form onSubmit={handleSubmit}>
      <h2>SIGN IN </h2>
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
          <Button className='input-button' type='submit'>Sign in</Button>
            <p>Not a user?</p>
              <Button className="input-button" type="button" onClick={() => setPage('signup')}>Sign up</Button>
        </FormContent>
      </Form>
      {error && <div className="div-error">{`${error}`}</div>}
      </Section>
    </>
  )
}



