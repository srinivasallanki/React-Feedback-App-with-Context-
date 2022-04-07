import { createContext, useState, useId } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const id = useId()
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This phone is really very good. Am OnePlus user..',
    },
    {
      id: 2,
      rating: 1,
      text: 'very very bad camera. blurry saturated images. pic cannot zoom much after click.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Really good affordable smartphone for Rs. 8999 its one of the most valuable buy.',
    },
  ])

  // Edit State
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add New item
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = id
    setFeedback((prev) => [newFeedback, ...prev])
  }

  // Delete item
  const deleteFeedback = (id) => {
    const newList = feedback.filter((item) => item.id !== id)
    setFeedback(newList)
  }

  //getting items for update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // update item
  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    )
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addNewFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
