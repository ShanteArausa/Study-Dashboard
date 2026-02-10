const button = document.getElementById("motivateBtn");
const text = document.getElementById("motivationText");

button.addEventListener("click", () => {
  text.textContent = "Keep building, one step at a time!";
});
