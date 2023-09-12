//imports
import styled from 'styled-components';
import Link from "next/link"

//Styled Components
export const ProjectBox = styled.div`
    display: block;
    width: calc(100% - 4rem);  // Adjust the width to account for padding (2rem on each side).
    box-sizing: border-box;  // This ensures padding and width is included in the total width
    padding: 0.5rem 1rem;
    background-color: #F5A623;  // Darker shade of orange for each project box.
    color: #fff;
    text-align: left;
    border-radius: 5px;
    border: 1px solid black;  // Black outline for the boxes.

    &:hover {
        background-color: #FFB451;  // Lighter than the box but darker than the container's color on hover.
    }
`;

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const FilterDropdown = styled.select`
    padding: 0.3rem 0.5rem; // Reduced vertical padding to make the box shorter
    margin-left: 8px; // Move it away a bit from the text to its left
    border-radius: 5px;
    background-color: #F5A623; // Darker orange for the background
    color: #000; // Changed text to black
    border: 1px solid black; // Black outline for the box

    &:hover {
        background-color: #FFB451; // Medium orange on hover
    }

    &:focus {
        outline: none;
        border-color: black; // Keep the black border on focus
        box-shadow: 0 0 5px rgba(0,0,0,0.2); // Optional: you can add a subtle shadow for an additional focus indicator if desired
    }
`;

export const ProjectLink = styled(Link)`
    display: inline-block;
    border-radius: 5px;   
    color: black;
    text-align: left;    
    text-decoration: none;
`;