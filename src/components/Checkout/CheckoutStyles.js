import styled from "styled-components";
import { TotalContainerStyled } from "../Navbar/Cart/CartStyles";

export const CheckoutStyled = styled.section`
  display: flex;
  width: 100%;
  max-width: 2000px;
  justify-content: space-between;
  padding: 2rem;
  gap: 1rem;
  max-height: calc(100vh - 4rem);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: none;
  }
`;

export const DataStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  form{
    height: 100%;
    justify-content: space-between;
  }
  .group{
    display: flex;
    width: 100%;
    gap: 1rem;
  }
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

export const ItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

export const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 20rem;
    & > div {
      width: 100%;
    }
  }
`;

export const TotalStyled = styled(TotalContainerStyled)`
  color: var(--selective-yellow);
`;

export const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 15rem);
  text-align: center;
  padding: 1rem;
  gap: 1rem;
  .group{
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 576px) {
        font-size: small;
    }
    > a{
      width: fit-content;
    }
  }
`;