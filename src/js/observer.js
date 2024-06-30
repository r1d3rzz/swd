import { calculateTotalAmount } from "./record";

// Select the node that will be observed for mutations
const targetNode = document.getElementById("recordsContainer");

const config = { attributes: true, childList: true, subtree: true };

const observer = (mutationList, observer) => {
  calculateTotalAmount();
};

const callback = new MutationObserver(observer);

callback.observe(targetNode, config);

export default observer;
