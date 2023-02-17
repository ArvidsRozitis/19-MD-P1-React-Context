import styled from "styled-components";
import Button from "../Button/Button";
import { useState } from "react";

const AddToDoForm = () => {
  const [input, setInput] = useState("");
  const submitHandler = () => {
    console.log("asubmits notika");
  };

  return (
    <StyledFormContainer>
      <span>{input}</span>
      <StyledFormHeading>add to do</StyledFormHeading>
      <StyledFrom
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
          setInput("");
        }}
      >
        <StyledInputLabel>
          add task
          <input onChange={(e) => setInput(e.target.value)} value={input} />
        </StyledInputLabel>
        <Button onClick={() => submitHandler} text="+" />
      </StyledFrom>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFrom = styled.form`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
const StyledInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledFormHeading = styled.h2`
  font-size: 1.25rem;
  text-transform: uppercase;
`;

export default AddToDoForm;
