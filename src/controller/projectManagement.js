import {storeItem, getStoredItems} from "../model/storage.js"

function createNewProject(projectName) {
    // Creates a new project object

    let project = {
        projectName: projectName
    }

    return project;
}

const storeProject = (project) => {
    const currentlyStoredProjects = getStoredItems('projects');

    if(currentlyStoredProjects === null) {
        const listOfProjects = []
        listOfProjects.push(project);

        storeItem('projects', listOfProjects);

    } else {
        const listOfProjects = JSON.parse(currentlyStoredProjects);
        listOfProjects.push(project);

        storeItem('projects', listOfProjects);
    }
}

export {createNewProject, storeProject}