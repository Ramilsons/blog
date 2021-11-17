import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 80px;
padding: 0 25px;
`

export const NavMenu = styled.nav`
height:100%;
width: 300px;
background-color: #4a4e55;
position: absolute;
top: 0;
left: 0;
z-index: 1;
transition: margin-left 1s;
margin-left: -300px;

&.open{
    margin-left: 0px;
}
`

export const MenuContainer = styled.div`
width: 30px;
height: 30px;
`

export const MenuButtonContainer = styled.div`
z-index: 2;
transition: margin-left 1.1s;
height:30px;
&.open{
    margin-left: 220px;
    position: absolute;
    div{
        background-color: #ffffff;
    }
    .line-one{
        transform: rotateZ(45deg);
    }
    .line-two{
        display:none;
    }
    .line-three{
        transform: rotateZ(135deg);
        margin-top: -8px;
    }
}
`

export const Line = styled.div`
width:30px;
height:3px;
background-color: #423939;
margin: 5px 0;
transition: transform 1s;
`

export const MenuList = styled.ul`
font-size: 1rem;
color: #ffffff;
padding: 0 30px;
ol li{
    font-size: 0.8rem;
}
`

export const MenuItems = styled.li`
margin: 10px 0;
`
