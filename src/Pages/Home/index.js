import React from 'react';
import Prismic from '@prismicio/client'
import Header from './../common/components/header/header.js'
import Footer from './../common/components/footer/footer.js'
import MainImage from './components/main-image/index.js';
import MostRecents from './components/most-recents/index.js';
import { BasicElement } from '../common/components/placeloader/styled.js';
import { GlobalStyle } from './../global-styled.js';
import Token from './../tokenApi.js'
//import { Date, Link, RichText } from 'prismic-reactjs'

function App() {

    const apiEndpoint = 'https://pontoevirgula.prismic.io/api/v2'
    const accessToken = Token()

    const client = Prismic.client(apiEndpoint, { accessToken })

    const [doc, setDocData] = React.useState(null)


    React.useEffect(() => {
        const fetchData = async () => {
            const response = await client.query(
                Prismic.Predicates.at('document.type', 'posts_1')
            )
            if (response) {
                setDocData(response.results)
            }
        }
        fetchData()
    }, [])



    function showPosts() {
        console.log(doc)
    }

    return (
        <>
            <GlobalStyle />
            <Header />

            {doc ? (<><MainImage mainPost={doc} /><MostRecents /></>) : <BasicElement style={{ height: '0', marginBottom: '100%' }}></BasicElement>}

            <button onClick={showPosts}>Clique aqui</button>
            <Footer />
        </>
    );
}

export default App;