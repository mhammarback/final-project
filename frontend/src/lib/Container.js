import styled from 'styled-components/macro'

export const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10px;
  background: ${(props) => (props.background ? props.background : '#F5E9DC;')};
`

export const ContainerColor = styled.section`
  background-color: #F5E9DC;
  margin-bottom: 20px;
  padding:10px;
`

export const ContainerCenter = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-bottom: 20px;
`

export const QuizQuestionContainer = styled.section`
  padding: 0 20px 0 20px;
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 20px 0 0 0;
   
  }
`
export const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
 

  @media (min-width: 500px) and (max-width: 1024px) {
    
    align-items: center;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const QuestionPicture = styled.img`
  
  object-fit: cover;
  margin-right: 10px;
  border-radius: 10px;
  height: 200px;
  @media (min-width: 500px) and (max-width: 1024px) {
    display:flex;
    width: 50%;
    margin-right: 0;
    padding-right: 8px;
  }
  @media (min-width: 1024px) {
    display:flex;
    border-radius: 7px;
    width: 50%;
    height: 375px;
  }
`

export const QuizOptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 100%;
  list-style:none;
  padding:0;
  
  @media (max-width: 800px) {
    margin-top: 10px;
  }
  @media (max-width: 500px) {
  }
 `

 export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d335d;
  color: #fff;

  @media (min-width: 700px) and (max-width: 1024px) {
  flex-direction: column;
  justify-content: center;
  padding: 80px 0px;
  
  }
  @media (min-width: 1024px) {
  flex-direction: row;
  justify-content: center;
  padding: 100px 0px;
  margin: 150px 0px;
}
`
 

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 100px 0px;

  @media (min-width: 700px) and (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  }
`

export const FactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px 80px 0px;
`
export const WideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 150px 0px;
  background-color: #0d335d;
`

export const CenterText = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  background-color: #0d335d;
  color:#fff;
`

export const SmallHeaderContainer = styled.div`
  padding-bottom: 60px;

  @media (min-width: 700px) and (max-width: 1024px) {
    width:50%;
    margin: 10px;
  }
  @media (min-width: 1024px) {
    width:30%;
    margin: 10px;
  }
`

//Specific Flexbox

export const FlexWrap = styled.div`
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

export const CoulmnRow = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 5px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const Row = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding: 5px;
`

//Cards 
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`  

//header and footer

export const HiddenBurger = styled.div`
  @media (min-width: 1024px) { 
		display:none;
	}
`
export const HiddenNav = styled.div`
	display: none;
	
  @media (min-width: 1024px) {
		display:flex;
	}
`




//Footer 

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  background-color: #F5E9DC; 
`

export const EndTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`