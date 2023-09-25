import { styled } from "styled-components";
import FooterBg from "./img/footer.jpg"

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 2rem 0;
  width: 100%;
  gap: 2rem;
  background: linear-gradient(to bottom, rgba(2, 48, 71, 0.5), var(--dark-blue)), url(${FooterBg});
  background-position:center;
  background-size: cover;
`;

export const FooterLinkStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  font-size: xx-large;
  :hover{
    color: var(--selective-yellow);
  }
  @media (max-width: 576px) {
    gap: 1.5rem;
  }
`;