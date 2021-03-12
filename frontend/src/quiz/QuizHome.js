import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'
import styled from 'styled-components/macro'

import { user, getSecretMessage } from '../reducers/user'
import { Button } from '../lib/Button'
import { ContainerCenter, Section,  } from '../lib/Container'
import { CoulmnRow } from '../lib/FlexBox'
import { Text } from '../lib/Text'

export const QuizHome = () => {
  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.userId)
  const accessToken = useSelector((store) => store.user.accessToken)
  const secretMessage = useSelector((store) => store.user.secretMessage)

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
        dispatch(user.actions.logout())
        window.location.href = '/sign'
       }
    })
  }

  return(
    <Section background={ '#F5E9DC;' }>
      <SectionQuiz>
        <h2>{`${secretMessage}`}</h2>
	        <Text>Take our consent quiz to practice your knowledge!</Text>
	          <ContainerCenter>
              <CoulmnRow>
	              <Button type="button" onClick={handleClick}>Log Out</Button>
	          	    <NavLink to="/quiz-start"><Button>Start Quiz</Button></NavLink>
              </CoulmnRow>
	          </ContainerCenter>
       </SectionQuiz>
    </Section>
  )
}

const SectionQuiz = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #F5E9DC;
  padding-bottom:30px;
  width:90%;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`

