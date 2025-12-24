function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='deleteTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}
