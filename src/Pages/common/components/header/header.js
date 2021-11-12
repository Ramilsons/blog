import React from 'react';
import * as S from './styled'
import Logo from './../../../../images/logo.svg'
import MenuIcon from './../../../../images/mobile/header/menu-icon.svg'
import SearchIcon from './../../../../images/mobile/header/search-icon.svg'



export default function Header() {
    return (
        <>
            <S.Header>
                <div>
                    <img src={MenuIcon} alt="" />
                </div>
                <h1>
                    <img src={Logo} alt="" />
                </h1>
                <div>
                    <img src={SearchIcon} alt="" />
                </div>
            </S.Header>
        </>
    );
}