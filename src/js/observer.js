import { createItemTax } from "./records";
import {
  recordNetTotal,
  recordRowGroup,
  recordTax,
  recordTotal,
} from "./selectors";

const config = { attributes: true, childList: true, subtree: true };

const observer = (mutationList, observer) => {
  let totalCurrentRows = recordRowGroup.querySelectorAll(
    ".currentRecordRow .recordTotalPrice"
  );
  let total = 0;
  totalCurrentRows.forEach((totalCurrentRow) => {
    let price = parseFloat(totalCurrentRow.innerText);
    total += price;
  });
  let tax = createItemTax(total);
  recordTotal.innerText = total;
  recordTax.innerHTML = tax;
  recordNetTotal.innerHTML = tax + total;
};

const observerCallback = new MutationObserver(observer);

observerCallback.observe(recordRowGroup, config);

export default observer;
