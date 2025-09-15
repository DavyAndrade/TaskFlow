import { renderTaskList } from "./render.js";
import { deleteTask } from "./tasks.js";

// Aqui é onde vai ter os códigos do Modal de Edição e de Remoção
export function editModal(task) {
  const editModal = document.getElementById("editModal");

  editModal.innerHTML = `

  `;
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
