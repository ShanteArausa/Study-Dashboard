const button = document.getElementById("motivateBtn");
const text = document.getElementById("motivationText");

button.addEventListener("click", () => {
  text.textContent = "Keep building, one step at a time!";
});
const greetButton = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetingText = document.getElementById("greetingText");

greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim(); // remove extra spaces
  if (name) {
    greetingText.textContent = `Hello, ${name}! Keep building your skills!`;
  } else {
    greetingText.textContent = "Please enter your name.";
  }
});
