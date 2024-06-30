import {
  checkoutHandler,
  closeSideMenuHandler,
  sideMenuHandler,
} from "./handler";
import { addNewItemHandler } from "./inventory";
import { addRecordHandler, recordHandler } from "./record";
import {
  addRecordBtn,
  checkoutBtn,
  closeSideMenuBtn,
  manageInventoryBtn,
  newItemAddBtn,
  recordsContainer,
} from "./selectors";

const listeners = () => {
  manageInventoryBtn.addEventListener("click", sideMenuHandler);
  closeSideMenuBtn.addEventListener("click", closeSideMenuHandler);
  newItemAddBtn.addEventListener("click", addNewItemHandler);
  addRecordBtn.addEventListener("click", addRecordHandler);
  recordsContainer.addEventListener("click", recordHandler);
  checkoutBtn.addEventListener("click", checkoutHandler);
};

export default listeners;
