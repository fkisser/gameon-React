import styled from "styled-components";

export const UserProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  height: calc(100vh - 16rem);
  width: 100%;
  max-width: 1500px;
  /* @media (max-width: 1024px) {
    height: 100%;
  } */
`;
export const UserDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: .1rem solid white;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  @media (max-width: 576px) {
    h1{
      font-size: x-large;
    }
    h2{
      font-size: large;
    }
  }
`;
export const UserOrdersStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: 1rem;
  background-color: var(--light-blue);
  padding: .5rem;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: 1rem;
  border: ${props => {
    if (props.status === "pending") return ".3rem solid var(--selective-yellow)";
    if (props.status === "success") return ".3rem solid #08B23F";
  }};
  background-color: var(--mid-blue);
  padding: .5rem;
  width: 100%;
  ul{
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
  p {
    font-size: small;
  }
  button:hover{
    &::before{
      content: "Cancelar orden";
      color: var(--dark-blue);
      animation: all ease .3s;
    };
  }
  span{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column-reverse;
      gap: .5rem;
    }
  }
`;

export const OrderItemStyled = styled.li`
  &::before{
    content: "•";
    color: var(--selective-yellow);
  };
  display: flex;
  align-items: center;
  gap: .5rem;
  div{
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border: .1rem solid white;
    padding: .3rem;
    width: 100%;
  }

  /*HACER ANTES QUE EL ORDER STYLED*/
`;