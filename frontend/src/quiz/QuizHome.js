import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import { user, getSecretMessage, logout } from '../reducers/user'
import { Button } from '../lib/Button'
import { ContainerCenter } from '../lib/Container'

export const QuizHome = ({ setPage }) => {
	const dispatch = useDispatch()
	const userId = useSelector((store) => store.user.userId)
	const accessToken = useSelector((store) => store.user.accessToken)
	const secretMessage = useSelector((store) => store.user.SecretMessage)

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(getSecretMessage(userId, accessToken))
  })
	
	const handleClick = () => {
    dispatch(logout())
    setPage('login')
  }

	return(
		<>
		<Section>
		  <h1>Welcome to the quiz page username</h1>
		  <h3>{`${secretMessage}`}</h3>
			<ContainerCenter>
			  <Button type="button" onClick={handleClick}>Log out</Button>
		    
			 </ContainerCenter>
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

//<h3>{`${secretMessage}`}</h3>

//<NavLink to="/quiz-start"><Button>start</Button></NavLink>