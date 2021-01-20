import React from 'react'
import moment from 'moment'


export const StoryList = props => {
  const { message, createdAt, username } = props.story
  
  return (
    <section className="forum-card">
      <p>{message}</p>
      <p>Posted by: {username}</p>
      <span className ="message-time">
        {moment(createdAt).fromNow()}; 
      </span>
    </section>
  )
}