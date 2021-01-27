import React, { useState } from 'react'

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
    <section className ="story-input-container">
      <form className ="story-input-content" onSubmit={handleSubmit} >
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
      </form>  
    </section>
  )
}