import React from 'react';
import * as S from './styled'
import { useHistory, Link } from 'react-router-dom';

export default function MainImage(params) {
    const history = useHistory();

    console.log(params)

    let backgroundStyle = 'url(' + params.mainPost[0].data.main_image.url + ')'

    function goToPagePost() {
        history.push('./post/' + params.mainPost[0].uid)
    }

    return (
        <>
            <S.MainPostSection style={{ backgroundImage: backgroundStyle }}>
                <S.TitlePost onClick={goToPagePost}>{params.mainPost[0].data.h1[0].text}</S.TitlePost>
            </S.MainPostSection>
        </>
    );
}