const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const lists = document.querySelector("#lists");
const totalCount = document.querySelector("#totalCount");
const doneCount = document.querySelector("#doneCount");
const clearTodo = document.querySelector("#clearAllBtn");
const todoTemplate = document.querySelector("#todoTemplate");

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
  lists.append(singleList(value));
  textInput.value = null;
  updateTotalCount();
};

const singleList = (currentValue) => {
  const list = todoTemplate.content.cloneNode(true);

  list.querySelector(".currentText").innerText = currentValue;
  list.querySelector(".list").id = "list-" + todoId++;
  list
    .querySelector(".list")
    .classList.add(
      "singleList",
      "duration-100",
      "animate__animated",
      "animate__zoomIn"
    );
  return list;
};

const deleteTodo = (id) => {
  let list = document.querySelector(`#${id}`);

  if (list.classList.contains("animate__zoomIn")) {
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

const clearAllTodos = () => {
  if (lists.childNodes.length) {
    let singleLists = lists.querySelectorAll(".singleList");
    singleLists.forEach((list) => {
      deleteTodo(list.id);
    });
  }
};

// Listener
addBtn.addEventListener("click", addTodo);
lists.addEventListener("click", listHandler);
textInput.addEventListener("keyup", addTodoHandler);
clearTodo.addEventListener("click", clearAllTodos);
