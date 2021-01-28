import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { SmallCard } from '../lib/Cards'
import { Button } from 'lib/Button'

export const DiscussionsCards = () => {
	const [show, setShow] = useState(false)
return ( 
	<>
  <Section>
    <h2>DISCUSSION CARDS</h2>
    <p>Divide into groups our pares and use the cards for help to start a discussion</p>
  </Section>
	  <FlexWrap>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
	  </FlexWrap>  
		  <ButtonContainer>
		    <Button onClick ={() =>setShow(true)}> MORE CARDS </Button>
	  	</ButtonContainer> 
	    	<div>
		      { show? 
		       <>
			      <FlexWrap>
              <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
		          <SmallCard>Text</SmallCard>
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
const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 500px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 100px 0px 50px 0px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 130px 0px 50px 0px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`  




