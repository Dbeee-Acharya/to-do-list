import './style.css'
import {createNewTask} from "./controller/taskManagement.js";
import {storeTask, getStoredItems} from "./model/storage.js"


console.log(createNewTask("name", "description", "DueDate", "priority", "status", "parent"));


storeTask([{"test": "test"}, {"test2": "test2"}])

console.log(getStoredItems("tasks"));
console.log(JSON.parse(getStoredItems('tasks'))[1]);