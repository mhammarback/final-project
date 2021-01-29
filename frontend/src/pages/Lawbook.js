import React from 'react'
import styled from 'styled-components/macro'

import { SmallCard } from '../lib/Cards'
import { Container } from '../lib/Container'
import { SmallHeader } from '../lib/Text'
import Book from '../img/open-book.png'


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
					<h4>Den 1 juli 2018 ändrades sexualbrottslagstiftningen så att det
           tydligare slogs fast att gränsen för straffbar gärning ska gå vid om
           deltagandet i en sexuell aktivitet är frivilligt eller inte. Syftet var att
           tydliggöra att varje människa har en ovillkorlig rätt till personlig och
           sexuell integritet och sexuellt självbestämmande.
           Våldtäktsbestämmelsen enligt 6 kap. 1 § BrB är nu formulerad
            på följande sätt:
			     </h4>
           <h4>1 § Den som, med en person som inte deltar frivilligt, genomför
           ett samlag eller en annan sexuell handling som med hänsyn till
           kränkningens allvar är jämförlig med samlag, döms för våldtäkt till
           fängelse i lägst två år och högst sex år. Vid bedömningen av om ett
           deltagande är frivilligt eller inte ska det särskilt beaktas om frivillighet har kommit till uttryck genom ord eller handling eller på annat
           sätt. En person kan aldrig anses delta frivilligt om</h4>

		     <p>1. deltagandet är en följd av misshandel, annat våld eller hot om
           brottslig gärning, hot om att åtala eller ange någon annan för brott
          eller hot om att lämna ett menligt meddelande om någon annan,</p>

          <p>2. gärningsmannen otillbörligt utnyttjar att personen på grund av
          medvetslöshet, sömn, allvarlig rädsla, berusning eller annan drogpåverkan, sjukdom, kroppsskada, psykisk störning eller annars med
          hänsyn till omständigheterna befinner sig i en särskilt utsatt situation, eller</p>
		     <p>
          3. gärningsmannen förmår personen att delta genom att allvarligt
           missbruka att personen står i beroendeställning till gärningsmannen</p>
		     </Section>
			 </LawHeader >
		</RowColumn >

		<RowColumn>
		
			  <RowReverse>
				<SmallCard>
		    <Icon src={Book} alt="lawbook icon" />    
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

export const Icon = styled.img`
  width: 210px;
  height: 210px;
  margin-topp: 80px;
`
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
