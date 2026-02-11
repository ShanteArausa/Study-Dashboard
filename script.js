const button = document.getElementById("motivateBtn");
const text = document.getElementById("motivationText");
const studySessions = [];

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
const calculateBtn = document.getElementById("calculateBtn");
const studyHoursInput = document.getElementById("studyHours");
const studyResult = document.getElementById("studyResult");

calculateBtn.addEventListener("click", () => {
  const hours = Number(studyHoursInput.value);

  let message = "";

  if (!hours && hours !== 0) {
    message = "Please enter your study hours.";
  } else if (hours >= 4) {
    message = "🔥 Great work! You're putting in serious effort.";
  } else if (hours >= 2) {
    message = "👍 Solid progress. Stay consistent!";
  } else {
    message = "⚠️ Every bit counts — try to study a little more tomorrow.";
  }

  studyResult.textContent = message;
});
const addSessionBtn = document.getElementById("addSessionBtn");

addSessionBtn.addEventListener("click", () => {
  const hours = Number(studyHoursInput.value);

  if (!hours && hours !== 0) {
    alert("Please enter valid study hours first.");
    return;
  }

  studySessions.push(hours);
  updateStudyDashboard();
});
function updateStudyDashboard() {
  let total = 0;

  for (let i = 0; i < studySessions.length; i++) {
    total += studySessions[i];
  }

  const average = (total / studySessions.length).toFixed(1);

  document.getElementById("sessionCount").textContent = studySessions.length;
  document.getElementById("totalHours").textContent = total;
  document.getElementById("averageHours").textContent = average;

  renderSessionList();
}
function renderSessionList() {
  const list = document.getElementById("sessionList");
  list.innerHTML = "";

  for (let i = 0; i < studySessions.length; i++) {
    const li = document.createElement("li");
    li.textContent = `Session ${i + 1}: ${studySessions[i]} hours`;
    list.appendChild(li);
  }
}
