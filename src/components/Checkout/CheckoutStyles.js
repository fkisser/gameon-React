import styled from "styled-components";
import { CartItemStyled, TotalContainerStyled } from "../Navbar/Cart/CartStyles";

export const CheckoutStyled = styled.section`
  display: flex;
  width: 100%;
  max-width: 2000px;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
  height: calc(100vh - 16rem);
  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DataStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  /* height: 100%; */
  width: 50%;
  max-width: 1000px;
  form{
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 3.7rem;
    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
  .group{
    display: flex;
    width: 100%;
    gap: 1rem;
  }
  @media (max-width: 1300px) {
      gap: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
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
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  align-items: center;
  background-color: var(--mid-blue);
  padding: .5rem;
  /* &::-webkit-scrollbar {
    display: none;
  } */
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

export const SubtotalStyled = styled(TotalContainerStyled)`
  color: white;
  border: none;
  font-size: larger;
`;
export const TotalStyled = styled(TotalContainerStyled)`
  color: var(--selective-yellow);
  border: none;
  border-bottom: solid .2rem var(--light-blue);
  font-size: larger;
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
  @media (min-width: 1200px) {
        font-size: xx-large;
  }
`;
export const SuccessStyled = styled(ErrorStyled)`
  color: var('--selective-yellow');
`;

export const ItemStyled = styled(CartItemStyled)`
  .item-content{
    height: 7.5rem;
  .item-img{
    @media (max-width: 350px) {
      display: none;
    }
  }
  .item-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
          justify-content: space-around;
      }
      
      .item-title {
        font-size: medium;
        width: 100%;
        @media (max-width: 576px) {
            font-size: small;
        }
      }
      .item-description{
        font-size: medium;
        @media (max-width: 900px) {
            font-size: small;
        }
      }
      .item-numbers{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      .item-price {
        display: block;
        font-weight: 900;
        font-size: large;
        color: var(--dark-blue);
        border: none;
        padding: 0;
        width: max-content;
        @media (max-width: 400px) {
            font-size: medium;
            width: max-content;
        }
      }
      .item-quantity {
        font-size: small;
      }
    }
    }
`
export const ButtonsContainerStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;