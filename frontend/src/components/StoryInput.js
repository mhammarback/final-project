import React, { useState } from 'react'
import styled from 'styled-components/macro'
import icon from '../img/send-button.png'

export const StoryInput = ({ onMessageChange }) => {
  const [newStory, setNewStory] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onMessageChange(newStory)
    setNewStory('')
  }

  const handleStory = event => {
    setNewStory(event.target.value)
  }

  return(
    <StoryInputContainer>
      <StoryInputContent onSubmit={handleSubmit} >
        <input
        type='text'
        placeholder='Share your thought on consent'
        className ='message-field'
        value={newStory}
        onChange={handleStory} 
        /> 
       <button
        className="button-send-message button-send-message-active">
          <img src={icon} alt="send-icon" />
       </button>
      </StoryInputContent >  
    </StoryInputContainer>
  )
}

 const StoryInputContainer = styled.section`
  height: 96px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin: 0 auto;
`

const StoryInputContent = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
  padding: 16px 0px;
  margin: 0 auto;
`
