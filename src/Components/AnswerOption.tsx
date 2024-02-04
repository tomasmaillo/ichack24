import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomAnswer = styled.button`
  align-items: center;
  margin: 0 auto;
  background-color: #1766ff;
  color: #000000;
  border: #1766ff solid 3px;
  padding: 14px 200px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;

    &:hover {
        box-shadow: 0 0 10px 0 #9f9f9f;
    }
`;

const AnswerOption = ({ option }: { option: string }) => {
  const [color, setColor] = useState("");
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    if (option === "1") {
      setColor("#D1A0EE");
      setBorderColor("#BF5EE1");
    } else if (option === "2") {
      setColor("#6398FF");
      setBorderColor("#1766FF");
    } else if (option === "3") {
      setColor("#51DE4E");
      setBorderColor("#14A011");
    } else {
      setColor("#FFC267");
      setBorderColor("#F2A42E");
      }
  }, [option]);


  return (
    <CustomAnswer style={{ backgroundColor: color , borderColor: borderColor}}>
        I don't know man
    </CustomAnswer>
  );
};

export default AnswerOption;
