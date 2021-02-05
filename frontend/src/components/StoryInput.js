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
        <Input
          type='text'
          placeholder='Share your thought on consent'
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
