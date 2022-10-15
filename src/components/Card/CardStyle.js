import styled from 'styled-components';

import { device } from '../../devices'


export const CardDownload = styled.div`
    width:20%;
    height:390px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: 0 0 10px #878686;
    border-radius:10px;
    position:relative;
    top:${props => props.Firefox ? "30px" : props.Opera ? "60px" : "0px"};

    @media ${device.laptopL}{
        height:350px;
    }
    @media ${device.laptop}{
        width:50%;
        height:310px;
    }
    @media ${device.mobileL}{
        width:80vw;
        height:380px;
    }
`;
export const BrowserImage = styled.img`
    width:40%;
    margin:25px 0;
`;
export const CardTitle = styled.span`
    color:hsl(229, 31%, 21%);
    font-size:1.5em;
    font-weight:bold;
    margin-bottom: 10px;
`;
export const CardInfo = styled.span`
    color:hsl(229, 8%, 60%);
    margin-bottom:30px;
`;
export const DotsImage = styled.img`
    width:100%;
`;
export const ButtonCard = styled.button`
    width:90%;
    height:50px;
    background:hsl(231, 69%, 60%);
    color:#FFF;
    border:none;
    margin-top:20px;
    margin-bottom:20px;
    border-radius:5px;
    cursor:pointer;
    transition: all .5s ease;

    &:hover{
        background:transparent;
        border:2px solid hsl(231, 69%, 60%);
        color:hsl(231, 69%, 60%);
    }
    `;