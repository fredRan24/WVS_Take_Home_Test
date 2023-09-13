// Imports
import styled from 'styled-components';

// Styled Components
// Component for displaying images in a gallery layout
export const ImageGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

// Component for displaying a styled image
export const StyledImage = styled.img`
    max-width: 300px;
    max-height: 200px;
    width: auto;
    height: auto;
    border: 1px solid black; 
    border-radius: 8px;
    box-shadow: 2px 2px 12px;
`;

// Component for a section of content with a distinct background and padding
export const SectionBox = styled.div`
    padding: 1rem;
    padding-top: 10px;
    background-color: #F5A623;
    border: 2px solid black;
    border-radius: 5px;
    margin: 1rem 0;
`;

// Component for displaying trip details in a box format
export const TripBox = styled.div`
    padding: 0.5rem;
    background-color: #FFC085;
    border-radius: 5px;
    border: 2px solid black;
    margin: 0.5rem 0;
`;

// Component for displaying a list without default bullet points or padding
export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;
