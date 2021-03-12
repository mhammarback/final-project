import styled from 'styled-components/macro'

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

export const RowColumn = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: end;
  }
`
export const RowReverse = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: end;
  }
`
