import { styled } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .4rem;
  outline: none;
  border: none;
  border-radius: ${(props) => (props.radius)};
  background-color: var(--light-blue);
  color: var(--dark-blue);
  font-family: var(--title-font);
  font-size: large;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  &:hover {
    background-color: var(--selective-yellow);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
`;