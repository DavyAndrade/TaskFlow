export default class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("ToDoTasks")) || [];
  }

  saveTasks() {
    localStorage.setItem("ToDoTasks", JSON.stringify(this.tasks));
  }

  // Create
  createTask(title) {
    const newTask = {
      id: Date.now() + title,
      title: title,
      completed: false,
      favorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.tasks.push(newTask);
    this.saveTasks();
  }

  // Read
  getTasks() {
    return this.tasks;
  }

  // Update

  // Delete
}
