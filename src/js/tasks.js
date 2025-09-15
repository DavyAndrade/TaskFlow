// tasks.js
const tasks = JSON.parse(localStorage.getItem("ToDoTasks")) || [];
let currentFilter = "all";

// Utils
function saveTasks() {
  localStorage.setItem("ToDoTasks", JSON.stringify(tasks));
}

export function setFilter(filter) {
  currentFilter = filter;
  getTasks();
}

// CRUD
export function createTask(title) {
  const newTask = {
    id: Date.now() + title,
    title: title,
    completed: false,
    favorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks();
}

export function updateTask(id, title) {
  const task = this.tasks.find((task) => task.id === id);

  if (task) {
    task.title = title;
    task.updatedAt = new Date().toISOString();
    saveTasks();
  }
}

export function getTasks() {
  switch (currentFilter) {
    case "pending":
      return tasks.filter((task) => !task.completed);

    case "completed":
      return tasks.filter((task) => task.completed);

    case "favorites":
      return tasks.filter((task) => task.favorite);

    default:
      return tasks;
  }
}

export function toggleComplete(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
    task.updatedAt = new Date().toISOString();
    saveTasks();
  }
}

export function toggleFavorite(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.favorite = !task.favorite;
    task.updatedAt = new Date().toISOString();
    saveTasks();
  }
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasks();
  }
}
