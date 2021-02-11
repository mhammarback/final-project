import React, { useState } from 'react'

import { SmallCard } from '../lib/Cards'
import { SmallHeader, CenterText } from '../lib/Text'
import { Button } from '../lib/Button'
import { Section, FlexWrap, ButtonContainer } from '../lib/Container'

export const DiscussionsCards = () => {
	const [show, setShow] = useState(false)

return ( 
	<>
  <Section>
    <h2>DISCUSSION CARDS</h2>
    <SmallHeader>Divide into groups our pares and use the cards for help to start a discussion</SmallHeader>
  </Section>
	  <FlexWrap>
		  <SmallCard><CenterText>What does consent mean?</CenterText></SmallCard>
		  <SmallCard><CenterText>What can you do to make sure you have consent? </CenterText></SmallCard>
		  <SmallCard><CenterText>What do you know about consent?</CenterText></SmallCard>
		  <SmallCard><CenterText>Have you heard about the consent law before you saw this web page?</CenterText></SmallCard>
		  <SmallCard><CenterText>Does a person need to vocally say NO to not give consent?</CenterText></SmallCard>
		  <SmallCard><CenterText>If a person have said YES before, does that mean you always have their consent?</CenterText></SmallCard>
		  <SmallCard><CenterText>Communication is key, share some great communication tips with each other</CenterText></SmallCard>
		  <SmallCard><CenterText>If you are in a relationship, have your partner given you their consent permanently?</CenterText></SmallCard>
	  </FlexWrap>  
		  <ButtonContainer>
		    <Button onClick ={() =>setShow(true)}> MORE CARDS </Button>
	  	</ButtonContainer> 
	    	<div>
		      { show? 
		       <>
			      <FlexWrap>
              <SmallCard><CenterText>Under what circumstances can't people give consent?</CenterText></SmallCard>
		          <SmallCard><CenterText>If you need someone to talk to, where can you get help?</CenterText></SmallCard>
		          <SmallCard><CenterText>When can a person take back their consent?</CenterText></SmallCard>
		          <SmallCard><CenterText>If a person is afraid of saying no, what could other signs be that a person have not given consent?</CenterText></SmallCard>
		          <SmallCard><CenterText>If you have a friend that have been sexually abused, how can you support that person?</CenterText></SmallCard>
		          <SmallCard><CenterText>Can i change my mind whenever i want?</CenterText></SmallCard>
		          <SmallCard><CenterText>If i am not sure i have consent, how can i check it in a good way?</CenterText></SmallCard>
		          <SmallCard><CenterText>Can clothes give you consent?</CenterText></SmallCard>
		        </FlexWrap>  
			        <ButtonContainer>
			         <Button onClick ={() =>setShow(false)}> LESS CARDS </Button>
			      </ButtonContainer> 
		       </>
		      : null
		      }
		   </div>
  </>
  )
}




