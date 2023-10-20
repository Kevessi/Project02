const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

let tasks = [];

taskForm.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const title = document.getElementById("task-title").value;
  const priority = document.getElementById("task-priority").value;
  const status = document.querySelector(
    'input[name="task-status"]:checked'
  ).value;

  const task = { title, priority, status };
  tasks.push(task);
  displayTask(task, tasks.length - 1);
}

function displayTask(task, index) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.innerHTML = `
        ${task.title} | Priority: ${task.priority} | Status: ${task.status}
        <button onclick="removeTask(${index})" class="btn btn-danger btn-sm float-right ml-2">Remove</button>
        <button onclick="toggleCompletion(${index})" class="btn btn-success btn-sm float-right">Mark as Complete</button>
    `;
  taskList.appendChild(listItem);
}

function removeTask(index) {
  tasks.splice(index, 1);
  taskList.removeChild(taskList.childNodes[index]);
}

function toggleCompletion(index) {
  const task = tasks[index];
  task.status = task.status === "pending" ? "completed" : "pending";
  taskList.childNodes[index].classList.toggle("completed-task");
}
