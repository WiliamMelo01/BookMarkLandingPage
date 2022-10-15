import React, { useState } from 'react'

import { NewsleterrContainer, JoinedInfo, NewsletterTitle, ContactLine, ContainerEmail, InputEmail, ContactUs, EmailMessage, ErrorButton } from './NewsletterStyle'

import { MdError } from 'react-icons/md'

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [invalid, setInvalid] = useState(false);

    function handleSubmit() {

        if (!email.match("^[\\w\\-]+(\\.[\\w\\-]+)*@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$")) {
            setInvalid(true)
        } else {
            setInvalid(false)
        }

    }

    return (
        <>
            <NewsleterrContainer>
                <JoinedInfo>
                    35,000+ already joined
                </JoinedInfo>
                <NewsletterTitle>
                    Stay up-to-date with what we’re doing
                </NewsletterTitle>
                <ContactLine>
                    <ContainerEmail invalid={invalid}>
                        <InputEmail placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}>
                        </InputEmail>
                        <EmailMessage invalid={invalid}>
                            Whoops, make sure it's an email
                        </EmailMessage>
                        <ErrorButton invalid={invalid}>
                            <MdError
                                size="24"
                                color="hsl(0, 94%, 66%)"
                            />
                        </ErrorButton>
                    </ContainerEmail>
                    <ContactUs onClick={() => handleSubmit()}>
                        Contact Us
                    </ContactUs>
                </ContactLine>
            </NewsleterrContainer>
        </>
    )
}
