import { state } from "./state.js";
import { dom } from "./dom.js";

export function saveStudySessions() {
  localStorage.setItem("studySessions", JSON.stringify(state.studySessions));
}

export function addStudySession(hours) {
  const session = { hours, timestamp: new Date().toLocaleString() };
  state.studySessions.push(session);
  saveStudySessions();
  renderStudySessions();
}

export function deleteStudySession(index) {
  state.studySessions.splice(index, 1);
  saveStudySessions();
  renderStudySessions();
}

export function renderStudySessions() {
  dom.sessionList.innerHTML = "";

  let total = 0;
  state.studySessions.forEach((s) => (total += s.hours));

  const average = state.studySessions.length
    ? (total / state.studySessions.length).toFixed(1)
    : 0;
  dom.sessionCountDisplay.textContent = state.studySessions.length;
  dom.totalHoursDisplay.textContent = total;
  dom.averageHoursDisplay.textContent = average;

  const maxHours = 6;
  dom.averageProgressBar.style.width =
    Math.min((average / maxHours) * 100, 100) + "%";

  state.studySessions.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = `Session ${i + 1}: ${s.hours} hours - ${s.timestamp}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => deleteStudySession(i);

    li.appendChild(deleteBtn);
    dom.sessionList.appendChild(li);
  });
}

export function loadStudySessions() {
  const stored = localStorage.getItem("studySessions");
  if (stored) {
    state.studySessions.push(...JSON.parse(stored));
    renderStudySessions();
  }
}
