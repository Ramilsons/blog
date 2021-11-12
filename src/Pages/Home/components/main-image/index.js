import React from 'react';
import * as S from './styled'

export default function MainImage({ mainPost }) {

    let mainImage = mainPost ? mainPost.data["main-image"].url : ""
    let mainTitlePost = mainPost ? mainPost.data.h1[0].text : ""
    if (mainPost) {
        console.log(mainPost)
    }

    return (
        <>
            <S.MainPostSection>
                <S.Image src={mainImage} alt="" />
                <S.TitlePost>{mainTitlePost}</S.TitlePost>
            </S.MainPostSection>
        </>
    );
}