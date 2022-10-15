import React from 'react'

import { ExtensionsContainer, ExtensionsTitle, ExtensionsParagraph, ExtensionsDownload } from './ExtensiosStyle'

import ChromeImage from '../../assets/images/logo-chrome.svg';
import ChromeFirefox from '../../assets/images/logo-firefox.svg';
import ChromeOpera from '../../assets/images/logo-opera.svg';

import Card from '../Card'

export default function Extensions() {
    return (
        <ExtensionsContainer>
            <ExtensionsTitle>
                Download the extension
            </ExtensionsTitle>
            <ExtensionsParagraph>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize
            </ExtensionsParagraph>
            <ExtensionsDownload>
                <Card
                    browserImage={ChromeImage}
                    browser="Chrome"
                    version="62"
                />
                <Card
                    browserImage={ChromeFirefox}
                    browser="Firefox"
                    version="55"
                    Firefox
                />
                <Card
                    browserImage={ChromeOpera}
                    browser="Opera"
                    version="46"
                    Opera
                />
            </ExtensionsDownload>
        </ExtensionsContainer>
    )
}
