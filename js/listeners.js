import { addTodo } from "./actions.js";
import { listHandler, addTodoHandler, clearAllTodos } from "./handlers.js";
import { addBtn, clearTodo, lists, textInput } from "./selectors.js";

const listeners = () => {
  addBtn.addEventListener("click", addTodo);
  lists.addEventListener("click", listHandler);
  textInput.addEventListener("keyup", addTodoHandler);
  clearTodo.addEventListener("click", clearAllTodos);
};

export default listeners;
