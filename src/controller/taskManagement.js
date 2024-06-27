import {storeItem, getStoredItems} from "../model/storage.js"

function createNewTask(name, description, dueDate, priority, status, parentProject) {
    //Creates a new task object

    let taskName = name;
    let taskDescription = description;
    let taskDueDate = dueDate;
    let taskPriority = priority;
    let taskStatus = status;
    let taskParentProject = parentProject;

    if(parentProject === null) {
       taskParentProject = "default";
    }

    return {taskName, taskDescription, taskDueDate, taskPriority, taskStatus, taskParentProject};
}


const addTaskToList = (task) => {
    const currentlyStoredTasks = getStoredItems('tasks');

    if (currentlyStoredTasks === null) {
        const tasksList = []
        tasksList.push(task);

        storeItem("tasks", tasksList);

    } else {
        const tasksList = JSON.parse(currentlyStoredTasks);
        tasksList.push(task);

        storeItem("tasks", tasksList)
    }
}

const completeTask = (task) => {
    task.taskStatus = "complete";
}

export {createNewTask, addTaskToList, completeTask}