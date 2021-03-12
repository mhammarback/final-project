import styled from 'styled-components/macro'


export const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 20px 20px;

  @media (min-width: 1024px ) {
    padding: 50px 50px;
  }
`

export const FormInput = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`

export const Form = styled.form`
  background-color: #F5E9DC;
  width:90%;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`
