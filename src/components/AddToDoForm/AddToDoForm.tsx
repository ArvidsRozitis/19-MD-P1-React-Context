import styled from "styled-components";
import Button from "../Button/Button";
import { useState } from "react";

const AddToDoForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const submitHandler = () => {
    console.log("submits notika");
  };

  return (
    <StyledFormContainer>
      <span>{titleInput}</span>
      <span>{contentInput}</span>
      <StyledFormHeading>add to do</StyledFormHeading>
      <StyledFrom
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
          setContentInput("");
          setTitleInput("");
        }}
      >
        <StyledInputLabel>
          Title for the task
          <input
            onChange={(e) => setContentInput(e.target.value)}
            value={titleInput}
            required
          />
        </StyledInputLabel>
        <StyledInputLabel>
          what need to be done
          <input
            onChange={(e) => setTitleInput(e.target.value)}
            value={contentInput}
            required
          />
        </StyledInputLabel>
        <Button onClick={() => submitHandler} text="+" />
      </StyledFrom>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
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
