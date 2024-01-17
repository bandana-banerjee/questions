import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const singlequestion = ({ title, info }) => {
  const [show, setShow] = useState(false)
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-btn' onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}

    </article>
  )
}

export default singlequestion