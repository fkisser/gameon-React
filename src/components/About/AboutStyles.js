import { styled } from "styled-components";

export const AboutContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;
export const AboutContentStyled = styled.div`
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
  border: .3rem solid var(--light-blue);
  width: 60%;
  max-width: 1350px;
  aspect-ratio: 4/3;
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 16/9;
    width: 100%;
    img {
      object-position: 50% 30%;
    }
  }
`;
export const TxtContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: x-large;
  gap: 1rem;
  text-align: left;
  width: 50%;
  span {
    color: var(--dark-blue);
    background-color: var(--selective-yellow);
    padding: 2px 1px;
    transform: skew(35deg);
    font-weight: 500;
  }

  @media (max-width: 1200px){
    font-size: large;
  }
  @media (max-width: 992px){
    font-size: medium;
    p:nth-child(2){
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    align-items: center;
    text-align:center;
    p:nth-child(3){
      display: none;
    }
  }
`;

