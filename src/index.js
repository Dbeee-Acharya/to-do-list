import "./style.css";
import { createNewTask, addTaskToList } from "./controller/taskManagement.js";
import { updateAllTasksView } from "./view/updateTasksPage.js";

localStorage.clear();
let testTask = createNewTask(
  "name",
  "description",
  "DueDate",
  "priority",
  "status",
  "parent",
);
console.log(testTask);

addTaskToList(testTask);

testTask = createNewTask(
  "name2",
  "description2",
  "DueDate2",
  "priority2",
  "status2",
  "parent2",
);

addTaskToList(testTask);

updateAllTasksView();
