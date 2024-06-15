import { createNewList, preLists } from "./actions.js";

const preRender = () => {
  const prelists = preLists;
  prelists.forEach((prelist) => {
    createNewList(prelist);
  });
};

export default preRender;
