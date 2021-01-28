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
	  <div className ="disc-cards">
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
		  <SmallCard>Text</SmallCard>
	  </div>  
		  <div className ="button-container">
		    <Button onClick ={() =>setShow(true)}> MORE CARDS </Button>
	  	</div> 
	    	<div>
		      { show? 
		       <>
			      <div className ="disc-cards">
            <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        <SmallCard>Text</SmallCard>
		        </div>  
			        <div className ="button-container">
			         <Button onClick ={() =>setShow(false)}> LESS CARDS </Button>
			      </div> 
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


