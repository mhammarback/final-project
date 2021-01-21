import React, { useState } from 'react'

import { SmallCard } from '../lib/Cards'
import { Button } from 'lib/Button'

export const DiscussionsCards = () => {
	const [show, setShow] = useState(false)
return ( 
	<>
	  <div className ="disc-cards">
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
		  <SmallCard> </SmallCard>
	  </div>  
		  <div className ="button-container">
		    <Button onClick ={() =>setShow(true)}> MORE CARDS </Button>
	  	</div> 
	    	<div>
		      { show? 
		       <>
			      <div className ="disc-cards">
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
		          <SmallCard> </SmallCard>
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


