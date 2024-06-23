import initialRender from "./initialRender";
import listeners from "./listeners";
import observer from "./observer";

class Invoice {
  inti() {
    initialRender();
    listeners();
    observer();
  }
}

export default Invoice;
