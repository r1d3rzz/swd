import { addTodo, deleteTodo, doneTodo, editTodo } from "./actions.js";

export const listHandler = (e) => {
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

export const addTodoHandler = (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
};

export const clearAllTodos = () => {
  if (lists.childNodes.length) {
    let singleLists = lists.querySelectorAll(".singleList");
    singleLists.forEach((list) => {
      deleteTodo(list.id);
    });
  }
};
