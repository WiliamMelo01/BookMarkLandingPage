import React from 'react'

import { Container } from './HomeStyle'

import Header from '../../components/Header'
import Introduction from '../../components/Introduction'
import Features from '../../components/Features'
import Extensions from '../../components/Extensios'
import FrequentQuestions from '../../components/FrequentQuestions'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <Container>
            <Header />
            <Introduction />
            <Features />
            <Extensions />
            <FrequentQuestions />
            <Newsletter />
            <Footer />
        </Container>
    )
}
