// This module updates the all tasks page
import { getStoredItems } from "../model/storage";

const updateAllTasksView = () => {
  const listOfTasks = JSON.parse(getStoredItems("tasks"));

  const mainSection = document.getElementById("main-section");

  const toDoColumn = document.createElement("div");
  toDoColumn.classList.add("to-do-column");

  const toDoColumnHeading = document.createElement("div");
  toDoColumnHeading.classList.add("to-do-column-heading");
  toDoColumnHeading.textContent = "To-Do";

  toDoColumn.appendChild(toDoColumnHeading);

  listOfTasks.forEach((element) => {
    const toDoCard = document.createElement("div");
    toDoCard.classList.add("to-do-card");

    const taskTitle = document.createElement("div");
    const taskDescription = document.createElement("div");
    const taskDueDate = document.createElement("div");
    const taskPriority = document.createElement("div");

    taskTitle.classList.add("task-title");
    taskDescription.classList.add("task-description");
    taskDueDate.classList.add("task-due-date");
    taskPriority.classList.add("task-priority");

    taskTitle.textContent = element["taskName"];
    taskDescription.textContent = element["taskDescription"];
    taskDueDate.textContent = element["taskDueDate"];
    taskPriority.textContent = element["taskPriority"];

    toDoCard.appendChild(taskTitle);
    toDoCard.appendChild(taskDescription);
    toDoCard.appendChild(taskDueDate);
    toDoCard.appendChild(taskPriority);

    toDoColumn.appendChild(toDoCard);
  });

  mainSection.appendChild(toDoColumn);
};

export { updateAllTasksView };
