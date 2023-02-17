import styled from "styled-components";
import Button from "../Button/Button";

const ToDoItem = () => {
    const deleteHandler = () => {
        console.log('delete notika')
    }
  return (
    <StyledContainer>
      <StyledTaskHeading>Title</StyledTaskHeading>
      <p>content content content content content content content</p>
      <StyledBottomWrapper>
        <time>20/10/2032</time>
        <Button onClick={() => deleteHandler()} text='delete'/>
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

export default ToDoItem;
