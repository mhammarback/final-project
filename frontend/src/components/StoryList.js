import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'


export const StoryList = props => {
  const { message, createdAt, username } = props.story
  
  return (
    <ForumCard>
      <p>{message}</p>
      <p>Posted by: {username}</p>
      <Time>
        {moment(createdAt).fromNow()}; 
      </Time >
    </ForumCard>
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
const ForumCard = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  width: 80%;
  background-color: #0d335d;
  color:#fff;
  border-radius: 30px;
  font-size: 18px;

  @media (min-width: 1024px) {
  width: 30%;
}
`

export const Time = styled.span`
  display: flex;
  justify-content: flex-end;
`

