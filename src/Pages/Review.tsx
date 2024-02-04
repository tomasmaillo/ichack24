import AnswerOption from '../Components/AnswerOption'
import Question from '../Components/Question'
import StickyFooter from '../Components/StickyFooter'
import QuestionBlock from '../Components/QuestionBlock'
import QuizComponent from '../Components/Quiz'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CenteredContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
}

const Review = () => {
  const [quiz, setQuiz] = useState<{ question: string; choices: string[] }[]>(
    []
  )
  useEffect(() => {
    // Using axios to make a GET request with custom header
    axios
      .get(
        'https://f3fc-2a0c-5bc0-40-3e3c-70c2-eb9e-ee77-1f6.ngrok-free.app/get_quiz',
        {
          headers: {
            'ngrok-skip-browser-warning': '69420', // Custom header to bypass the ngrok warning
          },
        }
      )
      .then((response) => {
        console.log(response)

        setQuiz(response.data.questions)
        return null
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div style={CenteredContainer}>
      <h1
        style={{
          marginBottom: '20px',
          fontSize: '50px',
          color: '#000000',
        }}></h1>
      <QuizComponent quizData={quiz} />

      <StickyFooter />
    </div>
  )
}

export default Review
