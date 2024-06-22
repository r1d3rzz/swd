import { manageInventorySlider } from "./selectors";

export const manageInventoryHandler = () => {
  manageInventorySlider.classList.remove("translate-x-full");
  manageInventorySlider.classList.add("duration-300");
};

export const closeManageInventoryHandler = () => {
  manageInventorySlider.classList.add("translate-x-full");
};
