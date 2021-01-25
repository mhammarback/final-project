import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user, login } from '../reducers/user'

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
		<form className='login-form form-style' onSubmit={handleSubmit}>
      <h1>Login</h1>
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
          <button className='input-button' type='submit'>Log in</button>
        </div>
      </form>
			<p className="p-label">Don't have a user?</p>
      <button className="input-button" type="button" onClick={() => setPage('signup')}>Sign up</button>
		</>
	)
}