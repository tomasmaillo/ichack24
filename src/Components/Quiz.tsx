import { useState } from "react";
import AnswerOption from "./AnswerOption"; // Make sure to adjust the path accordingly
import styled from "styled-components";

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuestionComponent = (props:{ questionData: { question: string; choices: string[] } }) => {
  const { question, choices } = props.questionData;

  return (
    <QuestionContainer>
      <Question style={{color: 'black'}}>{question}</Question>
      {choices.map((choice, index) => (
        <AnswerOption key={index + 1} option={(index + 1).toString()} answer={choice} />
      ))}
    </QuestionContainer>
  );
};

const QuizComponent = (props: { quizData:{ question: string; choices: string[] }[] }) => {
  return (
    <div>
      {props.quizData.map((question, index) => (
        <QuestionComponent key={index} questionData={question} />
      ))}
    </div>
  );
};

export default QuizComponent;
