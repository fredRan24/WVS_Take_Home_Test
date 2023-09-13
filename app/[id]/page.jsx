//As we use react hooks here with the /app (not /pages from pre NEXT.js 13) 
"use client"

// Import utility functions for data fetching and formatting
import getProject from "@app/utils/getProject.jsx";
import formatDate from "@app/utils/formatDate.jsx";
import { capitalizeFirstLetter } from "@app/utils/capitaliseFirst.jsx";

// React hooks and other imports
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

// Importing styled components for UI layout and styling
import {
    GlobalStyle,
    Container,
    Header,
    
} from '../../styles/globals.jsx';
import {
    ImageGallery,
    StyledImage,
    SectionBox,
    TripBox,
    StyledList
} from '../../styles/projectDetails.jsx';

// Main component representing the detailed project page
export default function ProjectPage({ params }) {
    // State variable for storing the specific project details
    const [project, setProject] = useState(null);
    // Loading state
    const [isReady, setIsReady] = useState(false);
    // Extract project ID from provided params
    const id = params.id;

    // Effect hook to fetch the specific project data based on the ID
    useEffect(() => {
        async function fetchData() {
            const projectData = await getProject({ id });
            setProject(projectData);
            setIsReady(true);
        }

        fetchData();
    }, [id]);

    // Loading state render
    if (!isReady) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <BeatLoader color="#FF6347" />
            </div>
        );
    }

    // Render project details after data has loaded
    return (
        <>
        <GlobalStyle />
        <Container>
        <div>
            <Header>{project.name}</Header>
    
            {project.country && (
                <SectionBox>
                    <h2>Country:</h2> <p>{project.country}</p>
                </SectionBox>
            )}
    
            {project.description && (
                <SectionBox>
                    <h2>Description:</h2>
                    <div dangerouslySetInnerHTML={{ __html: project.description }} />
                </SectionBox>
            )}
    
            {project.images && project.images.length > 0 && (
                <SectionBox>
                    <h2>Images:</h2>
                    <ImageGallery>
                        {project.images.map((image, index) => (
                            <StyledImage key={index} src={image.url} alt={`Image ${index + 1} for ${project.name}`} />
                        ))}
                    </ImageGallery>
                </SectionBox>
            )}
    
            {project.trips && project.trips.length > 0 && (
                <SectionBox>
                    <h2>Trips:</h2>
                    <StyledList>
                        {project.trips.map((trip, index) => (
                            <TripBox key={index}>
                                {trip.startDate && !trip.endDate ? (
                                    <p>On-going</p>
                                ) : (
                                    <>
                                        <p><strong>Start Date:</strong> {trip.startDate ? formatDate(trip.startDate) : 'N/A'}</p>
                                        <p><strong>End Date:</strong> {trip.endDate ? formatDate(trip.endDate) : 'N/A'}</p>
                                    </>
                                )}
                                <p><strong>Spaces:</strong> {trip.spaces || 'Full'}</p>
                            </TripBox>
                        ))}
                    </StyledList>
                </SectionBox>
            )}
    
            {project.accommodation && (
                <SectionBox>
                    <h2>Accommodation:</h2>
                    <div dangerouslySetInnerHTML={{ __html: project.accommodation }} />
                </SectionBox>
            )}
    
            {project.itinerary && (
                <SectionBox>
                    <h2>Itinerary:</h2>
                    <div dangerouslySetInnerHTML={{ __html: project.itinerary }} />
                </SectionBox>
            )}
    
            {(project.supportedCharityName || project.supportedCharityWebsite) && (
                <SectionBox>
                    <h2>Supported Charity:</h2>
                    {project.supportedCharityName && <p><strong>Name:</strong> {project.supportedCharityName}</p>}
                    {project.supportedCharityWebsite && <p><strong>Website:</strong> <a href={project.supportedCharityWebsite} target="_blank" rel="noopener noreferrer">{project.supportedCharityWebsite}</a></p>}
                </SectionBox>
            )}
    
            {project.animals && project.animals.length > 0 && (
                <SectionBox>
                    <h2>Animals:</h2>
                    <StyledList>
                        {project.animals.map((animal, index) => (
                            <li key={index}>{capitalizeFirstLetter(animal)}</li>
                        ))}
                    </StyledList>
                </SectionBox>
            )}
    
            {project.costs && project.costs.length > 0 && (
                <SectionBox>
                    <h2>Costs:</h2>
                    <StyledList>
                        {project.costs.map((costItem, index) => {
                            const readableType = capitalizeFirstLetter(costItem.type.replace(/_/g, ' '));
                            return (
                                <li key={index}>
                                    <strong>{readableType}:</strong> {costItem.costText || 'Unavailable'}
                                </li>
                            );
                        })}
                    </StyledList>
                </SectionBox>
            )}
    
            {project.additionalCosts && project.additionalCosts.length > 0 && (
                <SectionBox>
                    <h2>Additional Costs:</h2>
                    <StyledList>
                        {project.additionalCosts.map((cost, index) => (
                            <li key={index}>{cost}</li>
                        ))}
                    </StyledList>
                </SectionBox>
            )}
        </div>
        </Container>
        </>
    )       
}