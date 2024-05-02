function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);
    }
}
