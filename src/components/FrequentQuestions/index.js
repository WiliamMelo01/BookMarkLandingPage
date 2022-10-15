import React from 'react'

import { FrequentQuestionsCotainer, FrequentQuestionsTitle, FrequentQuestionsParagraph, MoreInfo } from './FrequentQuestionsStyle'

import Questions from '../Questions'

export default function FrequentQuestionsStyle() {
    const newLocal = "How can i request a new browser?"
    return (
        <FrequentQuestionsCotainer>
            <FrequentQuestionsTitle>
                Frequently Asked Questions
            </FrequentQuestionsTitle>
            <FrequentQuestionsParagraph>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us
            </FrequentQuestionsParagraph>
            <Questions
                question="What is Bookmark?"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            />
            <Questions
                question={newLocal}
                paragraph="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            />
            <Questions
                question="Is there a mobile app?"
                paragraph="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum"
            />
            <Questions
                question="What about other Chromium browsers?"
                paragraph="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit"
            />
            <MoreInfo>
                More info
            </MoreInfo>
        </FrequentQuestionsCotainer>
    )
}
