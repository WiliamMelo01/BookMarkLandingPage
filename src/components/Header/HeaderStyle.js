import styled from 'styled-components';

import { device } from '../../devices'

export const HeaderContainer = styled.header`
    width:85vw;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 0 auto;
`;
export const IconBookmark = styled.img`

`;
export const ContainerButtonHeader = styled.aside`
    @media ${device.mobileL}{
        display:none
    }
`;
export const ButtonHeader = styled.button`
    text-transform:uppercase;
    border:none;
    color:${props => props.login ? "#FFF" : "hsl(229, 8%, 60%)"};
    cursor:pointer;
    background:${props => props.login ? "hsl(0, 94%, 66%)" : "transparent"};
    padding: 10px 25px;
    border-radius:5px;
    transition: all .4s ease;

    &:hover{
        color:hsl(0, 94%, 66%);
        background:transparent;
        border: ${props => props.login && "2px solid hsl(0, 94%, 66%)"}
    }

`;
export const ButtonMenu = styled.button`
    background:transparent;
    border:none;
    cursor:pointer;
    display:none;

    @media ${device.mobileL}{
        display:block;
    }

`;
export const Menu = styled.aside`
    width:100%;
    height:100vh;
    background:hsl(229, 31%, 21%);
    padding-bottom:2vh;
    z-index:999;
    position:fixed;
    bottom:0;
    display: ${props => props.menuActive ? "block" : "none"}
`;
export const MenuHeader = styled.aside`
    display:flex;
    justify-content:space-between;
`;
export const LogoWhite = styled.img`
    margin:30px 0 0 30px;
`;
export const MenuButtonClose = styled.button`
    background:transparent;
    border:none;
    cursor:pointer;
    margin:30px 30px 0 0;
`;
export const MenuLinkContainer = styled.aside`
    width:90%;
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    margin-top:30px;
`;
export const MenuLink = styled.a`
    width:100%;
    border-top:1px solid hsl(229, 8%, 60%);
    border-bottom:1px solid hsl(229, 8%, 60%);
    text-align:center;
    cursor:pointer;
    text-transform:uppercase;
    color:#FFF;
    padding:15px 0;
`;
export const MenuLogin = styled.button`
    width:100%;
    height:50px;
    border:2px solid #FFF;
    background:transparent;
    text-align:center;
    color:#FFF;
    text-transform:uppercase;
    border-radius:5px;
    cursor:pointer;
    font-weight:bold;
    letter-spacing:5px;
`;
export const MenuMedia = styled.aside`
    width:100%;
    position:absolute;
    bottom:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;
`;
export const Media = styled.img`

`;