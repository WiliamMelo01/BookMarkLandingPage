import styled from 'styled-components';

import { device } from '../../devices'

export const ExtensionsContainer = styled.section`
    width:85.5vw;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media ${device.mobileL}{
        width:100vw;
    }
`;
export const ExtensionsTitle = styled.h2`
    font-size:2em;
    color:hsl(229, 31%, 21%);
    margin-bottom:30px;

    @media ${device.mobileL}{
        width:90vw;
        text-align:center;
    }
    
`;
export const ExtensionsParagraph = styled.p`
    color:hsl(229, 8%, 60%);
    max-width:35%;
    text-align:center;

    @media ${device.mobileL}{
        max-width:90vw;
        margin-bottom:10px;
    }
`;
export const ExtensionsDownload = styled.aside`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:3%;
    margin-top:5%;

    @media ${device.mobileL}{
        flex-direction:column;
    }
`;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;