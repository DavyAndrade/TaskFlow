export default class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("ToDoTasks")) || [];
    this.currentFilter = "all";
  }

  // Utils
  saveTasks() {
    localStorage.setItem("ToDoTasks", JSON.stringify(this.tasks));
  }

  setFilter(filter) {
    this.currentFilter = filter;
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
    switch (this.currentFilter) {
      case "pending":
        return this.tasks.filter((task) => !task.completed);

      case "completed":
        return this.tasks.filter((task) => task.completed);

      case "favorites":
        return this.tasks.filter((task) => task.favorite);

      default:
        return this.tasks;
    }
  }

  // Update
  updateTask(id, title) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.title = title;
      task.updatedAt = new Date().toISOString();
      this.saveTasks();
    }
  }

  toggleComplete(id) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.completed = !task.completed;
      task.updatedAt = new Date().toISOString();
      this.saveTasks();
    }
  }

  toggleFavorite(id) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.favorite = !task.favorite;
      task.updatedAt = new Date().toISOString();
      this.saveTasks();
    }
  }

  // Delete
  deleteTask(id) {
    console.log("Deletando uma tarefa pelo ID " + id);
  }
}
