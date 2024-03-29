import React from 'react'
import SingleQuestion from './singlequestion'

const questions = ({ questions }) => {

    return (
        <section className='container'>
            <h1>Questions</h1>
            {questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />
            })}
        </section>
    )
}

export default questions