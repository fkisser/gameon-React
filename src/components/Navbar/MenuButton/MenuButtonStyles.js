import { styled } from "styled-components";

export const MenuContainerStyled = styled.div`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  @media(max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;