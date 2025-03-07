
const container = document.querySelector(".container");
const shoe1 = document.querySelector(".shoe-1");
const shoe2 = document.querySelector(".shoe-2");

document.querySelector(".color-2").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".color-1").addEventListener("click", () => {
  container.classList.remove("change");
});