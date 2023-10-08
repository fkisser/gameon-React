import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ProductsSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: .5rem;
  padding: .5rem;
  background-color: var(--light-blue);
  border-radius: .3rem;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
`;

export const ProductCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(33% - 1rem);
  gap: .5rem;
  background-color: var(--dark-blue);
  padding: .5rem;
  border-radius: .3rem;
  position: relative;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 30%;
    height: fit-content;
    border-radius: .3rem;
    overflow: hidden;
  }
  img {
    width: 9rem;
    height: 9rem;
    object-fit: scale-down;
    object-position: center;
  }
  .text{
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: .5rem;
    justify-content: center;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  h4, .price {
    color: var(--selective-yellow);
    font-size: large;
  }
  h4 {
    font-family: var(--title-font);
    letter-spacing: 1px;
  }
  .price {
    font-weight: 800;
    text-align: right;
  }
  @media (max-width: 1500px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 992px) {
    flex-direction: column;
    width: calc(50% - .5rem);
    height: 250px;
    .image{
      width: 100%;

    }
    img {
      width: 6rem;
      height: 6rem;
    }
    .text{
      width: 100%;
      text-align: center;
    }
    .price {
      font-weight: 800;
      text-align: center;
    }
  }
  @media(max-width: 768px) {
    width: 75%;
    height: fit-content;
  }
  @media(max-width: 576px) {
    width: 100%;
  }
`;

export const TxtContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  gap: 1rem;
  text-align: left;
  width: 50%;
  height: calc(100vh - 23rem);
  span {
    color: var(--dark-blue);
    background-color: var(--selective-yellow);
    padding: 2px 1px;
    transform: skew(35deg);
    font-weight: 500;
  }

  @media (max-width: 1200px){
    font-size: large;
    height: auto;
  }
  @media (max-width: 992px){
    font-size: medium;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    align-items: center;
    text-align:center;
  }
`;

