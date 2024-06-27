import {storeItem, getStoredItems} from "../model/storage.js"

function createNewTask(name, description, dueDate, priority, status, parentProject) {
    //Creates a new task object

    const taskName = name;
    const taskDescription = description;
    const taskDueDate = dueDate;
    const taskPriority = priority;
    const taskStatus = status;
    const taskParentProject = parentProject;

    return {taskName, taskDescription, taskDueDate, taskPriority, taskStatus, taskParentProject};
}


const addTaskToList = (task) => {
    let currentlyStoredTasks = getStoredItems('tasks');

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

export {createNewTask, addTaskToList}