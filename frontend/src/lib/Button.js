import styled from 'styled-components/macro'

export const Button = styled.button`
background-color: #fff;
color:#000;
border: none;
border-radius: 5px;
padding: 15px 60px;
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