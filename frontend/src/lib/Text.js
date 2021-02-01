import styled from 'styled-components/macro'

export const SmallHeader = styled.p`
  font-size: 24px;
  font-weight: bold;

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