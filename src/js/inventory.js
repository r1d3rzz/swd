import {
  newProductName,
  newProductPrice,
  newProductsList,
  productsList,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./states";

export const btnAddNewProductHandler = () => {
  if (newProductName.value == "" || newProductPrice.valueAsNumber == "") {
    return alert("Please Enter Name and Price Value");
  }

  const cardId = uuidv4();

  const newProductItem = createProduct(
    cardId,
    newProductName.value,
    newProductPrice.valueAsNumber
  );

  productsList.append(
    new Option(`${newProductName.value} - ${newProductPrice.value} mmk`, cardId)
  );
  products.push({
    id: cardId,
    name: newProductName.value,
    price: newProductPrice.value,
  });

  newProductName.value = null;
  newProductPrice.value = null;
  newProductsList.append(newProductItem);
};

export const renderProducts = (products) => {
  products.forEach(({ id, name, price }) => {
    newProductsList.append(createProduct(id, name, price));
    productsList.append(new Option(`${name} - ${price} mmk`, id));
  });
};

export const createProduct = (id, name, price) => {
  const newSingleProductTemplate = document.querySelector(
    "#newSingleProductTemplate"
  );
  const newSingleProduct = newSingleProductTemplate.content.cloneNode(true);
  const newSingleProductName = newSingleProduct.querySelector(
    "#newSingleProductName"
  );
  const newSingleProductPrice = newSingleProduct.querySelector(
    "#newSingleProductPrice"
  );
  const productCard = newSingleProduct.querySelector(".productCard");
  productCard.id = id;
  newSingleProductName.innerText = name;
  newSingleProductPrice.innerText = price;
  return newSingleProduct;
};
