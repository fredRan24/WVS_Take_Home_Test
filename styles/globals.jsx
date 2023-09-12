import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: inherit;       // The link will use the text color of its parent
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

// 1. Container
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #FFC085;  
    width: 100%;  // Ensure container takes up full width
    max-width: 100vw;  // Ensure container doesn't overflow viewport
    border-radius: 10px;
    box-sizing: border-box;  // Ensures padding doesn't increase total width
    gap: 1rem;
`;

// 2. Header
export const Header = styled.h1`
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 2rem;
    margin-top: 0;

    ${props => props.smaller && `
        font-size: 1.5em;
    `}
`;