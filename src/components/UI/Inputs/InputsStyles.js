import { styled } from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
`;
export const InputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--light-blue);
  border-color: ${({ error }) => (error ? "red" : "var(--light-blue)")};
  border-radius: 5px;
  padding: 5px;
  transition: all ease .3s;
  font-family: var(--body-font);
  background-color: transparent;
  color: var(--selective-yellow);
  &:hover, &:focus{
    border: none;
    border-bottom: 2px solid var(--selective-yellow);
    border-color: ${({ error }) => (error ? "red" : "var(--selective-yellow)")};
    background-color: white;
    color: var(--dark-blue);
    transition: all ease .3s;
  }
  &:hover::placeholder, &:focus::placeholder{
    color: var(--dark-blue);
  }
  &::placeholder{
    color: var(--light-blue);
    font-weight: 500;
  }
`;
export const TextAreaStyled = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--light-blue);
  border-color: ${({ error }) => (error ? "red" : "var(--light-blue)")};
  border-radius: 5px;
  padding: 5px;
  transition: all ease .3s;
  font-family: var(--body-font);
  background-color: transparent;
  color: var(--selective-yellow);
  resize: none;
  &:hover, &:focus{
    border: none;
    border-bottom: 2px solid var(--selective-yellow);
    border-color: ${({ error }) => (error ? "red" : "var(--selective-yellow)")};
    background-color: white;
    color: var(--dark-blue);
    transition: all ease .3s;
  }
  &:hover::placeholder, &:focus::placeholder{
    color: var(--dark-blue);
  }
  &::placeholder{
    color: var(--light-blue);
    font-weight: 500;
  }
`;
export const ErrorStyled = styled.p`
  position: absolute;
  bottom: -.8rem;
  padding-left: .5rem;
  color: var(--selective-yellow);
  font-size: x-small;
`;

