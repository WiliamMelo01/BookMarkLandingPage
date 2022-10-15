import styled from 'styled-components';

import { device } from '../../devices'

export const FeatureContainer = styled.section`
    width:85.5vw;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    margin-top:50px;

    @media ${device.mobileL}{
        width:100vw;
    }
`;
export const FeaturesTitle = styled.h2`
    font-size:2em;
    color:hsl(229, 31%, 21%);
    margin-bottom:30px;
`;
export const FeaturesParagraph = styled.p`
    color:hsl(229, 8%, 60%);
    max-width:33%;
    text-align:center;
    margin-bottom:30px;

    @media ${device.mobileL}{
        max-width:90%;
    }
`;
export const FeaturesOptions = styled.aside`
    width:40%;
    height:70px;
    border-bottom: 1px solid hsl(229, 8%, 60%);
    @media ${device.laptop}{
        width:50%;
    }
    @media ${device.tablet}{
        width:70%;
    }
    @media ${device.mobileL}{
        width:100vw;
        display:flex;
        flex-direction:column;
        height:150px;
    }
`;
export const FeaturesOptionsButton = styled.button`
    width:33.333%;
    height:99.5%;
    cursor:pointer;
    border:none;
    background:transparent;
    color:${props => props.active ? "hsl(229, 31%, 21%)" : "hsl(229, 8%, 60%)"};
    border-bottom:${props => props.active ? "3px solid hsl(0, 94%, 66%)" : "none"};

    &:hover{
        color: ${props => props.active ?? "hsl(0, 94%, 66%)"};
    }

    @media ${device.mobileL}{
        width:100vw;
        height:50px;
        border-top: 1px solid hsl(229, 8%, 60%)
    }

`;
export const FeaturesInformationsContainer = styled.aside`
    width:85.5vw;
    min-height:450px;
    display:flex;
    margin: 0 auto;
    margin-top:80px;
    display:flex;
    justify-content:space-between;
    margin-bottom:150px;

    @media ${device.mobileL}{
        width:100vw;
        flex-direction:column;
        align-items:center;
    }
`;
export const FeaturesImage = styled.img`
    width:650px;
    height:400px;
        
    @media ${device.laptop}{
        width:50%;
    }
    @media ${device.tablet}{
        height:350px;
        width:40%;
        position:relative;
        top:50px;
        right:20px;
    }
    @media ${device.mobileL}{
        width:90vw;
        position:relative;
        left:4px;
    }
`;
export const FeaturesInformations = styled.aside`
    width:50%;
    height:100%;
    margin-left:100px;

    @media ${device.mobileL}{
        width:100vw;
        margin-top:50px;
    }
`;
export const FeaturesInformationsTitle = styled.h3`
    font-size:2em;
    color:hsl(229, 31%, 21%);
    margin: 90px 0 40px 0;

    @media ${device.mobileL}{
        width:90vw;
        position:relative;
        right:20px; 
        text-align:center;       
    }
    `;
export const FeaturesInformationsParagraph = styled.p`
    width:55%;
    color: hsl(229, 8%, 60%);
    margin-bottom:40px;

    @media ${device.tablet}{
        width:75%;
    }
`;
export const FeaturesInformationsButton = styled.button`
    width:15%;
    height:50px;
    color:#FFF;
    background-color:hsl(231, 69%, 60%);
    border:none;
    cursor:pointer;
    border-radius:5px;
    transition: all .5s ease;

    &:hover{
        background:transparent;
        color:hsl(231, 69%, 60%);
        border: 2px solid hsl(231, 69%, 60%);
    }

    @media ${device.laptopL}{
        width:25%;
    }
    @media ${device.laptop}{
        width:30%;
    }
`;
export const FormatBackground2 = styled.aside`
    width:600px;
    height:400px;
    background-color:hsl(231, 69%, 60%);
    position:absolute;
    z-index:-1;
    border-radius: 0 10vw 10vw 0;
    left:-10%;
    bottom:10%;

    @media ${device.laptop}{
        height:260px;
        width:55%;
        bottom:0%;
        bottom:15%;
    }
    @media ${device.mobileL}{
        width:100vw;
        border-radius: 0 30vw 30vw 0;
        bottom:35%;
    }

`;