import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  gap: 4rem;
  @media (max-width: 992px) {
   flex-direction: column;   
  }
  @media(max-width: 768px) {
    gap: 2rem;
  }
`;

export const HeroImgStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 350px;

  > span {
    display: flex;
    gap: 1rem;
    font-size: 3rem;
  }
  @media(max-width: 768px) {
    width: 250px;
    > span {
      gap: .5rem;
      font-size: 2rem;
    }
  }
  @media(max-width: 576px) {
    width: 200px;
    > span {
      gap: .5rem;
      font-size: 1.5rem;
    }
  }
`

export const LogoHeroStyled = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 100%;
  }
  
`;

export const HeroTextStyled = styled.div`
  font-weight: 400;
  text-align: left;
  max-width: 40%;
  font-size: 3rem;
  span {
    color: var(--selective-yellow);
    font-family: var(--title-font)
  }
  @media (max-width: 992px) {
    text-align: center;
    max-width: 80%;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;