import styled from "styled-components"

const DialogStyled = styled.div`
  position: fixed;
  z-index: 99;
  -webkit-box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  -moz-box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  box-shadow: 0 0 1rem 0 rgba(2, 48, 71, 1);
  text-align: center;
  display: flex;
  bottom: ${props => (props.open ? "-.3rem" : "-100%")};
  transition: bottom 0.3s linear;
  left: 1rem;
  right: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: .3rem;
`

export const InfoStyled = styled(DialogStyled)`
  height: 5rem;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: larger;
  font-weight: bolder;
  padding: 0 .5rem;
  background-color: var(--light-blue);
  color: var(--dark-blue);
  @media (max-width: 576px) {
      font-size: medium;
  }
`
export const ConfirmStyled = styled(DialogStyled)`
  
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--dark-blue);
  color: white;
  -webkit-box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .6);
  -moz-box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .6);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .6);
  .confirmBtns {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    button{
      width: 5rem;
    }
    .yes {
      color: white;
      background-color: transparent;
      border: .2rem solid white;
    }
    .no {
      color: white;
      background-color: var(--mid-blue);
    }
  }
`

