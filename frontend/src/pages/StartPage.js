import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
import Book from '../img/open-book.png'
import Heart from '../img/love.png'

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
           </p>
         </div>
     </div>
    
    <div className ="container-cards">
      <NavLink to ="/forum" className="nav-links">
        <SmallCard> 
          <h3>FEEDBACK</h3>
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
        </SmallCard>
      </NavLink>  
    </div>

    <div className="facts-container">
      <h2>FAST FACTS</h2>
    <LargeCard>
      <p>Lorem Ipsum</p>
    </LargeCard>
    </div>

    <div className ="wide-container">
      <WideCard>
      <p>Link : https://www.frivilligtsex.se/summary-in-english/ </p>
      </WideCard>
    </div>
    </>
  )
}

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