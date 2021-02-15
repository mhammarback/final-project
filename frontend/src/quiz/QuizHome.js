import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'

import { user, getSecretMessage } from '../reducers/user'
import { Button } from '../lib/Button'
import { ContainerCenter, Section, CoulmnRow  } from '../lib/Container'
import { Text } from '../lib/Text'
import { SectionQuiz} from '../lib/Form'

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

