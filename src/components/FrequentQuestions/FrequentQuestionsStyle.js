import styled from 'styled-components';

import { device } from '../../devices'

export const FrequentQuestionsCotainer = styled.section`
    width:85.5vw;
    margin: 0 auto;
    position:relative;
    top:150px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media ${device.mobileL}{
        width:100vw;
    }
`;
export const FrequentQuestionsTitle = styled.h2`
    color:hsl(229, 31%, 21%);
    font-size:2em;
    margin-bottom:30px;

    @media ${device.mobileL}{
        width:100vw;
        text-align:center;
    }
`;
export const FrequentQuestionsParagraph = styled.p`
    color:hsl(229, 8%, 60%);
    max-width:30%;
    text-align:center;
    margin-bottom:50px;

    @media ${device.laptop}{
        max-width:45%;
    }
    @media ${device.mobileL}{
        min-width:90vw;
    }
`;
export const MoreInfo = styled.button`
    width:10%;  
    height:50px;
    margin:50px 0 100px 0;
    background: hsl(231, 69%, 60%);
    border:none;
    color:#FFF;
    border-radius:5px;
    cursor:pointer;
    transition: all .5s ease;

    &:hover{
        background:transparent;
        color:hsl(231, 69%, 60%);
        border:2px solid hsl(231, 69%, 60%);
    }

    @media ${device.laptop}{
        width:20%;
    }
    @media ${device.mobileL}{
        width:30%;
    }
`;
// export const  = styled.``;