import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { SmallCard } from '../lib/Cards'
import { SmallHeader } from '../lib/Text'
import { Button } from '../lib/Button'
import { FlexWrap, ButtonContainer } from '../lib/Container'


export const DiscussionsCards = () => {
	const [show, setShow] = useState(false)
return ( 
	<>
  <Section>
    <h2>DISCUSSION CARDS</h2>
    <SmallHeader>Divide into groups our pares and use the cards for help to start a discussion</SmallHeader>
  </Section>
	  <FlexWrap>
		  <SmallCard><Text>What does consent mean?</Text></SmallCard>
		  <SmallCard><Text>What can you do to make sure you have consent? </Text></SmallCard>
		  <SmallCard><Text>What do you know about consent?</Text></SmallCard>
		  <SmallCard><Text>Have you heard about the consent law before you saw this web page?</Text></SmallCard>
		  <SmallCard><Text>Does a person need to vocally say NO to not give consent?</Text></SmallCard>
		  <SmallCard><Text>If a person have said YES before, does that mean you always have their consent?</Text></SmallCard>
		  <SmallCard><Text>Communication is key, share some great communication tips with each other</Text></SmallCard>
		  <SmallCard><Text>If you are in a relationship, have your partner given you their consent permanently?</Text></SmallCard>
	  </FlexWrap>  
		  <ButtonContainer>
		    <Button onClick ={() =>setShow(true)}> MORE CARDS </Button>
	  	</ButtonContainer> 
	    	<div>
		      { show? 
		       <>
			      <FlexWrap>
              <SmallCard><Text>Under what circumstances can't people give consent?</Text></SmallCard>
		          <SmallCard><Text>If you need someone to talk to, where can you get help?</Text></SmallCard>
		          <SmallCard><Text>When can a person take back their consent?</Text></SmallCard>
		          <SmallCard><Text>If a person is afraid of saying no, what could other signs be that a person have not given consent?</Text></SmallCard>
		          <SmallCard><Text>If you have a friend that have been sexually abused, how can you support that person?</Text></SmallCard>
		          <SmallCard><Text>Can i change my mind whenever i want?</Text></SmallCard>
		          <SmallCard><Text>If i am not sure i have consent, how can i check it in a good way?</Text></SmallCard>
		          <SmallCard><Text>Can clothes give you consent?</Text></SmallCard>
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

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`  

export const Text = styled.p`
  font-size: 18px;
	text-align:center;
	padding:10px;
`




