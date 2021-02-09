import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'
import Star from '../img/star.png'

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
      <p tabindex="0">{message}</p>
      <p tabindex="0">Posted by: {username}</p>
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

export const Button = styled.button`
  background: none;
  border:none;
  cursor: pointer;
`

export const Row = styled.div`
  display: flex;
  flex-direction:row;
`

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

