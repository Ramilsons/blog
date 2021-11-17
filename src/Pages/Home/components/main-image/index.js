import React from 'react';
import * as S from './styled'

export default function MainImage(params) {

    console.log(params)

    let backgroundStyle = 'url(' + params.mainPost[0].data.main_image.url + ')'

    return (
        <>
            <S.MainPostSection style={{ backgroundImage: backgroundStyle }}>
                <S.TitlePost>{params.mainPost[0].data.h1[0].text}</S.TitlePost>
            </S.MainPostSection>
        </>
    );
}