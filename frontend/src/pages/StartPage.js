import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import { SmallIcon, Icon, LargeIcon, Round } from '../lib/Icons'
import { FactContainer, WideContainer } from '../lib/Container'
import { SmallHeader, BoldText } from '../lib/Text'
import Book from '../img/open-book.png'
import Heart from '../img/love.png'
import Discussion from '../img/debate.png'
import Feedback from '../img/stars.png'
import Tick from '../img/tick.png'

export const StartPage = () => {
  return (
    <>
    <StartContainer>
       <MediumCard>
       <LargeIcon src={Heart} alt="Heart icon" />     
      </MediumCard>
         <div className ="start-text-header">
          <SmallHeader>What, Why and How?</SmallHeader>
          <p> Every human being has the right to decide over their body and their sexuality. 
						Therefore, Sweden has a sexual offence law based on the idea of free will. 
						Sex must be an act of free will - otherwise it is a crime.</p>

          <p>And now it is time for the next step. To start talking, learning
             and sharing this knowledge.</p>
           
         </div>
     </StartContainer>
    
    <div className ="container-cards">
      <NavLink to ="/lawbook" className="nav-links">
        <SmallCard> 
          <h3>LAW BOOK</h3>
          <Icon src={Book} alt="lawbook icon" />     
        </SmallCard>
      </NavLink>
      <NavLink to ="/forum" className="nav-links">
        <SmallCard> 
          <h3>FORUM</h3>
          <Icon src={Feedback} alt="feedback icon" />  
        </SmallCard> 
      </NavLink>
      <NavLink to ="/discussion" className="nav-links">
        <SmallCard> 
          <h3>DISCUSSIONS CARDS</h3>
          <Icon src={Discussion} alt="discussion icon" />  
        </SmallCard>
      </NavLink>  
    </div>

    <FactContainer>
      <h2>FAST FACTS</h2>
    <LargeCard>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><BoldText>Consent</BoldText> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><BoldText>Consent</BoldText> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><BoldText>Consent</BoldText> can’t be given while sleeping</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p>silence is not<BoldText> Consent</BoldText></p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><BoldText>Consent</BoldText> can always be rewoked</p>
      </Row>
      <Row>
        <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
        <p><BoldText>Consent</BoldText> can always be rewoked</p>
      </Row>
    </LargeCard>
    </FactContainer>

    <WideContainer>
      <WideCard>
        <p>text</p>
      </WideCard>
    </WideContainer>
    </>
  )
}


export const Row = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding: 5px;
`

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) and (max-width: 1024px) {
  flex-direction: row;
  justify-content: center;
  }
  @media (min-width: 1024px) {
  flex-direction: row;
  justify-content: center;
}
`

