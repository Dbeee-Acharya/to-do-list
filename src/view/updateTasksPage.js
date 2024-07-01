// This module updates the all tasks page
import { getStoredItems } from "../model/storage";

const updateAllTasksView = () => {
  const listOfTasks = JSON.parse(getStoredItems("tasks"));

  const mainSection = document.getElementById("main-section");

  const toDoColumn = document.createElement("div");

  listOfTasks.forEach((element) => {
    let toDoColumnListValues = document.createElement("p");
    toDoColumnListValues.innerHTML = element["taskName"];

    console.log(element["taskName"]);
    console.log(element);
    toDoColumn.appendChild(toDoColumnListValues);
  });

  mainSection.appendChild(toDoColumn);
};

export { updateAllTasksView };
