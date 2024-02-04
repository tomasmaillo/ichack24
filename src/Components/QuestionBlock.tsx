//block consisting of one question and 4 options

import styled from "styled-components";
import AnswerOption from "../Components/AnswerOption"
import Question from "../Components/Question"

const QuestionBlock = () => {
  return (
    <div>
      <Question/>
      <div style={{ marginBottom: '12px' }}><AnswerOption option="1" answer={'I dont know'}/></div>
      <div style={{ marginBottom: '12px' }}><AnswerOption option="2" answer={'Ask your Mum'}/></div>
      <div style={{ marginBottom: '12px' }}><AnswerOption option="3" answer={'Leave me alone'}/></div>
      <div style={{ marginBottom: '30px' }}><AnswerOption option="4" answer={'AAAAaaaaaaAAAAAAA'}/></div>
    </div>
  )
}

export default QuestionBlock