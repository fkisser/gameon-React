import styled, { keyframes } from "styled-components";

const brighten = keyframes`
  100% {
    background-color: var(--dark-blue);
    box-shadow: none;
  }
`;
export const MiniLoaderStyled = styled.div`
  display: flex;
  transition: all 0.4s;
  div {
    margin-left: 0.8rem;
    background-color: var(--mid-blue);
    box-shadow: 0px 2px 2px var(--light-blue);
    border-radius: 3em;
    height: 1rem;
    width: 2rem;
  }
  .load1{
    animation: ${brighten} 1.5s infinite;
  }
  .load2{
    animation: ${brighten} 1.5s infinite;
    animation-delay: .3s;
  }
  .load3{
    animation: ${brighten} 1.5s infinite;
    animation-delay: .6s;
  }

`;

const pathTriangle = keyframes`
  33% {
    stroke-dashoffset: 74;
  }

  66% {
    stroke-dashoffset: 147;
  }

  100% {
    stroke-dashoffset: 221;
  }
`;
const dotTriangle = keyframes`
  33% {
    transform: translate(0, 0);
  }

  66% {
    transform: translate(10px, -18px);
  }

  100% {
    transform: translate(-10px, -18px);
  }
`;
const pathRect = keyframes`
  25% {
    stroke-dashoffset: 64;
  }

  50% {
    stroke-dashoffset: 128;
  }

  75% {
    stroke-dashoffset: 192;
  }

  100% {
    stroke-dashoffset: 256;
  }
`;
const dotRect = keyframes`
  25% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(18px, -18px);
  }

  75% {
    transform: translate(0, -36px);
  }

  100% {
    transform: translate(-18px, -18px);
  }
`;
const pathCircle = keyframes`
  25% {
    stroke-dashoffset: 125;
  }

  50% {
    stroke-dashoffset: 175;
  }

  75% {
    stroke-dashoffset: 225;
  }

  100% {
    stroke-dashoffset: 275;
  }
`;

export const GeometryLoaderStyled = styled.div`
  --path: var(--selective-yellow);
  --duration: 3s;
  width: 44px;
  height: 44px;
  position: relative;
  
  svg{
    display: block;
    width: 100%;
    height: 100%;
    rect, polygon, circle {
      fill: none;
      stroke: var(--path);
      stroke-width: 10px;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  }
  svg polygon {
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;
    animation: ${pathTriangle} var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
    animation-delay: .3s;
  }
  svg rect {
    stroke-dasharray: 192 64 192 64;
    stroke-dashoffset: 0;
    animation: ${pathRect} 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }
  svg circle {
    stroke-dasharray: 150 50 150 50;
    stroke-dashoffset: 75;
    animation: ${pathCircle} var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
    animation-delay: .5s;
  }
  .triangle {
    width: 48px;
  }
  
  display: inline-block;
  margin: 4rem 1rem;
`;