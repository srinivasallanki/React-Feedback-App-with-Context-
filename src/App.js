import FeedbackForm from './components/Feedback/FeedbackForm'
import FeedbackList from './components/Feedback/FeedbackList'
import Header from './components/shared/Header'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <FeedbackForm />
        <FeedbackList />
      </FeedbackProvider>
    </>
  )
}

export default App
