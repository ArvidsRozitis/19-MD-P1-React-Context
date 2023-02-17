import styled from "styled-components";
type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
  return <StyledTestButton onClick={onClick}>{text}</StyledTestButton>;
};

export default Button;

const StyledTestButton = styled.button`
  all: unset;
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: gray;
  color: white;
  border-radius: 3px;
  font-size: 1rem;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #84f080;
  }
`;
