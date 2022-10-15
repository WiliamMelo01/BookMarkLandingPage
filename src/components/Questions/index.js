import React, { useState } from 'react'

import { QuestionsContainer, QuestionLine, Question, QuestionsButton, QuestionsInformations, QuestionsParagraph } from './QuestionsStyle'

import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'


export default function Questions({ question, paragraph }) {

    const [QuestionIcon, setQuestionIcon] = useState('down')

    const handleClick = () => {
        setQuestionIcon(QuestionIcon === 'down' ? 'up' : 'down')
    };

    return (
        <QuestionsContainer>
            <QuestionLine>
                <Question>{question}</Question>
                <QuestionsButton onClick={handleClick}>
                    {QuestionIcon === 'down' ?
                        <AiOutlineDown size="24" color="hsl(231, 69%, 60%)" /> :
                        <AiOutlineUp size="24" color=" hsl(0, 94%, 66%)" />
                    }
                </QuestionsButton>
            </QuestionLine>
            {QuestionIcon === 'up' && (
                <>
                    <QuestionsInformations>
                        <QuestionsParagraph>
                            {paragraph}
                        </QuestionsParagraph>
                    </QuestionsInformations>
                </>
            )}
        </QuestionsContainer>
    )
}
