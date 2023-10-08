import styled from "styled-components";

export const ErrorStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 15rem);
  padding: 3rem;
  aspect-ratio: 3/4;
  gap: 1rem;
  > h4 {
    text-align: center;
  }
  span {
    color: var(--selective-yellow);
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    > h4 {
      text-align: left;
      width: 30rem;
      font-size: x-large;
    }
  }
  @media (min-width: 1500px) {
    > h4 {
      font-size: xx-large;
    }
  }
`;