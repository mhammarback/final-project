import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import Book from '../img/open-book.png'
import Heart from '../img/love.png'
import Discussion from '../img/debate.png'
import Feedback from '../img/stars.png'
import Tick from '../img/tick.png'

export const StartPage = () => {
  return (
    <>
    <div className ="start-text">
       <MediumCard>
       <LargeIcon src={Heart} alt="Heart icon" />     
      </MediumCard>
         <div className ="start-text-header">
          <p className="small-header">What, Why and how?</p>
          <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsum
          orem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem 
          ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem 
          ipsumvlorem ipsumlorem ipsumlorem ipsum
          orem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem 
           </p>
         </div>
     </div>
    
    <div className ="container-cards">
      <NavLink to ="/forum" className="nav-links">
        <SmallCard> 
          <h3>FEEDBACK FORUM</h3>
          <Icon src={Feedback} alt="feedback icon" />  
        </SmallCard> 
      </NavLink>

      <NavLink to ="/lawbook" className="nav-links">
        <SmallCard> 
          <h3>LAW BOOK</h3>
          <Icon src={Book} alt="lawbook icon" />     
        </SmallCard>
      </NavLink>

      <NavLink to ="/discussion" className="nav-links">
        <SmallCard> 
          <h3>DISCUSSIONS CARDS</h3>
          <Icon src={Discussion} alt="discussion icon" />  
        </SmallCard>
      </NavLink>  
    </div>

    <div className="facts-container">
      <h2>FAST FACTS</h2>
    <LargeCard>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><span className="bold">Consent</span> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><span className="bold">Consent</span> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><span className="bold">Consent</span> can’t be given while sleeping</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p>silence is not<span className="bold">Consent</span></p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><span className="bold">Consent</span> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><span className="bold">Consent</span> can always be rewoked</p>
      </Row>
    </LargeCard>
    </div>

    <div className ="wide-container">
      <WideCard>
        <p>text</p>
      </WideCard>
    </div>
    </>
  )
}

export const SmallIcon = styled.img`
  width: 50px;
  height: 50px;
`

export const Icon = styled.img`
  width: 210px;
  height: 210px;
  margin-topp: 80px;
`
export const LargeIcon = styled.img`
  width: 280px;
  height: 280px;
  margin: 25px;
`

export const Round = styled.span`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;  
  margin: 30px;
`
export const Row = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`