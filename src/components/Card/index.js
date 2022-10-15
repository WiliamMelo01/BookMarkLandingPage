import React from 'react'

import { CardDownload, BrowserImage, CardTitle, CardInfo, DotsImage, ButtonCard } from './CardStyle'

import Dots from '../../assets/images/bg-dots.svg';


export default function Card({ browserImage, browser, version, Firefox, Opera }) {
    return (
        <CardDownload Firefox={Firefox} Opera={Opera}>
            <BrowserImage src={browserImage}>
            </BrowserImage>
            <CardTitle>
                Add to {browser}
            </CardTitle>
            <CardInfo>
                Minumum version {version}
            </CardInfo>
            <DotsImage src={Dots}>
            </DotsImage>
            <ButtonCard>
                Add & Install extension
            </ButtonCard>
        </CardDownload >
    )
}
