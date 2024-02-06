import { useEffect, useState } from 'react'
import axios from 'axios' // Import axios
import QuestionPrime from '../Components/QuestionPrime'
import styled from 'styled-components'

const StyledMain = styled.div`
  padding: 32px;
  max-width: 400px;
  margin: auto auto;
  background-color: #fcfcfc;
`

const Student = () => {
  const [quiz, setQuiz] = useState<{ question: string; choices: string[] }[]>(
    []
  )
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  useEffect(() => {
    // Using axios to make a GET request with custom header
    axios
      .get(
        'https://2d24-192-41-125-253.ngrok-free.app/get_quiz',
        {
          headers: {
            'ngrok-skip-browser-warning': '69420', // Custom header to bypass the ngrok warning
          },
        }
      )
      .then((response) => {
        setQuiz(response.data.questions)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // When all questions have been answered, send the selectedAnswers to the server
  useEffect(() => {
    if (quiz.length === 0) return
    if (selectedAnswers.length === quiz.length) {
      axios
        .post(
          'https://2d24-192-41-125-253.ngrok-free.app/student_response',
          {
            selectedAnswers,
          }
        )
        .then((response) => {
          // Handle response
          console.log('Responses sent successfully', response.data)
        })
        .catch((error) => {
          // Handle error
          console.log('Error sending responses', error)
        })
    }
  }, [selectedAnswers, quiz.length]) // Adding dependencies to useEffect

  return (
    <StyledMain>
      <h1>Student</h1>

      {selectedAnswers.length < quiz.length && (
        <>
          <p>
            Question {selectedAnswers.length + 1} of {quiz.length}
          </p>
          <QuestionPrime
            question={quiz[selectedAnswers.length].question}
            answers={quiz[selectedAnswers.length].choices}
            onSubmit={(answer: string) =>
              setSelectedAnswers([...selectedAnswers, answer])
            }
          />
        </>
      )}

      {selectedAnswers.length === quiz.length && (
        <div>
          <h2>Your results have been sent!</h2>
        </div>
      )}
    </StyledMain>
  )
}

export default Student
