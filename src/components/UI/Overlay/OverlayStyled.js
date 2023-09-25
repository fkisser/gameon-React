import { styled } from "styled-components";

export const OverlayStyled = styled.div`
  display: ${props => (props.open ? "flex" : "none")};
  position: fixed;
  top: ${props => (props.modal ? "0" : "70px")};
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${props => (props.modal ? "99" : "0")};
  background: ${props => (props.modal ? "transparent" : "rgba(114, 179, 232, .3)")};
  backdrop-filter: ${props => (props.modal ? "none" : "blur(.5rem)")};
  -webkit-backdrop-filter: ${props => (props.modal ? "none" : "blur(.5rem)")};
`;