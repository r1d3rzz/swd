const width = document.getElementById("width");
const breath = document.getElementById("breath");
const records = document.getElementById("records");

const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const calculateBtn = document.getElementById("calculateBtn");

let i = 0;

calculateBtn.addEventListener("click", () => {
  let answer = width.valueAsNumber * breath.valueAsNumber;
  let res = `${width.value}ft <i class="fa-solid fa-xmark text-sm"></i> ${breath.value}ft = ${answer}ft<sup>2</sup>`;
  result.innerHTML = res;
});

storeBtn.addEventListener("click", () => {
  i++;
  records.innerHTML += `<li>${i}. ${result.innerHTML}</li>`;
  result.innerHTML = "";
  width.value = "";
  breath.value = "";
});

clearBtn.addEventListener("click", () => {
  records.innerHTML = "";
  width.value = "";
  breath.value = "";
});
