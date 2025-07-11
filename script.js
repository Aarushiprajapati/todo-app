function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.innerHTML = `
        ${taskText}
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}
