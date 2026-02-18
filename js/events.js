import { dom } from "./dom.js";
import { addTask, renderTasks } from "./tasks.js";
import { addStudySession, loadStudySessions } from "./study.js";
import { state } from "./state.js";

export function setupEventListeners() {
  dom.motivateBtn.onclick = () => {
    dom.motivationText.textContent = "Keep building, one step at a time!";
  };

  dom.greetBtn.onclick = () => {
    const name = dom.nameInput.value.trim();
    dom.greetingText.textContent = name
      ? `Hello, ${name}! Keep building your skills!`
      : "Please enter your name.";
  };

  dom.addSessionBtn.onclick = () => {
    const hours = Number(dom.studyHoursInput.value);
    if (!hours && hours !== 0) return alert("Please enter valid study hours.");
    addStudySession(hours);
  };

  dom.addTaskBtn.onclick = () => {
    const text = dom.taskInput.value.trim();
    if (!text) return;
    addTask(text);
    dom.taskInput.value = "";
  };

  dom.filterButtons.forEach((btn) => {
    btn.onclick = () => {
      state.currentFilter = btn.dataset.filter;
      dom.filterButtons.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      renderTasks();
    };
  });

  loadStudySessions();
}
