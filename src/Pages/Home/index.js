import React from 'react';
import Prismic from '@prismicio/client'
import Header from './../common/components/header/header.js'
import Footer from './../common/components/footer/footer.js'
import MainImage from './components/main-image/index.js';
import MostRecents from './components/most-recents/index.js';
import { GlobalStyle } from './../global-styled.js';
//import { Date, Link, RichText } from 'prismic-reactjs'

function App() {

    const apiEndpoint = 'https://pontoevirgula.prismic.io/api/v2'
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InBvbnRvZXZpcmd1bGEtNTY5Y2M0YmYtODFjNC00ZDM2LTkxYTctZTA1MWQ0MDMwYzg0XzQiLCJkYXRlIjoxNjM2NTAwMzkxLCJkb21haW4iOiJwb250b2V2aXJndWxhIiwiaWF0IjoxNjM2NTAwMzkxfQ.83tv45XsnzAdF8qTQ4qe5F7pTcpcKTLjxJUIUqwqAxo'

    const client = Prismic.client(apiEndpoint, { accessToken })

    const [doc, setDocData] = React.useState(null)
    const [mainPost, setMainPost] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await client.query(
                Prismic.Predicates.at('document.type', 'posts_1')
            )
            if (response) {
                setDocData(response.results)
                insertMainPost(response.results)
            }
        }
        fetchData()
    }, [])

    function insertMainPost(val) {
        setMainPost(val[1])
    }

    function showPosts() {
        console.log(doc)
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <MainImage
                mainPost={mainPost} />
            <MostRecents />
            <button onClick={showPosts}>Clique aqui</button>
            <Footer />
        </>
    );
}

export default App;