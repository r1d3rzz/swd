import { createNewList, renderProduct } from "./inventory";
import { itemslist } from "./selectors";

export const products = [
  { id: 1, name: "Apple", price: 200 },
  { id: 2, name: "Orange", price: 250 },
  { id: 3, name: "Grape", price: 100 },
  { id: 4, name: "Lime", price: 50 },
  { id: 5, name: "Strawberry", price: 350 },
];

const initialRender = () => {
  renderProduct(products);
};

export default initialRender;
