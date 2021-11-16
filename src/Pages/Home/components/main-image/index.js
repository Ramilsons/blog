import React from 'react';
import * as S from './styled'

export default function MainImage(params) {

    console.log(params)

    return (
        <>
            <S.MainPostSection>
                <S.Image src={params.mainPost[0].data.main_image.url} />
                <S.TitlePost>{params.mainPost[0].data.h1[0].text}</S.TitlePost>
            </S.MainPostSection>
        </>
    );
}