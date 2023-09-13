// Imports
import styled from 'styled-components';
import Link from "next/link"

// Styled Components
// Component for displaying a distinct project box
export const ProjectBox = styled.div`
    display: block;
    width: calc(100% - 4rem);
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    background-color: #F5A623;
    color: #fff;
    text-align: left;
    border-radius: 5px;
    border: 1px solid black;

    &:hover {
        background-color: #FFB451;
    }
`;

// Container for filter dropdowns or buttons to help refine project search or view
export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

// Dropdown component for selecting filters
export const FilterDropdown = styled.select`
    padding: 0.3rem 0.5rem;
    margin-left: 8px;
    border-radius: 5px;
    background-color: #F5A623;
    color: #000;
    border: 1px solid black;

    &:hover {
        background-color: #FFB451;
    }

    &:focus {
        outline: none;
        border-color: black;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
`;

// Link component specifically styled for projects, ensuring consistent appearance
export const ProjectLink = styled(Link)`
    display: inline-block;
    border-radius: 5px;
    color: black;
    text-align: left;
    text-decoration: none;
`;
