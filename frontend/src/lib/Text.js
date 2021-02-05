import styled from 'styled-components/macro'

export const SmallHeader = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align:center;

  @media (min-width: 500px) {
    font-size: 30px;
  }
`

export const BoldText = styled.p`
  font-weight: bold;
  margin: 0px 5px;
`

//Footer 

export const EndText = styled.p`
  @media (min-width: 700px) and (max-width: 1024px) {
  width: 20%;
	margin: 40px 50px 0px 0px;
	}
	@media (min-width: 1024px) {
	width: 20%;
	margin: 40px 50px 0px 0px;
	}
`

export const Text = styled.p`
  font-size: 16px;
  padding: 15px;
  margin: 0px;

  @media (min-width: 700px) {
    font-size: 20px;
  }
`

export const Question = styled.h3`
  font-size: 20px
  text-align: center;

  @media (min-width: 700px) {
    font-size: 30px;
  }
`