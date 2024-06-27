function createNewTask(taskName, taskDescription, taskDueDate, taskPriority, taskParentProject) {
    //Creates a new task object

    const task = {
        taskName: taskName,
        taskDescription: taskDescription,
        taskDueDate: taskDueDate,
        taskPriority: taskPriority,
        taskParentProject: taskParentProject,
    };

    return task;
}

export {createNewTask}