import { renderTaskList } from "./render.js";
import { deleteTask, updateTask } from "./tasks.js";

// Aqui é onde vai ter os códigos do Modal de Edição e de Remoção
export function editModal(title, id) {
  const editModal = document.getElementById("editModal");

  editModal.classList.remove("hidden");
  editModal.classList.add("flex");

  editModal.innerHTML = `
        <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md 2xl:max-w-xl 2xl:gap-6">
        <span class="rounded-full bg-blue-100 text-2xl p-2 w-12 h-12 flex items-center justify-center 2xl:text-4xl 2xl:p-4 2xl:w-auto 2xl:h-auto">✏️</span>
        <h2 class="font-semibold text-lg text-center 2xl:text-2xl">Editar Tarefa</h2>

        <form class="flex flex-col gap-4 w-full" id="editForm">
          <input type="text" id="editInput" placeholder="Editar tarefa..." value="${title}"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700 2xl:px-6 2xl:py-5"
            required />
          <div class="flex gap-3 w-full">
            <button type="button"
              class="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-4 py-2 w-full font-medium rounded-lg cursor-pointer 2xl:text-2xl 2xl:px-6 2xl:py-4" data-id="cancel">Cancelar</button>
            <button type="submit"
              class="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-4 py-2 w-full font-medium rounded-lg cursor-pointer 2xl:text-2xl 2xl:px-6 2xl:py-4" data-id="edit">Editar</button>
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
    <div class="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md 2xl:max-w-xl 2xl:gap-6">
        <span class="rounded-full bg-red-100 text-2xl p-2 w-12 h-12 flex items-center justify-center 2xl:text-4xl 2xl:p-4 2xl:w-auto 2xl:h-auto">🗑️</span>
        <h2 class="font-semibold text-lg text-center 2xl:text-2xl">Confirmar Exclusão</h2>
        <p class="text-center text-gray-600 text-xl">Tem certeza que deseja remover a tarefa "${title}"?</p>
        <div class="flex gap-3 w-full">
          <button
            class="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-4 py-2 w-full font-medium rounded-lg cursor-pointer 2xl:text-2xl 2xl:px-6 2xl:py-4" data-id="cancel">Cancelar</button>
          <button
            class="bg-red-600 hover:bg-red-700 focus:bg-red-700 text-white px-4 py-2 w-full font-medium rounded-lg cursor-pointer 2xl:text-2xl" data-id="delete">Excluir</button>
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
