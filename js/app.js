const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const lists = document.querySelector("#lists");
const totalCount = document.querySelector("#totalCount");
const doneCount = document.querySelector("#doneCount");
let todoId = 1;

// Business Logic
const updateTotalCount = () => {
  totalCount.innerText = document.querySelectorAll(".singleList").length;
};

const updateDoneCount = () => {
  const totalDoneCount = document.querySelectorAll(".singleList input:checked");
  doneCount.innerText = totalDoneCount.length;
};

const createNewList = (value) => {
  // if (textInput.value == "") return false;
  lists.append(singleList(value));
  textInput.value = null;
  updateTotalCount();
};

const singleList = (currentValue) => {
  const newList = document.createElement("div");
  newList.id = "list-" + todoId++;
  newList.classList.add(
    "singleList",
    "duration-100",
    "animate__animated",
    "animate__zoomIn"
  );
  const list = `<div
  class="list border-2 border-black flex justify-between items-center px-3 py-2 mb-2 bg-white"
>
  <div class="flex">
    <input type="checkbox" class="me-2 accent-emerald-950 checkBtn"/>
    <p class="font-medium currentText">${currentValue}</p>
  </div>
  <div class="flex">
    <button class="border-2 border-black p-1.5 me-2 editBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4 pointer-events-none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    </button>
    <button class="border-2 border-black p-1.5 delBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4 pointer-events-none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </button>
  </div>
</div>`;

  newList.innerHTML = list;

  return newList;
};

const deleteTodo = (id) => {
  let list = document.querySelector(`#${id}`);

  if (
    window.confirm("are u sure to delete it?") &&
    list.classList.contains("animate__zoomIn")
  ) {
    list.classList.remove("animate__zoomIn");
    list.classList.add("animate__zoomOut");
    list.addEventListener("animationend", () => {
      list.remove();
      updateTotalCount();
      updateDoneCount();
    });
  }
};

const doneTodo = (id) => {
  let currentList = document.querySelector(`#${id}`);

  updateDoneCount();
  let editBtn = currentList.querySelector(".editBtn");
  currentList.classList.toggle("opacity-25");
  currentList.classList.toggle("scale-95");
  editBtn.classList.toggle("hidden");
  updateTotalCount();
};

const editTodo = (id) => {
  let currentList = document.querySelector(`#${id}`);

  let editBtn = currentList.querySelector(".editBtn");
  let checkBtn = currentList.querySelector(".checkBtn");
  let currentText = currentList.querySelector(".currentText");

  const newInputTag = document.createElement("input");
  newInputTag.className =
    "border-2 border-black px-1 py-0.5 focus-visible:outline-none";
  currentText.after(newInputTag);
  newInputTag.focus();
  newInputTag.value = currentText.innerText;
  currentText.classList.add("hidden");
  editBtn.setAttribute("disabled", true);
  checkBtn.setAttribute("disabled", true);

  const addNewValue = () => {
    currentText.classList.remove("hidden");
    editBtn.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled");
    newInputTag.classList.toggle("hidden");
    currentText.innerText = newInputTag.value;
  };

  newInputTag.addEventListener("blur", addNewValue);
};

const addTodo = () => {
  textInput.value.trim() != "" && createNewList(textInput.value);
};

// handle from parent (event bubbling or delegation)
const listHandler = (e) => {
  let list = e.target.closest(".singleList");
  list.classList.add("duration-200");

  if (e.target.classList.contains("editBtn")) {
    editTodo(list.id);
  }

  if (e.target.classList.contains("delBtn")) {
    deleteTodo(list.id);
  }

  if (e.target.classList.contains("checkBtn")) {
    doneTodo(list.id);
  }
};

const addTodoHandler = (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
};

// Listener
addBtn.addEventListener("click", addTodo);
lists.addEventListener("click", listHandler);
textInput.addEventListener("keyup", addTodoHandler);
