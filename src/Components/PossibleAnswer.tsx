import styled from 'styled-components'

const StyledQuestion = styled.button`
  margin: 16px 0;

  padding: 16px;
  background-image: url('./letters.png');
  background-color: #d1a0ee;
  border: #bf5ee1 3px solid;

  font-size: 18px;
  font-weight: bold;
  color: #111;
`

const PossibleAnswer = (props: {
  answer: string
  backgroundColor: string
  borderColor: string
  onClick: () => void
}) => {
  return (
    <StyledQuestion
      onClick={() => props.onClick()}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
      }}>
      {props.answer}
    </StyledQuestion>
  )
}

export default PossibleAnswer
