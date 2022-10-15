import styled from 'styled-components';
import { device } from '../../devices'

export const IntroductionContainer = styled.section`
    width:85.5vw;
    min-height:450px;
    display:flex;
    margin: 0 auto;
    margin-top:80px;
    display:flex;
    justify-content:space-between;
    position:relative;

    @media ${device.mobileL}{
        flex-direction:column;
        align-items:center;
        width:100vw;
    }
    @media ${device.mobileL}{
        flex-direction:column-reverse;
        width:100vw;
        column-reverse:reverse;
    }
`;
export const IntroductionInformations = styled.aside`
    width:46.25vw;
    position:relative;

    @media ${device.mobileL}{
        width:100vw;
    }
`;
export const IntroductionTitle = styled.h1`
    font-size:3em;
    color:hsl(229, 31%, 21%);
    margin-top:80px; 
    margin-bottom:30px; 

    @media ${device.mobileL}{
        text-align:center;
        width:100%;
        font-size:2.5em;
    }
    @media ${device.mobileL}{
        width:100%;
        font-size:2em;
        margin-top:150px; 
    }
`;
export const IntroductionDescription = styled.p`
    color:hsl(229, 8%, 60%);
    margin-bottom:30px;
    max-width:80%;
    text-align:center;

    @media ${device.mobileL}{
        max-width:90%;
        margin: 0 auto;
        margin-bottom:25px;
    }
`;
export const IntroductionImage = styled.img`
    width:750px;
    height:500px;
    position:relative;
    left:50px;

    @media ${device.laptop}{
        width:50%;
        height:450px;
    }
    @media ${device.tablet}{
        height:350px;
        width:40%;
        top:150px;
    }
    @media ${device.mobileL}{
        width:100%;
        left:0px;
        margin-top:-200px;
        margin-bottom:25px;
    }
`;
export const ButtonGetIt = styled.button`
    width:20%;
    height:50px;
    border-radius:5px;
    border:none;
    margin-right:15px;
    background:${props => props.chrome && "hsl(231, 69%, 60%)"};
    color:${props => props.chrome ? "#FFF" : "hsl(229, 31%, 21%)"};
    cursor:pointer;
    font-weight:500;
    transition: all .5s ease;

    &:hover{
        background:transparent;
        border: ${props => props.chrome ? "2px solid hsl(231, 69%, 60%)" : "2px solid hsl(229, 31%, 21%)"};
        color: ${props => props.chrome && "hsl(231, 69%, 60%)"};
    }

    @media ${device.laptopL}{
        width:30%;
    }
    @media ${device.laptop}{
        width:45%;
    }
    @media ${device.mobileL}{
        position:relative;
        left:20px;
    }
        left:20px;
    @media ${device.mobileM}{
        left:10px;
    }

`;
export const FormatBackground = styled.aside`
    width:600px;
    height:300px;
    background-color:hsl(231, 69%, 60%);
    position:absolute;
    z-index:-1;
    border-radius: 10vw 0 0 10vw;
    right:-10%;
    bottom:0%;

    @media ${device.laptop}{
        width:60%;
        height:350px;
        bottom:10%;
    }
    @media ${device.tablet}{
        height:260px;
        width:45%;
        bottom:0%;
    }
    @media ${device.mobileL}{
        bottom:50%;
        width:90%;
        border-radius:50px 0 0 100px;
    }
   
`;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;