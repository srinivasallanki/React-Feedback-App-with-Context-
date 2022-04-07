import React, { useState,  useContext, useRef, useEffect } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import Card from '../shared/UI/Card'
import FeedbackRating from './FeedbackRating'

const FeedbackForm = () => {
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)
  const inputRef = useRef(null)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  const [text, setText] = useState('')
  const [isDisable, setIsDisable] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  //text change handler
  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setIsDisable(true)
      setMessage('')
    }
    if (value.trim().length < 10) {
      setMessage('Text must be at least 10 characters')
      setIsDisable(true)
    } else {
      setIsDisable(false)
      setMessage('')
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = {
      text,
      rating,
    }

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
      addNewFeedback(newFeedback)
    }
    setText('')
    setIsDisable(true)
  }
  return (
    <div className='box-container mt-50'>
      <Card>
        <FeedbackRating
          selected={rating}
          select={(rating) => setRating(rating)}
        />
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <input
              type='text'
              value={text}
              onChange={handleTextChange}
              placeholder='Write a review'
              ref={inputRef}
            />
            <button className='btn' type='submit' disabled={isDisable}>
              Send
            </button>
          </div>
        </form>
        {message && <div className='message'>{message}</div>}
      </Card>
    </div>
  )
}

export default FeedbackForm
