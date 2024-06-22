import { closeManageInventoryHandler, manageInventoryHandler } from "./handler";
import { btnAddNewProductHandler } from "./inventory";
import { addProductRecordHandler } from "./records";
import {
  btnAddNewProduct,
  btnAddProductRecord,
  btnCloseInventory,
  btnManageInventory,
} from "./selectors";

const listeners = () => {
  btnManageInventory.addEventListener("click", manageInventoryHandler);
  btnCloseInventory.addEventListener("click", closeManageInventoryHandler);
  btnAddNewProduct.addEventListener("click", btnAddNewProductHandler);
  btnAddProductRecord.addEventListener("click", addProductRecordHandler);
};

export default listeners;
