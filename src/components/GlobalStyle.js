import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
margin:0;
padding: 0 30px;
background-color: #8080802b;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center }

img{
display:block;
object-fit:cover;
max-width:100%;
}
ul{
list-style:none;
padding: 0;
}
p{
padding: 0;
margin: 0;}`;
