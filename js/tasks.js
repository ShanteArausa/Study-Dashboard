import { state } from "./state.js";
import { dom } from "./dom.js";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
}

export function addTask(text) {
  const newTask = { id: Date.now(), text, completed: false };
  state.tasks.push(newTask);
  saveTasks();
  renderTasks();
}

export function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

export function toggleTaskCompletion(task) {
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

export function renderTasks() {
  dom.taskList.innerHTML = "";

  if (state.tasks.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "No tasks yet. Add one to get started.";
    empty.classList.add("empty-state");
    dom.taskList.appendChild(empty);
    return;
  }

  let filteredTasks = state.tasks;
  if (state.currentFilter === "active")
    filteredTasks = state.tasks.filter((t) => !t.completed);
  if (state.currentFilter === "completed")
    filteredTasks = state.tasks.filter((t) => t.completed);

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    li.onclick = () => toggleTaskCompletion(task);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    };

    li.appendChild(deleteBtn);
    dom.taskList.appendChild(li);
  });
}

dom.taskInput.addEventListener("input", () => {
  dom.addTaskBtn.disabled = dom.taskInput.value.trim() === "";
});
