import React from 'react';
import Prismic from '@prismicio/client'
import { Link, RichText, Date } from 'prismic-reactjs';
import Token from './../tokenApi.js'
import Header from './../common/components/header/header.js'
import Footer from './../common/components/footer/footer.js'
import { GlobalStyle } from './../global-styled.js';

export default function PostPage() {
    const apiEndpoint = 'https://pontoevirgula.prismic.io/api/v2'
    const accessToken = Token()

    const client = Prismic.client(apiEndpoint, { accessToken })

    const [doc, setDocData] = React.useState(null)

    let auth = null

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await client.query(
                Prismic.Predicates.at('my.posts_1.uid', 'como-usar-a-tag-meta-description'),
                { lang: '*' }
            ).then(response => {
                console.log(response)
                setDocData(response.results)
            })
        }
        fetchData()
    }, [])


    return (
        <>
            <GlobalStyle />
            <Header />
            <h1>{doc ? doc[0].data.author : ''}</h1>
            <section>
                {doc ? doc[0].data.content.map(function (p, index) {
                    return (
                        <div key={index}>
                            {p.text}
                        </div>
                    )
                }) : ''}
            </section>
            <Footer />
        </>
    )
}