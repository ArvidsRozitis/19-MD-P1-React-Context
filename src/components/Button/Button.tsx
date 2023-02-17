import styled from "styled-components";
type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <div>
      <StyledTestButton onClick={onClick}>{text}</StyledTestButton>
    </div>
  );
};

export default Button;

const StyledTestButton = styled.button`
  all: unset;
  display: flex;
  width: 100%;
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
