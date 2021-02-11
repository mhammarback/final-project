import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import { SmallIcon, Icon, LargeIcon, Round } from '../lib/Icons'
import { StartContainer, FactContainer, WideContainer, CenterText, SmallHeaderContainer, CardsContainer, Row, SmallFact  } from '../lib/Container'
import { SmallHeader, BoldText, Text, } from '../lib/Text'
import Book from '../img/open-book.png'
import Heart from '../img/love.png'
import Discussion from '../img/debate.png'
import Feedback from '../img/stars.png'
import Tick from '../img/tick.png'

export const StartPage = () => {
  return (
    <>
    <StartContainer>
       <MediumCard background={ '##0d335d;'}>
       <LargeIcon src={Heart} alt="Heart icon" />     
      </MediumCard>
         <SmallHeaderContainer>
          <SmallHeader>What, Why and How?</SmallHeader>
          <Text> Every human being has the right to decide over their body and their sexuality. 
						Therefore, Sweden has a sexual offence law based on the idea of free will. 
						Sex must be an act of free will - otherwise it is a crime.</Text>

          <Text>And now it is time for the next step. To start talking, learning
          and sharing this knowledge.
          </Text>
         </SmallHeaderContainer>
     </StartContainer>
     <CardsContainer>
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
    </CardsContainer>

    <FactContainer>
      <h2 tabindex="0">FAST FACTS</h2>
        <LargeCard>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText> <p>is important</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText><p>can always be rewoked</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><p>Talk about</p><BoldText>Consent</BoldText></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><p>silence is not</p><BoldText> Consent</BoldText></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText><p>can't be forced</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><p>Being drunk is not</p><BoldText>Consent</BoldText></SmallFact>
          </Row>
        </LargeCard>
    </FactContainer>

      <CenterText>
        <h2>HELP</h2>
          <Text >If you have encountered sexual assault, there is a lot of help to get. </Text >
          <Text >Here are some links on where you can get more support</Text >
          <BoldText>You are not alone.</BoldText> 
      </CenterText>
      <WideContainer>
        <WideCard>
          <HelpLink href="https://storasyster.org/stod-och-hjalp-efter-sexuella-overgrepp/" target="_blank" rel="noopener noreferrer">Association Big Sister</HelpLink>
          <HelpLink href="https://kvinnofridslinjen.se/telefonkort/engelska-english/" target="_blank" rel="noopener noreferrer">The Women's Protection Line</HelpLink>
          <HelpLink href="https://www.bris.se/ " target="_blank" rel="noopener noreferrer">BRIS</HelpLink>
          <HelpLink href="https://unizon.se/" target="_blank" rel="noopener noreferrer">Unizon Womens shelter </HelpLink>
          <HelpLink href="https://www.roks.se/" target="_blank" rel="noopener noreferrer">Roks Womens shelter </HelpLink>
          <HelpLink href="https://www.umo.se/" target="_blank" rel="noopener noreferrer">UMO</HelpLink>
        </WideCard>
      </WideContainer>
    </>
  )
}

export const HelpLink = styled.a`
  display: flex;
  justify-content: center;
  color: #0d335d;
  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid #0d335d;
  border-radius: 3px;

  &:hover {
    background: #0d335d;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  } 
`
