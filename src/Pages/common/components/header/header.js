import React from 'react';
import * as S from './styled'
import Logo from './../../../../images/logo.svg'
import SearchIcon from './../../../../images/mobile/header/search-icon.svg'
import { useHistory, Link } from 'react-router-dom';



export default function Header() {

    function openMenu() {
        let menuButton = document.querySelector('.menu-button')
        let menuNav = document.querySelector('nav')
        menuNav.classList.toggle("open")
        menuButton.classList.toggle("open")

    }

    return (
        <>
            <S.Header>
                <S.MenuContainer>
                    <S.MenuButtonContainer className="menu-button" onClick={openMenu}>
                        <S.Line className="line-one"></S.Line>
                        <S.Line className="line-two"></S.Line>
                        <S.Line className="line-three"></S.Line>
                    </S.MenuButtonContainer>
                </S.MenuContainer>
                <h1>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </h1>
                <S.NavMenu>
                    <S.MenuList>
                        <S.MenuItems>Sobre nós</S.MenuItems>
                        <S.MenuItems>SEO/CRO</S.MenuItems>
                        <ol>
                            <S.MenuItems>Tags On-Page</S.MenuItems>
                            <S.MenuItems>Dados Estruturados</S.MenuItems>
                        </ol>
                        <S.MenuItems>Back-end</S.MenuItems>
                        <ol>
                            <S.MenuItems>Node</S.MenuItems>
                            <S.MenuItems>Java</S.MenuItems>
                        </ol>
                        <S.MenuItems>Front-end</S.MenuItems>
                        <ol>
                            <S.MenuItems>Javascript</S.MenuItems>
                            <S.MenuItems>CSS</S.MenuItems>
                        </ol>
                    </S.MenuList>

                </S.NavMenu>
                <div>
                    <img src={SearchIcon} alt="" width="30" />
                </div>
            </S.Header>
        </>
    );
}