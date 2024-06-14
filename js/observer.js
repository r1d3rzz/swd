import { updateDoneCount, updateTotalCount } from "./actions.js";
import { lists } from "./selectors.js";

const observer = () => {
  const config = { attributes: true, childList: true, subtree: true };
  const callback = (mutationList, observer) => {
    updateDoneCount();
    updateTotalCount();
  };
  const todoLists = lists;
  const observer = new MutationObserver(callback);
  observer.observe(todoLists, config);
};

export default observer;
