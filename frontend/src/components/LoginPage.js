import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { user, login } from '../reducers/user'
import { Button } from '../lib/Button'

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
		<form className='login-form form-style' onSubmit={handleSubmit}>
      <h1>Sign in </h1>
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
          <Button className='input-button' type='submit'>Sign in</Button>
            <p>Not a user?</p>
              <Button className="input-button" type="button" onClick={() => setPage('signup')}>Sign up</Button>
        </div>
      </form>
      </Section>
		</>
	)
}


const Input = styled.input`
  height: 48px;
  padding: 0 16px 0 16px;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 24px;
  font-size: 16px;
  line-height: 100%;
  color: rgba(0, 0, 0, 0.87);

  flex: 1;
`

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`