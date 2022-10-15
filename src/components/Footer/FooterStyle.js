import styled from 'styled-components';

import { device } from '../../devices'

export const FooterContainer = styled.section`
    width:100vw;
    min-height:80px;  
    background:hsl(229, 31%, 21%);
    color:hsl(229, 8%, 60%);  
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10%;

    @media ${device.mobileL}{
        flex-direction:column;
    }
`;
export const FooterLinks = styled.aside`
    display:flex;
    gap:40px;
    margin-top:20px;
    align-items:center;

    @media ${device.mobileL}{
        flex-direction:column;
    }
`;
export const FooterIcon = styled.img`
`;
export const FooterLink = styled.a`
    text-transform:uppercase;
    cursor:pointer;

    &:hover{
        color: hsl(0, 94%, 66%)
    }
`;
export const FooterMedia = styled.aside`
    display:flex;
    gap:30px;
    margin:25px 0;
`;
export const FooterMediaIcon = styled.img`
    cursor:pointer;
`;
// export const FooterContainer = styled.``;
// export const FooterContainer = styled.``;
// export const FooterContainer = styled.``;
// export const FooterContainer = styled.``;