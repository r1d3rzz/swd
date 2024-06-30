import { sideMenu } from "./selectors";

export const sideMenuHandler = () => {
  sideMenu.classList.add("duration-300");
  sideMenu.classList.remove("translate-x-full");
};

export const closeSideMenuHandler = () => {
  sideMenu.classList.add("translate-x-full");
};

export const checkoutHandler = () => {
  window.print();
};
