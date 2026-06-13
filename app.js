const form  = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list  = document.getElementById("task-list");

const STORAGE_KEY = "todo-app-tasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const label = document.createElement("label");
    label.className = "task-item-label";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task;

    label.appendChild(span);
    li.appendChild(label);
    list.appendChild(li);
  });
}

renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.push(text);
  saveTasks();
  input.value = "";
  renderTasks();
});
