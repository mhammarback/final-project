import styled from 'styled-components/macro'


export const Container = styled.section`
  width: 100%
  background-color: red;
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
  height: 55%;
  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 65%;
  }
  @media (max-width: 500px) {
    padding: 20px 0 0 0;
    max-height: 70%;
  }
`

export const QuizOptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 10px;
  width: 100%;
  list-style:none;
  padding:0;
  max-height: max-content;
  @media (max-width: 800px) {
    margin-top: 10px;
    grid-gap: 5px;
    height:
  }
  @media (max-width: 500px) {
    height: 60%;
  }
`