import styled from 'styled-components/macro'

export const Button = styled.button`
  background-color: #fff; 
  color:#000;
  border: none;
  border-radius: 5px;
  padding: 15px 60px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 1px 2px 2px 1px #888888;

&:hover {
  background: #3d99f5;
  color: #fff;
  cursor: pointer;
  transition-duration: 0.3s;
} 
`

export const SmallButton = styled.button`
  background-color: #0d335d;
  color:#fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 1px 2px 2px 1px #888888;

&:hover {
  background: rgb(255, 153, 0);
  color: #fff;
  cursor: pointer;
  transition-duration: 0.3s;
} 
`

export const QuizButton = styled.button`
  all: unset;
  box-shadow: 1px 2px 2px 1px #888888;
  border-radius: 5px;
  padding: 10px 15px;
  text-align: center;
  background: #fff;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  transition: background ease 0.5s;

  :disabled{
  background: ${(props) => (props.background ? props.background : '#fff')};
  cursor: auto;

  :hover{
    transform: none;
  }
  &&.correct{
    background: #98D5B9;
  }
}
`

export const LinkButton = styled.button`
  display: inline-block;
  color: #0d335d;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0d335d;
  border-radius: 3px;
  display: block;
`