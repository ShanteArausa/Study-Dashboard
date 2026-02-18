export const state = {
  studySessions: JSON.parse(localStorage.getItem("studySessions")) || [],
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  currentFilter: "all", // can be "all", "active", or "completed"
};
