import styled from 'styled-components'
import PossibleAnswer from './PossibleAnswer'

const StyledQuestion = styled.div`
  margin: 16px 0;
`

const StyledQuestionTitle = styled.h2`
  margin: 0;
`

const StyledAnswerList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`

const POSSIBLE_BUTTON_COLORS = [
  { backgroundColor: '#C9A2E9', borderColor: '#bf5ee1' },
  { backgroundColor: '#a0e2ee', borderColor: '#5ebfe1' },
  { backgroundColor: '#a0eeb3', borderColor: '#5ee185' },
  { backgroundColor: '#eed1a0', borderColor: '#e1bf5e' },
]

const QuestionPrime = (props: {
  question: string
  answers: string[]
  onSubmit: (s: string) => void
}) => {
  return (
    <StyledQuestion>
      <StyledQuestionTitle>{props.question}</StyledQuestionTitle>
      <StyledAnswerList>
        {props.answers.map((answer, index) => (
          <PossibleAnswer
            key={index}
            answer={answer}
            onClick={() => {
              props.onSubmit(answer)
            }}
            {...POSSIBLE_BUTTON_COLORS[index % POSSIBLE_BUTTON_COLORS.length]}
          />
        ))}
      </StyledAnswerList>
    </StyledQuestion>
  )
}

export default QuestionPrime
