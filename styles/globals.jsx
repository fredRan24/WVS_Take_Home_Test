//Imports
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Global styles to be applied throughout the app
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

// Main container for layout and styling 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #FFC085;
    width: 100%;
    max-width: 100vw;
    border-radius: 10px;
    box-sizing: border-box;
    gap: 1rem;
`;

// Styled header component for titles and headers
export const Header = styled.h1`
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 2rem;
    margin-top: 0;

    ${props => props.smaller && `
        font-size: 1.5em;
    `}
`;
