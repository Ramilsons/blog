import React from 'react';
import * as S from './styled'
import WhiteLogo from './../../../../images/whiteLogo.svg'


export default function Footer() {

    return (
        <>
            <S.Footer>
                <S.ContentFooter>
                    <div>
                        <img src={WhiteLogo} alt="" width="130" />
                    </div>
                    <div>
                        <ul>
                            <S.Li>Lorem Ipsum</S.Li>
                            <S.Li>Lorem Ipsum</S.Li>
                            <S.Li>Lorem Ipsum</S.Li>
                            <br />
                            <S.Li>Lorem Ipsum</S.Li>
                            <S.Li>Lorem Ipsum</S.Li>
                            <S.Li>Lorem Ipsum</S.Li>
                        </ul>
                    </div>
                </S.ContentFooter>
                <div>
                    <S.FormEmail action="">
                        <S.InputEmail type="text" placeholder="Seu e-mail" />
                        <S.InputSubmit type="submit" value="Receber Artigos" />
                    </S.FormEmail>
                </div>
                <S.CopyrightContainter>
                    <S.CopyrightText>Copyright © 2021 Ponto&Vírgula - Todos os direitos reservados</S.CopyrightText>
                </S.CopyrightContainter>
            </S.Footer>
        </>
    );
}