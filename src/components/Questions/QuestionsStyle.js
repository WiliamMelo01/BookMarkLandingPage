import styled from 'styled-components';

import { device } from '../../devices'

export const QuestionsContainer = styled.aside`
    width:35%;
    min-height:60px;
    display:flex;
    flex-direction:column;
    border-top: .5px solid hsl(229, 8%, 60%);
    border-bottom: .5px solid hsl(229, 8%, 60%);

    @media ${device.laptop}{
        width:45%;
    }
    @media ${device.mobileL}{
        width:100vw;
        border-top:none;
    }
`;
export const QuestionLine = styled.aside`
    width:100%;
    min-height:60px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;
export const Question = styled.span`
    color:hsl(229, 31%, 21%);
    font-weight:bold;
    width:80%;
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        color: hsl(0, 94%, 66%);
    }
`;
export const QuestionsButton = styled.button`
    height:100%;
    width:20%;
    border:none;
    background:transparent;
    width:50px;
    cursor:pointer;
`;
export const QuestionsInformations = styled.aside`
    width:100%;
    margin-top:20px;
`;
export const QuestionsParagraph = styled.p`
    color:hsl(229, 8%, 60%);
    margin-bottom:20px;
`;
// export const QuestionsContainer = styled.``;
// export const QuestionsContainer = styled.``;
// export const QuestionsContainer = styled.``;