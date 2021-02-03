import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import { SmallIcon, Icon, LargeIcon, Round } from '../lib/Icons'
import { FactContainer, WideContainer, CenterText, SmallHeaderContainer } from '../lib/Container'
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
              <SmallFact><BoldText>Consent</BoldText><p>can always be rewoked</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText> <p> can always be rewoked</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText> <p> can’t be given while sleeping</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><p>silence is not</p><BoldText> Consent</BoldText></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact><BoldText>Consent</BoldText>  <p>can always be rewoked</p></SmallFact>
          </Row>
          <Row>
            <Round><SmallIcon src={Tick} alt="tick icon"/></Round>
            <SmallFact> <BoldText>Consent</BoldText> <p> can always be rewoked</p></SmallFact>
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
          <a className="help" href="https://storasyster.org/stod-och-hjalp-efter-sexuella-overgrepp/" target="_blank" rel="noopener noreferrer">Association Big Sister</a>
          <a className="help" href="https://kvinnofridslinjen.se/telefonkort/engelska-english/" target="_blank" rel="noopener noreferrer">The Women's Protection Line</a>
          <a className="help" href="https://www.bris.se/ " target="_blank" rel="noopener noreferrer">BRIS</a>
          <a className="help" href="https://unizon.se/" target="_blank" rel="noopener noreferrer">Unizon Womens shelter </a>
          <a className="help" href="https://www.roks.se/" target="_blank" rel="noopener noreferrer">Roks Womens shelter </a>
          <a className="help" href="https://www.umo.se/" target="_blank" rel="noopener noreferrer">UMO</a>
          
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
export const SmallFact = styled.div`
  display:flex;
  flex-directon: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction:row;
    font-size: 24px;
  }
`



//LINKS 
//https://storasyster.org/stod-och-hjalp-efter-sexuella-overgrepp/
//https://kvinnofridslinjen.se/telefonkort/engelska-english/
//https://www.bris.se/ 
//https://unizon.se/
//https://www.roks.se/
//https://www.umo.se/