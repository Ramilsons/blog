import styled from "styled-components";

export const Footer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
background-color: #646262;
`
export const ContentFooter = styled.div`
padding:20px;
display: flex;
align-items: center;
width: 100%;
justify-content:space-evenly
`

export const Li = styled.li`
color: #ffffff;
font-size: 0.9rem;
`
export const FormEmail = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

export const InputEmail = styled.input`
padding-left: 10px;
min-width: 270px;
height: 40px;
margin: 5px;
background-color: transparent;
border: 4px solid #ffffff;
border-radius: 8px;
&::placeholder{
    color: #ffffff;

    font-size: 1rem;
    }
`

export const InputSubmit = styled.input`
min-width: 288px;
height: 48px;
padding:8px;
margin: 5px;
background-color: #D9ECFA;
border: none;
border-radius: 2px;
color: #595757;
font-size: 1rem;
font-weight: 700;
`

export const CopyrightContainter = styled.div`
width: 100%;
margin-top: 20px;
background-color: #414141;
border-radius: 30px 30px 0 0 ;
`

export const CopyrightText = styled.p`
color: #ffffff;
font-size: 0.9rem;
text-align: center;
margin: 20px;
`