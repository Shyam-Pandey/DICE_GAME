import styled from "styled-components";

export const OutlineButton = styled.button`
width: 190px;
outline: none;
border: 1px solid #000;
color: black;
background-color:#fff ;
padding:5px 8px;
border-radius: 5px;
cursor : pointer;
&:hover{
    background-color: #000;
    color: #ffff;
    transition: 0ms.3s ease-out;
}
`

export const Button = styled.button`
width: 190px;
padding:5px 8px;
outline: none;
border: 1px solid #026aa7;
border-radius: 5px;
color: #ffff;
background-color:#000 ;
cursor: pointer;
&:hover{
    background-color: #ffffff;
    color: #060000;
    transition: 0ms.3s ease-out;
}
`
