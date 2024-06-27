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

const completeTask = (task) => {
    task.taskStatus = "complete";
}

export {createNewTask}