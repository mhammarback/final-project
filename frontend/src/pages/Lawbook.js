import React from 'react'
import styled from 'styled-components/macro'

import { SmallCard } from '../lib/Cards'
import { Container } from '../lib/Container'
import { SmallHeader } from '../lib/Text'
import { Icon, CardIcon } from '../lib/Icons'
import Book from '../img/open-book.png'
//import Chat from '../img/chat.png'
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
					<h4>On 1 July 2018, the sexual crime legislation was changed so that it was more clearly 
						established that the limit for a criminal act must be set whether participation in a 
						sexual activity is voluntary or not. The purpose was to clarify that every human being
						 has an unconditional right to personal and sexual integrity and sexual self-determination. 
						 The rape provision according to ch. 6 § 1 BrB is now formulated as follows:
			     </h4>
           <h4>1 § A person who, with a person who does not participate voluntarily, performs intercourse
						  or another sexual act which, in view of the seriousness of the violation, is comparable to intercourse,
							is sentenced for rape to imprisonment for a minimum of two years and a maximum of six years.
							When assessing whether a participation is voluntary or not, special consideration must
							be given to whether voluntariness has been expressed through words or deeds or 
							in any other way. A person can never be considered to participate voluntarily</h4>

		     <p>1. participation is the result of ill-treatment, other violence or threats of a criminal act, 
					  threats to prosecute or report someone else for crimes or threats to make a harmful statement
					  about someone else,</p>

          <p>2. the perpetrator improperly exploits the fact that the person is in a particularly vulnerable
						 situation due to unconsciousness, sleep, serious fear, intoxication or other drug exposure, 
						 illness, bodily injury, mental disorder or otherwise, taking into account the circumstances</p>

		     <p>3. the perpetrator persuades the person to participate by seriously abusing the person's dependence 
					 on the perpetrator</p>
		     </Section>
			 </LawHeader >
		</RowColumn >

		<RowColumn>
		
			  <RowReverse>
				<SmallCard>
		    <CardIcon src={Group} alt="lawbook icon" />    
    	</SmallCard> 
				<LawHeader >
					<SmallHeader>What does that mean in practice?</SmallHeader>
					<Section> 
					<h4>Every human being has the right to decide over their body and their sexuality. 
						Therefore, Sweden has a sexual offence law based on the idea of free will. 
						Sex must be an act of free will - otherwise it is a crime.</h4>

					<p>Sex as an act of free will means that the persons involved have expressed
						clear consent to a sexual act using words or body language.
						 That’s why it is important to listen, ask, check and show respect.
						  You must be sure about what others really want.</p>

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

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
	margin-bottom: 40px;
`  
const RowColumn = styled.div`
	display:flex;
	flex-direction: column;
	align-items:center;

	@media (min-width: 1024px) {
		flex-direction: row;
		align-items: end;
  }
`
const RowReverse = styled.div`
	display: flex;
	flex-direction: column;
	align-items:center;

	@media (min-width: 1024px) {
		flex-direction: row-reverse;
		align-items: end;
  }
`

const LawHeader = styled.div`
@media (min-width: 1024px) {
	width: 600px;
  padding: 0px 30px;
}
`




//<p>https://www.bra.se/download/18.7d27ebd916ea64de5306522c/1605178708066/2020_6_Den_nya_samtyckeslagen_i_praktiken.pdf</p>

//https://www.frivilligtsex.se/summary-in-english/

//pink color #ffedeb 