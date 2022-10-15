import React, { useState } from 'react'

import { FeatureContainer, FeaturesTitle, FeaturesParagraph, FeaturesOptions, FeaturesOptionsButton, FeaturesInformationsContainer, FeaturesInformations, FeaturesImage, FeaturesInformationsTitle, FeaturesInformationsParagraph, FeaturesInformationsButton, FormatBackground2 } from './FeaturesStyle';

import FeaturesImage2 from '../../assets/images/illustration-features-tab-1.svg';
import FeaturesImage3 from '../../assets/images/illustration-features-tab-2.svg';
import FeaturesImage4 from '../../assets/images/illustration-features-tab-3.svg';

export default function Features() {

    const [simple, setSimple] = useState(true);
    const [speed, setSpeed] = useState(false);
    const [easy, setEasy] = useState(false);
    const [actived, setActived] = useState('simple');

    function selectSimple() {
        setSimple(true)
        setSpeed(false)
        setEasy(false)
        setActived('simple')
    } function selectSpeed() {
        setSpeed(true)
        setEasy(false)
        setSimple(false)
        setActived('speed')
    } function selectEasy() {
        setEasy(true)
        setSimple(false)
        setSpeed(false)
        setActived('easy')
    }

    const activedFeature = {
        simple: () => {
            return (
                <>
                    <FeaturesImage src={FeaturesImage2}>
                    </FeaturesImage>
                    <FeaturesInformations>
                        <FeaturesInformationsTitle>
                            Bookmark in one click
                        </FeaturesInformationsTitle>
                        <FeaturesInformationsParagraph>
                            Orrganize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                        </FeaturesInformationsParagraph>
                        <FeaturesInformationsButton>
                            More info
                        </FeaturesInformationsButton>
                    </FeaturesInformations>
                </>
            )
        }, speed: () => {
            return (
                <>
                    <FeaturesImage src={FeaturesImage3}>
                    </FeaturesImage>
                    <FeaturesInformations>
                        <FeaturesInformationsTitle>
                            Intelligent Search
                        </FeaturesInformationsTitle>
                        <FeaturesInformationsParagraph>
                            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                        </FeaturesInformationsParagraph>
                        <FeaturesInformationsButton>
                            More info
                        </FeaturesInformationsButton>
                    </FeaturesInformations>
                </>
            )
        }, easy: () => {
            return (
                <>
                    <FeaturesImage src={FeaturesImage4}>
                    </FeaturesImage>
                    <FeaturesInformations>
                        <FeaturesInformationsTitle>
                            Share your bookmarks
                        </FeaturesInformationsTitle>
                        <FeaturesInformationsParagraph>
                            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                        </FeaturesInformationsParagraph>
                        <FeaturesInformationsButton>
                            More info
                        </FeaturesInformationsButton>
                    </FeaturesInformations>
                </>
            )
        }
    };

    return (
        <FeatureContainer>
            <FeaturesTitle>
                Features
            </FeaturesTitle>
            <FeaturesParagraph>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </FeaturesParagraph>
            <FeaturesOptions>
                <FeaturesOptionsButton active={simple} onClick={() => selectSimple()}>Simple Bookmark</FeaturesOptionsButton>
                <FeaturesOptionsButton active={speed} onClick={() => selectSpeed()}>Speedy Searching</FeaturesOptionsButton>
                <FeaturesOptionsButton active={easy} onClick={() => selectEasy()}>Easy Sharing</FeaturesOptionsButton>
            </FeaturesOptions>
            <FeaturesInformationsContainer>
                {activedFeature[actived]()}
                <FormatBackground2>
                </FormatBackground2>
            </FeaturesInformationsContainer>
        </FeatureContainer>
    )
}
