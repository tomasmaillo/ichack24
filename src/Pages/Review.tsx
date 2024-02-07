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
  const [showQR, setShowQR] = useState(false)
  useEffect(() => {
    // Using axios to make a GET request with custom header
    axios
      .get(
        'https://4ff9-94-175-61-189.ngrok-free.app/get_quiz',
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

  const clickSendQuiz = () => {
    setShowQR(true)
  }

  return (
    <div style={CenteredContainer}>
      <div
        style={{
          maxWidth: '600px',
          margin: '64px auto',
          backgroundColor: 'white',
          padding: '32px',
        }}>
        <h2
          style={{
            marginBottom: '0px',
            fontSize: '50px',
            color: '#000000',
            marginTop: '0px',
          }}>
          Review your quiz
        </h2>
        <p
          style={{
            margin: '0px',
            color: '#2c2c2c',
          }}>
          There are {quiz.length} questions in this quiz.
        </p>

        <br />
        <QuizComponent quizData={quiz} />
      </div>

      <br />
      <br />
      <br />
      <br />

  <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
          transition: 'all 0.2s',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: showQR ? 1 : 0,
        }}>
        <img
          src="./qr.png"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            zIndex: 100,
          }}
        />
      </div>
      <StickyFooter onSendQuiz={clickSendQuiz} />
    </div>
  )
}

export default Review
