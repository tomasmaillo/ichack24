import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomAnswer = styled.button`
  color: #000000;
  border: solid 3px;
  padding: 14px 0px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;

    &:hover {
        box-shadow: 0 0 10px 0 #9f9f9f;
    }
`;

const AnswerOption = ({ option, answer }: { option: string, answer:string}) => {
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
    <CustomAnswer style={{ marginBottom: "10px", display:"flex", backgroundColor: color , borderColor: borderColor}}>
        <div style={{marginLeft:'10px'}}>{answer}</div>
        
    </CustomAnswer>
  );
};

export default AnswerOption;
