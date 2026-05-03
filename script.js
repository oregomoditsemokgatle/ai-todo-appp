let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({
    text: taskText,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function suggestTasks() {
  const aiSuggestions = [
    "Review JavaScript basics for 30 minutes",
    "Build one small website section",
    "Push today’s code to GitHub",
    "Fix one bug without giving up",
    "Write down what I learned today"
  ];

  aiSuggestions.forEach(suggestion => {
    tasks.push({
      text: suggestion,
      completed: false
    });
  });

  saveTasks();
  renderTasks();
}

renderTasks();