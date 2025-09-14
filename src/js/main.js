import TaskManager from "./TaskManager.js";
console.log("Script loaded successfully!");

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const filterAll = document.getElementById("filterAll");
const filterPending = document.getElementById("filterPending");
const filterCompleted = document.getElementById("filterCompleted");
const filterFavorites = document.getElementById("filterFavorites");

const ToDoTasks = new TaskManager();

// Evento de criação de uma nova tarefa
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value.trim() === "") {
    return;
  }

  ToDoTasks.createTask(taskInput.value.trim());

  taskInput.value = "";

  renderTaskList();
});

// Função para renderizar a lista de tarefas!
function renderTaskList() {
  const tasks = ToDoTasks.getTasks();

  if (tasks.length == 0) {
    taskList.innerHTML = `
    <div class="text-center py-12">
        <div class="text-6xl mb-4">📝</div>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">Nenhuma tarefa encontrada</h3>
        <p class="text-gray-500">Adicione uma nova tarefa para começar!</p>
    </div>
    `;

    return;
  }

  taskList.innerHTML = `
  <div class="flex w-full flex-col gap-4">
    ${tasks
      .map(
        (task) => `
        <div class="bg-white p-4 sm:p-6 flex text-start gap-3 sm:gap-4 rounded-lg shadow-lg items-center task-item">
          <button class="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-300 hover:border-green-500 text-white cursor-pointer"></button>
          <div class="flex-1">
            <p class="text-gray-800 text-base sm:text-lg">${task.title}</p>
            <p class="text-xs sm:text-sm text-gray-500">
              Criada em ${new Date(task.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
          <div>
            <button
              class="bg-yellow-100 p-1 rounded-lg hover:bg-yellow-200 transition-colors duration-200 cursor-pointer fav-btn"
              data-id="${task.id}"
            >
              ⭐
            </button>
            <button class="bg-blue-100 p-1 rounded-lg hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
              ✏️
            </button>
            <button class="bg-red-100 p-1 rounded-lg hover:bg-red-200 transition-colors duration-200 cursor-pointer">
              🗑️
            </button>
          </div>
        </div>
      `
      )
      .join("")}
  </div>
  `;

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("fav-btn")) {
      const id = e.target.dataset.id;
      ToDoTasks.toggleFavorite(id);
      renderTaskList();
    }
  });
}

renderTaskList();

// Filtro de Todas as Tarefas
filterAll.addEventListener("click", (e) => {
  ToDoTasks.setFilter("all");
  renderTaskList();
});

// Filtro de Tarefas Pendentes
filterPending.addEventListener("click", (e) => {
  ToDoTasks.setFilter("pending");
  renderTaskList();
});

// Filtros de Tarefas Completadas
filterCompleted.addEventListener("click", (e) => {
  ToDoTasks.setFilter("completed");
  renderTaskList();
});

// Filtro de Tarefas Favoritas
filterFavorites.addEventListener("click", (e) => {
  ToDoTasks.setFilter("favorites");
  renderTaskList();
});
