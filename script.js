const toDoList = [];
const inputItem = document.querySelector("#input-item");
const outputContainer = document.querySelector("#output-container");
const btnAddItem = document.querySelector("#add-item-button");
const btnClearAllItems = document.querySelector("#clear-all-items-button");

btnAddItem.addEventListener("click", (e) => {
  e.preventDefault();
  let listItem = document.createElement("div");
  listItem.innerHTML = inputItem.value;
  listItem.classList.add("list-item");
  outputContainer.appendChild(listItem);

  inputItem.value = "";

  listItem.addEventListener("click", () => {
    listItem.classList.add("show");
  });

  btnClearAllItems.addEventListener("click", () => {
    listItem.remove();
  });
});
