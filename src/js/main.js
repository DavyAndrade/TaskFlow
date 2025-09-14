import TaskManager from "./TaskManager.js";
console.log("Script loaded successfully!");

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

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
    ${tasks.map((task) => renderTaskItem(task)).join("")}
  </div>
  `;
}

function renderTaskItem(task) {
  return `
    <div class="bg-white p-6 flex text-start gap-3 rounded-lg shadow-lg">
      <button>Toggle</button>
      <p class="flex-1">Teste ${task.title}</p>
      <div>
        <button>⭐</button>
        <button>✏️</button>
        <button>🗑️</button>
      </div>
    </div>
  `;
}

renderTaskList();
