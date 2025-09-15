import { renderTaskList } from "./render.js";
import { deleteTask, updateTask } from "./tasks.js";

// Aqui é onde vai ter os códigos do Modal de Edição e de Remoção
export function editModal(title, id) {
  const editModal = document.getElementById("editModal");

  editModal.classList.remove("hidden");
  editModal.classList.add("flex");

  editModal.innerHTML = `
        <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <span class="rounded-full bg-blue-100 text-2xl p-2 w-12 h-12 flex items-center justify-center">✏️</span>
        <h2 class="font-semibold text-lg text-center">Editar Tarefa</h2>

        <form class="flex flex-col gap-4 w-full" id="editForm">
          <input type="text" id="editInput" placeholder="Editar tarefa..." value="${title}"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:flex-3.5 font-medium text-gray-700"
            required />
          <div class="flex gap-3 w-full">
            <button type="button"
              class="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-4 py-2 w-full font-medium rounded-lg cursor-pointer" data-id="cancel">Cancelar</button>
            <button type="submit"
              class="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-4 py-2 w-full font-medium rounded-lg cursor-pointer" data-id="edit">Editar</button>
          </div>
        </form>
      </div>
  `;

  const editForm = document.getElementById("editForm");
  const editInput = document.getElementById("editInput");

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateTask(id, editInput.value.trim());
    editModal.classList.remove("flex");
    editModal.classList.add("hidden");
    renderTaskList();
  });

  editModal.addEventListener("click", (e) => {
    const target = e.target;

    if (target.dataset.id == "cancel") {
      editModal.classList.remove("flex");
      editModal.classList.add("hidden");
    }
  });
}

export function deleteModal(title, id) {
  const deleteModal = document.getElementById("deleteModal");

  deleteModal.classList.remove("hidden");
  deleteModal.classList.add("flex");

  deleteModal.innerHTML = `
    <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <span class="rounded-full bg-red-100 text-2xl p-2 w-12 h-12 flex items-center justify-center">🗑️</span>
        <h2 class="font-semibold text-lg text-center">Confirmar Exclusão</h2>
        <p class="text-center text-gray-600">Tem certeza que deseja remover a tarefa "${title}"?</p>
        <div class="flex gap-3 w-full">
          <button
            class="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-4 py-2 w-full font-medium rounded-lg cursor-pointer" data-id="cancel">Cancelar</button>
          <button
            class="bg-red-600 hover:bg-red-700 focus:bg-red-700 text-white px-4 py-2 w-full font-medium rounded-lg cursor-pointer" data-id="delete">Excluir</button>
        </div>
      </div>
  `;

  deleteModal.addEventListener("click", (e) => {
    e.preventDefault;
    const target = e.target;

    if (target.dataset.id == "cancel") {
      deleteModal.classList.remove("flex");
      deleteModal.classList.add("hidden");
    }

    if (target.dataset.id == "delete") {
      deleteTask(id);
      deleteModal.classList.remove("flex");
      deleteModal.classList.add("hidden");
      renderTaskList();
    }
  });
}
