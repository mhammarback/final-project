import React from 'react'

import { LargeCard, MediumCard, SmallCard, WideCard } from '../lib/Cards'
//import Book from '../img/open-book.png'

export const StartPage = () => {
  return (
    <>
    <div className ="start-text">
     <MediumCard />
     <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsum
     lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
     lorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsum
     lorem ipsumlorem ipsumlorem ipsumlorem ipsum
     lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
     lorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsum  </p>
     </div>
    
    <div className ="container-cards">
      <SmallCard > 
      <h3>QUIZ</h3>
      
      </SmallCard>
      <SmallCard> 
      <h3>LAW BOOK</h3>
      </SmallCard>
      <SmallCard> 
      <h3>DISCUSSIONS CARDS</h3>
      </SmallCard>
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