import React, { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import DeleteIcon from './../shared/icons/Delete'

import Card from './../shared/UI/Card'
import EditIcon from './../shared/icons/EditIcon'

const FeedbackItem = ({ item, onDeleteFeedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='rating'>{item.rating}</div>
      <button
        type='button'
        className='delete'
        onClick={() => deleteFeedback(item.id)}
      >
        <DeleteIcon />
      </button>
      <button type='button' className='edit' onClick={() => editFeedback(item)}>
        <EditIcon />
      </button>

      <div className='comment'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
