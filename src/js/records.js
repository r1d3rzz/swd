import { createProductRecordForm } from "./selectors";
import { products } from "./states";

export const addProductRecordHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(createProductRecordForm);
  let id = parseInt(formData.get("selected_product_id"));
  let qty = parseInt(formData.get("productQty"));
  let product = products.find((p) => p.id === id);
  console.log(product, qty);
};
