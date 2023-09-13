// As we use react hooks here with the /app (not /pages from pre NEXT.js 13)
"use client";

// React hooks and other imports
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import getData from "./utils/getData.jsx";

// Importing styled components for UI layout and styling
import {
    GlobalStyle,
    Container,
    Header
} from '../styles/globals.jsx';

import {
    ProjectBox,
    FiltersContainer,
    FilterDropdown,
    ProjectLink
} from '../styles/projectList.jsx';

// Main component representing the Home page
export default function Home() {
    // State variables for storing data and filters
    const [data, setData] = useState({ projects: [] });
    const [countryFilter, setCountryFilter] = useState('');
    const [animalFilter, setAnimalFilter] = useState('');
    const [uniqueCountries, setUniqueCountries] = useState([]);
    const [uniqueAnimals, setUniqueAnimals] = useState([]);
    const [isReady, setIsReady] = useState(false);

    // Effect hook to fetch data on component mount
    useEffect(() => {
        async function fetchData() {
            const result = await getData(); // Fetch data from API
            setData(result);

            // Extract unique countries and animals from data for filter dropdowns
            const countries = [...new Set(result.projects.map(project => project.country))];
            const animals = [...new Set(result.projects.flatMap(project => project.animals))];

            setUniqueCountries(countries);
            setUniqueAnimals(animals);
            setIsReady(true); // Indicate that data is loaded
        }
        fetchData();
    }, []);

    // Loading state render
    if (!isReady) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <BeatLoader color="#FF6347" />
            </div>
        );
    }

    // Main render after data is loaded
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>WVS Projects</Header>
                <h1>Filter</h1>
                <FiltersContainer>
                    {/* Country filter dropdown */}
                    <label>
                        Country:
                        <FilterDropdown value={countryFilter} onChange={e => setCountryFilter(e.target.value)}>
                            <option value="">All</option>
                            {uniqueCountries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </FilterDropdown>
                    </label>

                    {/* Animal filter dropdown */}
                    <label>
                        Animal:
                        <FilterDropdown value={animalFilter} onChange={e => setAnimalFilter(e.target.value)}>
                            <option value="">All</option>
                            {uniqueAnimals.map(animal => (
                                <option key={animal} value={animal}>{animal}</option>
                            ))}
                        </FilterDropdown>
                    </label>
                </FiltersContainer>

                {/* Render project list based on filters */}
                {data.projects
                    .filter(project => {
                        if (countryFilter && project.country !== countryFilter) return false;
                        if (animalFilter && !project.animals.includes(animalFilter)) return false;
                        return true;
                    })
                    .map(project => (
                        <ProjectBox key={project.id}>
                            <ProjectLink href={`./${project.id}`}>
                                {project.name}
                            </ProjectLink>
                        </ProjectBox>
                    ))}
            </Container>
        </>
    );
}