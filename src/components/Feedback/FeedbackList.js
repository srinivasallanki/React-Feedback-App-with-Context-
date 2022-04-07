import React, { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  const renderList = feedback.map((item) => {
    return <FeedbackItem key={item.id} item={item} />
  })
  return (
    <>
      <div className='box-container mt-50'>{renderList}</div>
    </>
  )
}

export default FeedbackList
