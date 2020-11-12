const menu = document.querySelector(".menu");
const menu_item1 = document.querySelector(".menu_item1");
const menu_item2 = document.querySelector(".menu_item2");
const menu_item3 = document.querySelector(".menu_item3");
const content = document.getElementsByClassName("content");
const content_item1 = document.querySelector(".content_item1");
const content_item2 = document.querySelector(".content_item2");
const content_item3 = document.querySelector(".content_item3");
const contentArr = Array.from(content);

function handleMenuClick1() {
  contentArr.forEach((content) => {
    content.classList.remove("showing");
  });
  contentArr.forEach((content) => {
    content.classList.add("hidden");
  });
  content_item1.classList.remove("hidden");
  content_item1.classList.add("showing");
}
function handleMenuClick2() {
  contentArr.forEach((content) => {
    content.classList.remove("showing");
  });
  contentArr.forEach((content) => {
    content.classList.add("hidden");
  });
  content_item2.classList.remove("hidden");
  content_item2.classList.add("showing");
}
function handleMenuClick3() {
  contentArr.forEach((content) => {
    content.classList.remove("showing");
  });
  contentArr.forEach((content) => {
    content.classList.add("hidden");
  });
  content_item3.classList.remove("hidden");
  content_item3.classList.add("showing");
}

if (menu_item1) {
  menu_item1.addEventListener("click", handleMenuClick1);
}
if (menu_item2) {
  menu_item2.addEventListener("click", handleMenuClick2);
}
if (menu_item3) {
  menu_item3.addEventListener("click", handleMenuClick3);
}
