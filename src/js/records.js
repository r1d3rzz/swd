import Swal from "sweetalert2";
import {
  createProductRecordForm,
  recordNetTotal,
  recordRowGroup,
  recordRowTemplate,
  recordTax,
  recordTotal,
} from "./selectors";
import { products } from "./states";
import { v4 as uuid } from "uuid";

export const addProductRecordHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(createProductRecordForm);
  let id = formData.get("selected_product_id");
  let qty = parseInt(formData.get("productQty"));
  let product = products.find((p) => p.id == id);
  recordRowGroup.append(createRecordRow(product, qty));
  createProductRecordForm.reset();
};

export const removeRecordHandler = (e) => {
  if (e.target.classList.contains("record-remove-btn")) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let id = e.target.closest(".currentRecordRow").id;
        removeRecordRow(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your record has been deleted.",
          icon: "success",
        });
      }
    });
  }
};

export const removeRecordRow = (id) =>
  recordRowGroup.querySelector("#" + CSS.escape(id)).remove();

export const createRecordRow = ({ id, name, price }, qty) => {
  let recordRow = recordRowTemplate.content.cloneNode(true);
  let recordRowName = recordRow.querySelector(".recordName");
  let recordRowPrice = recordRow.querySelector(".recordPrice");
  let recordRowTotalPrice = recordRow.querySelector(".recordTotalPrice");
  let recordRowQty = recordRow.querySelector(".recordQty");
  let currentRecordRow = recordRow.querySelector(".currentRecordRow");

  currentRecordRow.setAttribute("product_id", id);
  currentRecordRow.setAttribute("id", uuid());
  recordRowName.innerText = name;
  recordRowPrice.innerText = price;
  recordRowQty.innerText = qty;
  recordRowTotalPrice.innerText = price * qty;

  return recordRow;
};

export const createItemTax = (amount, percentage = 5) => {
  return (amount / 100) * percentage;
};
