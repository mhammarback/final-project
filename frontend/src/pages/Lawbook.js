import React from 'react'
import styled from 'styled-components/macro'

import { SmallCard } from '../lib/Cards'
import { Section, Container,  LawHeader } from '../lib/Container'
import { BoldText, SmallHeader } from '../lib/Text'
import { Icon, CardIcon } from '../lib/Icons'
import { RowColumn, RowReverse } from '../lib/FlexBox'
import Book from '../img/open-book.png'
import Group from '../img/group.jpg'


export const Lawbook = () => {
  return (
  <>
    <Section>
      <h2>THE SWEDISH LAWBOOK</h2>
    </Section>
      <Container background={ '#fff;'}>
        <RowColumn>
          <SmallCard>
	    <Icon src={Book} alt="lawbook icon" />    
      	  </SmallCard> 
	    <LawHeader >
	      <SmallHeader>What does the lawbook say about consent?</SmallHeader>
	        <Section> 
		  <BoldText>On 1 July 2018, the sexual crime legislation was changed so that it was more clearly 
		            established that the limit for a criminal act must be set whether participation in a 
	                    sexual activity is voluntary or not. The purpose was to clarify that every human being
		            has an unconditional right to personal and sexual integrity and sexual self-determination. 
			    The rape provision according to ch. 6 § 1 BrB is now formulated as follows:
		</BoldText>
                  <p>1 § A person who, with a person who does not participate voluntarily, performs intercourse
		     or another sexual act which, in view of the seriousness of the violation, is comparable to intercourse,
		     is sentenced for rape to imprisonment for a minimum of two years and a maximum of six years.
	             When assessing whether a participation is voluntary or not, special consideration must
		     be given to whether voluntariness has been expressed through words or deeds or 
		     in any other way. A person can never be considered to participate voluntarily
		  </p>
		    <List>
	              <ListItem> participation is the result of ill-treatment, other violence or threats of a criminal act, 
		                 threats to prosecute or report someone else for crimes or threats to make a harmful statement
			         about someone else
		      </ListItem>
		      <ListItem> the perpetrator improperly exploits the fact that the person is in a particularly vulnerable
				 situation due to unconsciousness, sleep, serious fear, intoxication or other drug exposure, 
				 illness, bodily injury, mental disorder or otherwise, taking into account the circumstances
		       </ListItem>
		       <ListItem>the perpetrator persuades the person to participate by seriously abusing the person's dependence 
			         on the perpetrator.
		       </ListItem>
		     </List>
		   </Section>
                 </LawHeader >
	       </RowColumn >
    	       <RowColumn>
		 <RowReverse>
		   <SmallCard>
		     <CardIcon src={Group} alt="group of friends"/>    
    	           </SmallCard> 
	             <LawHeader >
	               <SmallHeader>What does that mean in practice?</SmallHeader>
		         <Section> 
			   <BoldText>Every human being has the right to decide over their body and their sexuality. 
			             Therefore, Sweden has a sexual offence law based on the idea of free will. 
			             Sex must be an act of free will - otherwise it is a crime.
			   </BoldText>
			     <p>Sex as an act of free will means that the persons involved have expressed
			        clear consent to a sexual act using words or body language.
		                That’s why it is important to listen, ask, check and show respect.
			        You must be sure about what others really want.
			     </p>
		             <p> Violence or threats are therefore not necessary in order for a person to be convicted of,
		                 for example, rape. It is also not necessary that someone took advantage of another person’s 
				 particularly vulnerable situation, for example if that other person was drunk.
				 If sex is not an act of free will, it is a crime.
		             </p>		
			 </Section>			
		       </LawHeader >
		   </RowReverse>
		</RowColumn>
      </Container>
     </>
  )
}

export const List = styled.ol`
  margin: 0;
`

export const ListItem = styled.li`
  padding: 10px 0px;
`
