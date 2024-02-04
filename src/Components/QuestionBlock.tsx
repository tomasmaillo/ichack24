//block consisting of one question and 4 options

import styled from "styled-components";
import AnswerOption from "../Components/AnswerOption"
import Question from "../Components/Question"

const QuestionBlock = () => {
  return (
    <div>
      <Question/>
      <div style={{ marginBottom: '10px' }}><AnswerOption option="1" /></div>
      <div style={{ marginBottom: '10px' }}><AnswerOption option="2"/></div>
      <div style={{ marginBottom: '10px' }}><AnswerOption option="3"/></div>
      <div><AnswerOption option="4"/></div>
    </div>
  )
}

export default QuestionBlock