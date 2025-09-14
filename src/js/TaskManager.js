export default class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("ToDoTasks")) || [];
    this.currentFilter = "all";
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
  updateTask(id) {
    console.log("Atualização de Tarefa ID " + id);
  }

  toggleComplete(id) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.completed = !task.completed;
      task.updateAt = new Date().toISOString();
      this.saveTasks();
    }
  }

  toggleFavorite(id) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.favorite = !task.favorite;
      task.updateAt = new Date().toISOString();
      this.saveTasks();
    }
  }

  // Delete
  deleteTask(id) {
    console.log("Deletando uma tarefa pelo ID " + id);
  }
}
