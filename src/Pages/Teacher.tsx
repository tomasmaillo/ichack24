import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Graph from '../Components/Graph' // Adjust the path based on your project structure
import QuestionStatistics from '../Components/QuestionStatistics'
import axios from 'axios'

// const testQuestionsAndAnswers = {
//   questions: [
//     {
//       question: 'What is the name of the teacher?',
//       choices: {
//         Vrinda: 0,
//         Veronica: 2,
//         Victoria: 1,
//         Vanessa: 10,
//       },
//       answer: 'Vrinda',
//     },
//     {
//       question: 'Where is the teacher originally from?',
//       choices: {
//         China: 0,
//         India: 0,
//         Japan: 0,
//         Australia: 0,
//       },
//       answer: 'India',
//     },
//     {
//       question: 'How long has the teacher been living in her current location?',
//       choices: {
//         '2 years': 0,
//         '1 year': 0,
//         '3 years': 0,
//         '6 months': 0,
//       },
//       answer: '1 year',
//     },
//     {
//       question: "What is the teacher's opinion about the weather in London?",
//       choices: {
//         'She enjoys it': 0,
//         'She is used to it': 0,
//         'She is not sure how she feels about it': 0,
//         'She dislikes it': 0,
//       },
//       answer: 'She is not sure how she feels about it',
//     },
//     {
//       question:
//         'What city in the UK is rumored to have worse weather than London?',
//       choices: {
//         Manchester: 0,
//         Liverpool: 0,
//         Birmingham: 0,
//         Edinburgh: 0,
//       },
//       answer: 'Edinburgh',
//     },
//   ],
// }

const Teacher = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = React.useState([])

  useEffect(() => {
    // Using axios to make a GET request with custom header
    axios
      .post(
        'https://a00b-94-175-61-189.ngrok-free.app/aggregate_quiz_results/',
        {
          headers: {
            'ngrok-skip-browser-warning': '69420', // Custom header to bypass the ngrok warning
          },
        }
      )
      .then((response) => {
        console.log({ response })

        setQuestionsAndAnswers(response.data.questions)
        return null
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  function transformChoices(originalChoices) {
    // Convert the originalChoices object into the desired array format
    const transformed = Object.keys(originalChoices).map((key) => ({
      answerText: key, // Use the country name as answerText
      count: originalChoices[key], // Preserve the count value
    }))

    return transformed
  }

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '64px auto',
        backgroundColor: 'white',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {questionsAndAnswers.map((question, index) => (
        <QuestionStatistics
          key={`question-${index}`}
          question={question.question}
          answers={transformChoices(question.choices)}
          correctAnswer={question.answer}
        />
      ))}
    </div>
  )
}

export default Teacher
