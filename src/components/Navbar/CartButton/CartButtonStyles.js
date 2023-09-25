import { styled } from "styled-components";

export const CartContainerStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: var(--light-blue);
  font-size: 1.8rem;
  cursor: pointer;
`;

export const CartBubbleStyled = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .7rem;
  font-weight: bold;
  color: var(--dark-blue);
  background-color: var(--selective-yellow);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;