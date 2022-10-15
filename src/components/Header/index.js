import React, { useState } from 'react'

import { HeaderContainer, IconBookmark, ContainerButtonHeader, ButtonHeader, ButtonMenu, Menu, MenuHeader, LogoWhite, MenuButtonClose, MenuLinkContainer, MenuLink, MenuLogin, MenuMedia, Media } from './HeaderStyle'

import IconImage from '../../assets/images/logo-bookmark.svg';
import IconImageWhite from '../../assets/images/logo-bookmark-full-white.webP';
import IconFacebook from '../../assets/images/icon-facebook.svg';
import IconTwitter from '../../assets/images/icon-twitter.svg';

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    function showMenu() {
        setMenuActive(true);
    }
    function hideMenu() {
        setMenuActive(false);
    }
    return (
        <>
            <HeaderContainer>
                <IconBookmark src={IconImage}>
                </IconBookmark>
                <ContainerButtonHeader>
                    <ButtonHeader>
                        Features
                    </ButtonHeader>
                    <ButtonHeader>
                        Pricing
                    </ButtonHeader>
                    <ButtonHeader>
                        Contact
                    </ButtonHeader>
                    <ButtonHeader login>
                        login
                    </ButtonHeader>
                </ContainerButtonHeader>
                <ButtonMenu
                    onClick={onClick => showMenu()}
                >
                    <GiHamburgerMenu
                        size="24"
                    />
                </ButtonMenu>
            </HeaderContainer>
            <Menu menuActive={menuActive}>
                <MenuHeader>
                    <LogoWhite src={IconImageWhite}>
                    </LogoWhite>
                    <MenuButtonClose
                        onClick={() => hideMenu()}
                    >
                        <AiOutlineClose
                            size="24"
                            color="#FFF"
                        />
                    </MenuButtonClose>
                </MenuHeader>
                <MenuLinkContainer>
                    <MenuLink>
                        Features
                    </MenuLink>
                    <MenuLink>
                        Pricing
                    </MenuLink>
                    <MenuLink>
                        Contact
                    </MenuLink>
                    <MenuLogin>
                        Login
                    </MenuLogin>
                </MenuLinkContainer>
                <MenuMedia>
                    <Media src={IconFacebook}>
                    </Media>
                    <Media src={IconTwitter}>
                    </Media>
                </MenuMedia>
            </Menu>
        </>
    )
}
