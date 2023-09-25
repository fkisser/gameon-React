import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CategoriesWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const CategoriesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  -webkit-user-select: none;
  user-select: none;
  @media(max-width: 768px) {
    justify-content: center;
  }
`;

export const CategoryCardStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 1rem;
  color: var(--dark-blue);
  background-color: ${({ selected }) =>
    selected ? "var(--selective-yellow)" : "var(--light-blue)"};
  border-radius: 15px;
  cursor: pointer;
  h4 {
    font-size: .8rem;
  }
  @media(max-width: 576px) {
    padding: .5rem;
  }
`;