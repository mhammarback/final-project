import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import { SmallIcon, Icon, LargeIcon, Round } from '../lib/Icons'
import { FactContainer, WideContainer, CenterText } from '../lib/Container'
import { SmallHeader, BoldText, Text } from '../lib/Text'
import { LinkButton } from '../lib/Button'
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
          <Text> Every human being has the right to decide over their body and their sexuality. 
						Therefore, Sweden has a sexual offence law based on the idea of free will. 
						Sex must be an act of free will - otherwise it is a crime.</Text>

          <Text>And now it is time for the next step. To start talking, learning
          and sharing this knowledge.
          </Text>
           
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
            <BoldText>Consent</BoldText><p>can always be rewoked</p>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <BoldText>Consent</BoldText> <p> can always be rewoked</p>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <BoldText>Consent</BoldText> <p> can’t be given while sleeping</p>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <p>silence is not</p><BoldText> Consent</BoldText>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <BoldText>Consent</BoldText>  <p>can always be rewoked</p>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <BoldText>Consent</BoldText> <p> can always be rewoked</p>
          </Row>
        </LargeCard>
    </FactContainer>

   <CenterText>
   <h2>HELP</h2>
    <p>If you have encountered sexual assault, there is a lot of help to get. </p>
    <p>Here are some links on where you can get more support</p>
    <BoldText>You are not alone. </BoldText> 
    </CenterText>

      <WideContainer>
        <WideCard>
          <LinkButton as="a" href="/https://storasyster.org/stod-och-hjalp-efter-sexuella-overgrepp/">Association Big Sister</LinkButton>
          <LinkButton as="a" href="/">The Women's Protection Line</LinkButton>
          <LinkButton as="a" href="/">BRIS</LinkButton>
          <LinkButton as="a" href="/">Unizon Womens shelter </LinkButton>
          <LinkButton as="a" href="/">Roks Womens shelter </LinkButton>
          <LinkButton as="a" href="/">UMO</LinkButton>
        </WideCard>
      </WideContainer>
    </>
  )
}

export const Links = styled.p`
  padding:10px;
  color:#001a33;
 

  @media (min-width: 700px) {
  width:40%;
  }
`

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
  background-color: #0d335d;
  color: #fff;

  @media (min-width: 700px) and (max-width: 1024px) {
  flex-direction: row;
  justify-content: center;
  padding: 80px 0px;
  
  }
  @media (min-width: 1024px) {
  flex-direction: row;
  justify-content: center;
  padding: 100px 0px;
  margin-bottom: 100px;
}
`



//LINKS 
//https://storasyster.org/stod-och-hjalp-efter-sexuella-overgrepp/
//https://kvinnofridslinjen.se/telefonkort/engelska-english/
//https://www.bris.se/ 
//https://unizon.se/
//https://www.roks.se/
//https://www.umo.se/