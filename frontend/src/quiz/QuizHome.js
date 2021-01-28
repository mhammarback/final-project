import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import swal from 'sweetalert'

import { user, getSecretMessage } from '../reducers/user'
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
		swal({
			title: 'Oh no!',
			text: 'Are you sure you want to Log Out?',
			buttons: ['Close this alert', 'Log me out!'],
			dangerMode: true,
			icon: 'warning'
		  })
			.then((willLogout) => {
			  if (willLogout) {
          dispatch(user.actions.logout());
          window.location.href = '/quiz';
			  }
			})
  }

	return(
	    <Section background={ '#F5E9DC;'}>
		    <h1>Welcome to the quiz page username</h1>
		    <h3>{`${secretMessage}`}</h3>
			    <ContainerCenter>
            <RowCoulmn>
			        <Button type="button" onClick={handleClick}>Log Out</Button>
				      <NavLink to="/quiz-start"><Button>Start Quiz</Button></NavLink>
            </RowCoulmn>
			    </ContainerCenter>
	    </Section>
	
	)
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
  background: ${(props) => (props.background ? props.background : '#fff')};
`  
export const RowCoulmn = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 5px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
