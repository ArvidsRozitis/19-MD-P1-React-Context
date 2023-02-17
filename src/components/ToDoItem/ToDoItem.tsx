import styled from "styled-components";
import Button from "../Button/Button";
import { TodoItemType } from "../ToDoList/ToDoList";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ToDoItem = ({ _id, title, content, date, isDone }: TodoItemType) => {
  const queryClient = useQueryClient();

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
        <input type="checkbox" />
      </TopWrapper>
      <p>{content}</p>
      <StyledBottomWrapper>
        <time>{date}</time>
        <Button onClick={() => deleteHandler()} text="delete" />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  border: 1px solid white;
  background-color: #2b2b2b;
  &:hover {
    background-color: #3d3d3d;
    border: 1px solid white;
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
`

export default ToDoItem;

const deleteComment = (commentId: string) => {
  return axios.delete(`http://localhost:3004/tasks/delete/${commentId}`);
};
