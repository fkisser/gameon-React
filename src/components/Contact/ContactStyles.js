import { Form } from "formik";
import { styled } from "styled-components";

export const ContactContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;
export const ContactContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;
export const ImgContainerStyled = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: .3rem;
  border: .3rem solid var(--selective-yellow);
  width: 50%;
  max-width: 1350px;
  aspect-ratio: 4/3;
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: .3rem;
  }
  
  @media (max-width: 992px) {
    aspect-ratio: 1;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FormContainerStyled = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1300px) {
      gap: 1rem;
  }
  @media (max-width: 576px) {
    align-items: center;
  }
  button {
    padding: .5rem 1.5rem;
    @media(max-width: 576px) {
      padding: .5rem 3rem;
    }
  }
`;
