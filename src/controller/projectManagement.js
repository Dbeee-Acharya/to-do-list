import {storeItem, getStoredItems} from "../model/storage.js"

function createNewProject(projectName) {
    // Creates a new project object

    const project = {
        projectName: projectName
    }

    return project;
}

const storeProject = (project) => {
    let currentlyStoredProjects = getStoredItems('projects');

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