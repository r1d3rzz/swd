import Swal from "sweetalert2";
import listeners from "./listeners.js";
import observer from "./observer.js";
import preRender from "./preRender.js";

class Todo {
  init() {
    observer();
    listeners();
    preRender();
  }
}

export default Todo;
