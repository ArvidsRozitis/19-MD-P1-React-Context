import styled from "styled-components";
import Button from "../Button/Button";
import { TodoItemType } from "../ToDoList/ToDoList";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ToDoItem = ({ _id, title, content, date, isDone }: TodoItemType) => {
  const [taskIsDone, setTaskIsDone] = useState(isDone);
  const queryClient = useQueryClient();

  const statusChangeHandler = () => {
    setTaskIsDone(!taskIsDone);
  };

  const deleteHandler = () => {
    deleteTaskMutation.mutate(_id);
  };
  const deleteTaskMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  return (
    <StyledContainer>
      <TopWrapper>
        <StyledTaskHeading>{title}</StyledTaskHeading>
        <input type="checkbox" onChange={() => statusChangeHandler()} />
      </TopWrapper>
      <p>{content}</p>
      <StyledBottomWrapper>
        <time>{date}</time>
        <Button onClick={() => deleteHandler()} text="delete" />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default ToDoItem;

const deleteComment = (commentId: string) => {
  return axios.delete(`http://localhost:3004/tasks/delete/${commentId}`);
};
// const line = 'line-through'
// const textColor = ' rgba(0,0,0,0.4);'
// const lineColor = ' rgba(0,0,0,0.4);'
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: none;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  border: 1px solid white;
  background-color: #2b2b2b;
  text-decoration: white;
  
  &:hover {
    background-color: #3d3d3d;
    border: 1px solid grey;
  }
  
`;


const StyledTaskHeading = styled.h3`
  margin: 0;
`;
const StyledBottomWrapper = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
