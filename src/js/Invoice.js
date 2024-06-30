import initialRender from "./inititalRender";
import listeners from "./listeners";
import observer from "./observer";

class Invoice {
  init() {
    initialRender();
    listeners();
    observer();
  }
}

export default Invoice;
