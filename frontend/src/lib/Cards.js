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
  padding-top:10px;

  :hover {
    box-shadow: 1px 2px 2px 1px #888888;
  }
 
`

/*

   -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
    background-color: lightpink;
  }
  
  :hover::after {
    opacity: 1;
  }

*/

export const MediumCard = styled.div`
  width: 300px;
  height: 320px;
  margin: 40px 0 40px 0;
  background-color: #F5E9DC;
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 480px;
    padding: 0 16px;
   
  }
`

export const LargeCard = styled.div`
  width: 300px;
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

@media (min-width: 700px) and (max-width: 1024px) {
  width: 600px;
  padding: 0 16px;
}

@media (min-width: 1025px) {
  width: 1000px;
}
`

