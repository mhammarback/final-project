import styled from 'styled-components/macro'

export const SmallCard = styled.div`
  width: 300px;
  height: 320px;
  margin: 40px 0 40px 0;
  background-color: #F5E9DC;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  :hover {
    box-shadow: 1px 2px 2px 1px #888888;
  }
`
export const MediumCard = styled.div`
  width: 300px;
  height: 320px;
  margin: 40px 0 40px 0;
  background: ${(props) => (props.background ? props.background : '#F5E9DC;')};
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 480px;
    padding: 0 16px;
    background: #F5E9DC;
  }
`

export const LargeCard = styled.div`
  width: 320px;
  height: 720px;
  margin: 40px 0 40px 0;
  background-color: #F5E9DC;
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 600px;
    padding: 0 16px;
  }
`

export const WideCard = styled.div`
  width: 300px;
  height: 420px;
  margin: 40px 0 40px 0;
  background-color: #F5E9DC;
  border-radius: 5px;
  display:flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content:space-evenly;

  @media (min-width: 700px) and (max-width: 1024px) {
  width: 600px;
  padding: 0 16px;
  text-align:center;
  }
  @media (min-width: 1025px) {
  width: 1000px;
  text-align:center;
  }
`

export const ForumCard = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  width: 80%;
  background-color: #0d335d;
  color:#fff;
  border-radius: 30px;
  font-size: 18px;

  @media (min-width: 1024px) {
  width: 30%;
  }
`

