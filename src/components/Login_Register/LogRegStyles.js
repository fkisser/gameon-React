import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 15rem);
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 3rem 0;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const PStyled = styled.p`
  color: var(--selective-yellow);
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease;
  }
`;