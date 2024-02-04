//button with label submit, fixed to bottom of screen

// Path: src/Components/SubmitButton.tsx
// Compare this snippet from src/Components/AnswerOption.tsx:
import styled from "styled-components";

const Submit = styled.button`
  align-items: center;
  background-color: #a8a8a8;
  color: #000000;
  border: #494949 solid 3px;
  padding: 12px 75px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 24px;

    &:hover {
        box-shadow: 0 0 10px 0 #9f9f9f;
    }
`;

const SubmitButton = ({buttonText}: {buttonText: string}) => {
    return (
        <Submit>
        {buttonText}
        </Submit>
    );
}

export default SubmitButton;

