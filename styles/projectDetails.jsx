//imports
import styled from 'styled-components';

//Styled Components
export const ImageGallery = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;  // Provides space between images
justify-content: center; // Center the images if there are fewer than would fit in a row
`;

export const StyledImage = styled.img`
max-width: 300px;
max-height: 200px;  // Set this as per your needs
width: auto;  // Ensure width scales
height: auto; // Ensure the aspect ratio
border: 1px solid black; 
border-radius: 8px;  
box-shadow: 2px 2px 12px;
`;

export const SectionBox = styled.div`
  padding: 1rem;
  padding-top: 10px;
  background-color: #F5A623;  // A darker shade of orange for contrast.
  border: 2px solid black;  // Bold black border
  border-radius: 5px;
  margin: 1rem 0;
`;

export const TripBox = styled.div`
  padding: 0.5rem;  // Reduced padding for more compact look.
  background-color: #FFC085;
  border-radius: 5px;
  border: 2px solid black;  // Bold black border
  margin: 0.5rem 0;  // Reduced margin for more compact look.
`;

export const StyledList = styled.ul`
  list-style-type: none;  // removes bullet points
  padding: 0;  // removes any default padding
  margin: 0;  // removes any default margin
`;