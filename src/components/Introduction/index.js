import React from 'react'

import { IntroductionContainer, IntroductionInformations, IntroductionImage, ButtonGetIt, IntroductionTitle, IntroductionDescription, FormatBackground } from './IntroductionStyle'

import IntroductionImageImage from '../../assets/images/illustration-hero.svg'

export default function Introduction() {
    return (
        <> <IntroductionContainer>
            <IntroductionInformations>
                <IntroductionTitle>A Simple Bookmark Manager</IntroductionTitle>
                <IntroductionDescription>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</IntroductionDescription>
                <ButtonGetIt chrome>
                    Get it on chrome
                </ButtonGetIt>
                <ButtonGetIt>
                    Get it on Firefox
                </ButtonGetIt>
            </IntroductionInformations>
            <IntroductionImage src={IntroductionImageImage}>
            </IntroductionImage>
            <FormatBackground>
            </FormatBackground>
        </IntroductionContainer>
        </>
    )
}
