import { renderProducts } from "./inventory";
import { manageInventorySlider } from "./selectors";
import { products } from "./states";

const initialRender = () => {
  renderProducts(products);
};

export default initialRender;
