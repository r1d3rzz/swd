import { products } from "./inititalRender";
import {
  itemslist,
  newItemAddForm,
  newItemListTemplate,
  productLists,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";

export const addNewItemHandler = (e) => {
  e.preventDefault();
  const form = new FormData(newItemAddForm);
  const name = form.get("name");
  const price = form.get("price");
  const productId = uuidv4();
  itemslist.append(createNewList(productId, name, price));

  const newOption = new Option(`${name} - ${price}`, productId);
  productLists.append(newOption);
  products.push({
    id: productId,
    name,
    price,
  });
  newItemAddForm.reset();

  console.log(products);
};

export const renderProduct = (products) => {
  products.forEach(({ id, name, price }) => {
    itemslist.append(createNewList(id, name, price));
    productLists.append(new Option(`${name} - ${price}`, id));
  });
};

export const createNewList = (id, name, price) => {
  const newItemList = newItemListTemplate.content.cloneNode(true);
  const li = newItemList.querySelector("li");
  const itemName = newItemList.querySelector(".itemName");
  const itemPrice = newItemList.querySelector(".itemPrice");
  li.setAttribute("productId", id);

  itemName.innerText = name;
  itemPrice.innerText = price;

  return newItemList;
};
