import { getTasks } from "./tasks.js";
import { taskList } from "./main.js";

export function renderTaskList() {
  const tasks = getTasks();

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
          <button class="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 cursor-pointer checked-btn flex items-center justify-center ${
            task.completed
              ? "bg-green-300 border-green-300 text-white text-base"
              : "border-gray-300 hover:border-green-500"
          }" data-id="${task.id}">${task.completed ? "✓" : ""}</button>
          <div class="flex-1 ">
            <p class=" text-base sm:text-lg ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }">${task.title}</p>
            <p class="text-xs sm:text-sm text-gray-400 ">
              Criada em ${new Date(task.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
          <div>
            <button
              class="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200 transition-colors duration-200 cursor-pointer fav-btn"
              data-id="${task.id}" title="${
          task.favorite ? "Remover dos favoritos" : "Adicionar aos Favoritos"
        }"
            >
              ⭐
            </button>
            <button class="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 cursor-pointer edit-btn" data-id="${
              task.id
            }" data-title="${task.title}" title="Editar Tarefa">
              ✏️
            </button>
            <button class="bg-red-100 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200 cursor-pointer del-btn" data-id="${
              task.id
            }" data-title="${task.title}" title="Excluir Tarefa">
              🗑️
            </button>
          </div>
        </div>
      `
      )
      .join("")}
  </div>
  `;
}
