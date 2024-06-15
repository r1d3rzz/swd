import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "./lib/swal2";

export const preLists = ["Finish Homework", "Go to the Store"];

export const updateTotalCount = () => {
  totalCount.innerText = document.querySelectorAll(".singleList").length;
};

export const updateDoneCount = () => {
  const totalDoneCount = document.querySelectorAll(".singleList input:checked");
  doneCount.innerText = totalDoneCount.length;
};

export const createNewList = (value) => {
  lists.append(singleList(value));
  textInput.value = null;
};

export const singleList = (currentValue) => {
  const list = todoTemplate.content.cloneNode(true);

  list.querySelector(".currentText").innerText = currentValue;
  list.querySelector(".list").id = "list-" + uuidv4();
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

export const deleteTodo = (id) => {
  let list = document.querySelector(`#${id}`);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      if (list.classList.contains("animate__zoomIn")) {
        list.classList.remove("animate__zoomIn");
        list.classList.add("animate__zoomOut");
        list.addEventListener("animationend", () => {
          Toast.fire({
            icon: "success",
            title: "Removed successfully",
          });
          list.remove();
        });
      }
    }
  });
};

export const doneTodo = (id) => {
  let currentList = document.querySelector(`#${id}`);

  let editBtn = currentList.querySelector(".editBtn");
  currentList.classList.toggle("opacity-25");
  currentList.classList.toggle("scale-95");
  editBtn.classList.toggle("hidden");
};

export const editTodo = (id) => {
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

export const addTodo = () => {
  textInput.value.trim() != "" && createNewList(textInput.value);
};
