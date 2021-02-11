import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'
import Star from '../img/star.png'

import { SmallIcon } from '../lib/Icons'
import { ForumCard } from '../lib/Cards'

export const StoryList = props => {
  const { message, createdAt, username, _id, hearts } = props.story

  const LIKE_URL =`https://final-project-technigo.herokuapp.com/forum/${_id}/like`

  const handleClick = () => {
    fetch(LIKE_URL, {
      method: "POST",
      headers:
      {"Content-Type":"application/json"},
      body:"",
      }).then(() => props.onLiked(_id)) 
    }
  
  return (
    <ForumCard>
      <p>{message}</p>
      <p>Posted by: {username}</p>
        <Row>
          <Button
            onClick={handleClick}
            tabindex="0" role="button" aria-pressed="false" aria-label="add star" target="_blank" rel="noreferrer"
            >
            <span>
            <SmallIcon src={Star} alt="star icon"/> 
            </span>
          </Button>
            <p> x {hearts}</p>
       </Row>
      <Time>
        {moment(createdAt).fromNow()}; 
      </Time >
    </ForumCard>
  )
}


const Button = styled.button`
  background: none;
  border:none;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  flex-direction:row;
`

const Time = styled.span`
  display: flex;
  justify-content: flex-end;
`

