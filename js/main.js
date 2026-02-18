import { setupEventListeners } from "./events.js";
import { renderTasks } from "./tasks.js";

function init() {
  renderTasks();
  setupEventListeners();
}

init();
