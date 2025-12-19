const taskInput = document.getElementById("task");
const taskSelect = document.getElementById("priority");
const taskDate = document.getElementById("deadline");
const taskAdd = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

taskAdd.addEventListener("click", () => {
  const task = taskInput.value;
  const priority = taskSelect.value;
  const deadline = taskDate.value;

  if (task.trim() === "" || deadline === "") {
    alert("Please enter a task and deadline.");
    return;
  }

  const selectedDate = new Date(deadline);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    alert("Please select upcoming date as deadline.");
    return;
  }

  const TaskItem = document.createElement("div");
  TaskItem.classList.add("task");
  TaskItem.innerHTML = `
         <p>${task}</p>
         <p>Priority: ${priority}</p>
         <p>Deadline: ${deadline}</p>
         <button class="mark-done">Mark Done</button>
         <button class="delete-btn">Delete</button>
         `;

  taskList.appendChild(TaskItem);

  taskInput.value = "";
  taskSelect.value = "top";
  taskDate.value = "";
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("mark-done")) {
    const TaskItem = e.target.parentElement;
    TaskItem.style.backgroundColor = "#f2f2f2";
    e.target.disabled = true;
  }
});

task.List.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const TaskItem = e.target.parentElement;
    taskList.removeChild(TaskItem);
  }
});
