import AnswerOption from "../Components/AnswerOption"
import Question from "../Components/Question"
import StickyFooter from "../Components/StickyFooter"
import QuestionBlock from "../Components/QuestionBlock"

const Home = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <p></p>
      <div style={{ marginBottom: '10px' }}><QuestionBlock/></div>
      <div><StickyFooter/></div>
    </div>
  )
}

export default Home
