import TaskManager from "./TaskManager.js";
console.log("Script loaded successfully!");

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

const ToDoTasks = new TaskManager();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value.trim() === "") {
    return;
  }

  ToDoTasks.createTask(taskInput.value.trim());
  console.log(ToDoTasks.getTasks());

  taskInput.value = "";
});
