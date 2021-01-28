import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'


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

export const Round = styled.span`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;  
  margin: 30px;
`

export const SmallIcon = styled.img`
  width: 50px;
  height: 50px;
`
