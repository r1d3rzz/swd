import { products } from "./inititalRender";
import { v4 as uuidv4 } from "uuid";
import {
  newRecordListTemplate,
  recordForm,
  recordsContainer,
  totalAmount,
  totalPrice,
  totalTax,
} from "./selectors";

export const addRecordHandler = (e) => {
  e.preventDefault();
  const form = new FormData(recordForm);
  const productId = form.get("products");
  const product = products.find((p) => {
    return p.id == productId;
  });
  let isExist = document.querySelector(`[product_id="${product.id}"]`);
  const productQty = parseInt(form.get("productQty"));

  if (!isExist) {
    recordsContainer.append(createRecord(product, productQty));
  } else {
    itemQtyToggler(product.id, productQty);
  }

  recordForm.reset();
};

export const calculateTotalAmount = () => {
  const newRecordsList = document.querySelectorAll(".singleRecord");
  let total = 0;
  newRecordsList.forEach((record) => {
    let singleRecordTotal = parseFloat(
      record.querySelector(".itemTotalPrice").innerText
    );
    total += singleRecordTotal;
  });
  let tax = createTax(total, 5);
  totalPrice.innerText = total;
  totalTax.innerText = tax;
  totalAmount.innerText = total + tax;
};

export const createTax = (amount, percentage = 5) => {
  return (amount / 100) * percentage;
};

export const createRecord = ({ name, price, id }, qty) => {
  const newRecordList = newRecordListTemplate.content.cloneNode(true);
  const tr = newRecordList.querySelector("tr");
  const itemName = newRecordList.querySelector(".itemName");
  const itemPrice = newRecordList.querySelector(".itemPrice");
  const itemQty = newRecordList.querySelector(".itemQty");
  const itemTotalPrice = newRecordList.querySelector(".itemTotalPrice");

  tr.setAttribute("row_id", uuidv4());
  tr.setAttribute("product_id", id);
  itemName.innerText = name;
  itemPrice.innerText = price;
  itemQty.innerText = qty;
  itemTotalPrice.innerText = price * qty;
  return newRecordList;
};

export const recordHandler = (e) => {
  const recordRoleId = e.target.closest(".singleRecord").getAttribute("row_id");
  const recordRole = document.querySelector(`[row_id="${recordRoleId}"]`);
  const recordRoleProductId = recordRole.getAttribute("product_id");

  if (e.target.classList.contains("removeRecordBtn")) {
    recordRole.remove();
  } else if (e.target.classList.contains("itemAddBtn")) {
    itemQtyToggler(recordRoleProductId, 1);
  } else if (e.target.classList.contains("itemSubBtn")) {
    itemQtyToggler(recordRoleProductId, -1);
  }
};

export const itemQtyToggler = (recordRoleProductId, qty) => {
  const recordRole = document.querySelector(
    `[product_id="${recordRoleProductId}"]`
  );
  let itemQty = recordRole.querySelector(".itemQty");
  let itemPrice = recordRole.querySelector(".itemPrice");
  let itemTotalPrice = recordRole.querySelector(".itemTotalPrice");
  if (qty > 0) {
    itemQty.innerText = parseInt(itemQty.innerText) + qty;
  } else {
    if (parseInt(itemQty.innerText) == 1) {
      return;
    }
    itemQty.innerText = parseInt(itemQty.innerText) + qty;
  }
  itemTotalPrice.innerText =
    parseFloat(itemPrice.innerText) * parseInt(itemQty.innerText);
};
