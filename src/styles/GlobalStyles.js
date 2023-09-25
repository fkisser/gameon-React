import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /*********************Custom Properties*************************/
  :root {
    --light-blue: #72B3E8;
    --mid-blue: #026191;
    --dark-blue: #023047;
    --selective-yellow: #ffb703;
    --body-font: 'Roboto', sans-serif;
    --title-font: 'Staatliches', cursive;
  }
  /*********************Reset Styles*************************/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
  }
  html{
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
  }
  body{
    background: var(--dark-blue);
    color: white;
    font-family: var(--body-font), sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: white;
  }
  li{
    list-style: none;
  }
`;