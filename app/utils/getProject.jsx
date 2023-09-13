import getData from "./getData";

// Util Function to get individual project data from the API
export default async function getProject({ id }) {
    const data = await getData();

    // Find the project with the matching id
    const project = data.projects.find(p => p.id === id);
    
    if(!project) {
        throw new Error('Could not find this project...')
    }

    return project
}