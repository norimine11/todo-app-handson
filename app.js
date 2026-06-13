const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const STORAGE_KEY = "todo-app-tasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
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
