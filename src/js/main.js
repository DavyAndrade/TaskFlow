import {
  createTask,
  toggleComplete,
  toggleFavorite,
  setFilter,
  deleteTask,
} from "./tasks.js";
import { renderTaskList } from "./render.js";
import { deleteModal, editModal } from "./modals.js";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
export const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

window.addEventListener("load", () => {
  renderTaskList();
  console.log("Script loaded successfully!");
});

// Evento de criação de tarefas
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value.trim() === "") {
    taskInput.value = "";
    return;
  }

  createTask(taskInput.value.trim());

  taskInput.value = "";

  renderTaskList();
});

// Evento de Ações da Tarefa
taskList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("checked-btn")) {
    const id = target.dataset.id;
    toggleComplete(id);
    renderTaskList();
  }

  if (target.classList.contains("fav-btn")) {
    const id = target.dataset.id;
    toggleFavorite(id);
    renderTaskList();
  }

  if (target.classList.contains("edit-btn")) {
    const id = target.dataset.id;
    const title = target.dataset.title;

    editModal(title, id);
  }

  if (target.classList.contains("del-btn")) {
    const title = target.dataset.title;
    const id = target.dataset.id;

    deleteModal(title, id);
  }
});

// Evento de Troca de Filtros
filter.addEventListener("click", (e) => {
  const target = e.target.closest("button");

  if (!target) return;

  const selectedFilter = target.dataset.filter;
  if (!selectedFilter) return;

  setFilter(selectedFilter);

  renderTaskList();
});
