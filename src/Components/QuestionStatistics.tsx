import Graph from './Graph'

const QuestionStatistics = ({
  question,
  answers,
  correctAnswer,
}: {
  question: string
  answers: {
    answerText: string
    count: number
  }[]
  correctAnswer: string
}) => {
  const COLORS = ['#D1A0EE', '#1766FF', '#51DE4E', '#FFC267']

  return (
    <div>
      <h4>{question}</h4>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {answers.map((entry, index) => (
            <div
              key={`legend-${index}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: COLORS[index % COLORS.length],
                  border: '4px solid #00000018',
                  borderRadius: '5px',
                  marginRight: '5px',
                }}></div>
              <span>{entry.answerText}</span>
            </div>
          ))}
        </div>
        <Graph dynamicData={answers} />
      </div>
    </div>
  )
}

export default QuestionStatistics
