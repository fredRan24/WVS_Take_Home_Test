import getData from "./getData";

export default async function getProject({ id }) {
    const data = await getData();

    //console.log("ID from URL:", id);
    // Find the project with the matching id
    const project = data.projects.find(p => p.id === id);
    
    if(!project) {
        throw new Error('Could not find this project...')
    }

    return project
}