import styled from "styled-components";
import Button from "../Button/Button";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type TodoItemProps = {
  title: string;
  content: string;
  isDone: boolean;
};

const AddToDoForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const { mutate } = useAddTask();
  
  const submitHandler = () => {
    const newTask = {
      title: titleInput,
      content: contentInput,
      isDone: false,
    };
    mutate(newTask);
    setContentInput("");
    setTitleInput("");
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
        }}
      >
        <StyledInputLabel>
          Title for the task
          <input
            onChange={(e) => setTitleInput(e.target.value)}
            value={titleInput}
            required
          />
        </StyledInputLabel>
        <StyledInputLabel>
          what need to be done
          <input
            onChange={(e) => setContentInput(e.target.value)}
            value={contentInput}
            required
          />
        </StyledInputLabel>
        <Button onClick={() => submitHandler} text="+" />
      </StyledFrom>
    </StyledFormContainer>
  );
};

export default AddToDoForm;

const addTask = (newTask: TodoItemProps) => {
  return axios
    .post(`http://localhost:3004/tasks/post`, { newTask })
    .then((res) => {
      console.log("tasks tika pievienots", res);
    });
};

const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

//==================style
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
