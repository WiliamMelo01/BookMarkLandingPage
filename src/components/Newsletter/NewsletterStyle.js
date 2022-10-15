import styled from 'styled-components';

import { device } from '../../devices'

export const NewsleterrContainer = styled.section`
    width:100vw;
    min-height:300px;
    background:hsl(231, 69%, 60%);
    margin-top:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const JoinedInfo = styled.span`
    color:#FFF;
    font-size:1em;
    margin-top:50px;
    margin-bottom:30px;
    text-transform:uppercase;
`;
export const NewsletterTitle = styled.h2`
    color:#FFF;
    font-size:2em;
    max-width:25%;
    text-align:center;

    @media ${device.laptop}{
        max-width:35%;
    }
    @media ${device.mobileL}{
        max-width:100vw;
    }
`;
export const ContactLine = styled.aside`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:25%;
    margin-top:30px;

    @media ${device.laptopL}{
        width:30%;
    }
    @media ${device.laptop}{
        width:45%;
    }
    @media ${device.mobileL}{
        width:100vw;
        flex-direction:column;
    }
`;
export const ContainerEmail = styled.aside`
    width:62%;
    height:70px;
    border-radius:5px;
    background:${props => props.invalid && "hsl(0, 94%, 66%)"};
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;

    @media ${device.laptop}{
        margin-bottom:20px;
        height:90px;
        width:68%;
    }
`;
export const InputEmail = styled.input`
    width:98%;
    height:50px;
    border-radius:5px;
    border:none;
    padding:0 35px 0 10px;
    outline:none;
    margin-top:1%;
`;
export const EmailMessage = styled.span`
    width:98%;
    color:white;
    font-weight:bold;
    font-size:.7em;
    margin: 5px;
    text-align:left;
    display: ${props => props.invalid ? 'block' : 'none'};

    @media ${device.tablet}{
        font-size:.8em;
    }
`;
export const ContactUs = styled.button`
    width:25%;
    height:50px;
    border-radius:5px;
    border:none;
    cursor:pointer;
    background:hsl(0, 94%, 66%);
    color:#FFF;
    position:relative;
    bottom:7px;

    &:hover{
        background:#FFF;
        border:2px solid hsl(0, 94%, 66%);
        color:hsl(0, 94%, 66%);
    }

    @media ${device.laptop}{
        width:30%;
        bottom:25px;
    }
    
    @media ${device.mobileL}{
        width:69%;
    }
`;
export const ErrorButton = styled.button`
    border:none;
    background:transparent;
    position:absolute;
    top:15%;
    right:3%;
    display: ${props => props.invalid ? 'block' : 'none'};
`;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;