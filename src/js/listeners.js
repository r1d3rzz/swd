import { closeManageInventoryHandler, manageInventoryHandler } from "./handler";
import { btnAddNewProductHandler } from "./inventory";
import { addProductRecordHandler, removeRecordHandler } from "./records";
import {
  btnAddNewProduct,
  btnAddProductRecord,
  btnCloseInventory,
  btnManageInventory,
  recordRowGroup,
} from "./selectors";

const listeners = () => {
  btnManageInventory.addEventListener("click", manageInventoryHandler);
  btnCloseInventory.addEventListener("click", closeManageInventoryHandler);
  btnAddNewProduct.addEventListener("click", btnAddNewProductHandler);
  btnAddProductRecord.addEventListener("click", addProductRecordHandler);
  recordRowGroup.addEventListener("click", removeRecordHandler);
};

export default listeners;
