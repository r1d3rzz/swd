const sideMenuBtn = document.getElementById("sideMenuBtn");
const sideMenu = document.getElementById("side-menu");

const listsGroup = document.querySelectorAll(".list");
const skillCount = document.getElementById("skills-count");

listsGroup.forEach((list) => {
  list.addEventListener("click", (e) => {
    list.classList.toggle("bg-slate-200");

    let count = document.querySelectorAll(".list.bg-blue-200").length;

    skillCount.innerText = count > 0 ? `( ${count} )` : "";
  });
});

sideMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("translate-x-full");
});
