import React from 'react'

import { FooterContainer, FooterLinks, FooterIcon, FooterLink, FooterMedia, FooterMediaIcon } from './FooterStyle'

import IconImage from '../../assets/images/logo-bookmark-white.webP';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterLinks>
                <FooterIcon src={IconImage}>
                </FooterIcon>
                <FooterLink>
                    Features
                </FooterLink>
                <FooterLink>
                    Pricing
                </FooterLink>
                <FooterLink>
                    Contact
                </FooterLink>
            </FooterLinks>
            <FooterMedia>
                <FooterMediaIcon src={IconFacebook}></FooterMediaIcon>
                <FooterMediaIcon src={IconTwitter}></FooterMediaIcon>
            </FooterMedia>
        </FooterContainer>
    )
}
