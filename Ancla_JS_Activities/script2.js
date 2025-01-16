

addtask.addEventListener("click", () => {
    const taskadder = document.getElementById("tasks");
    taskadder.innerHTML = taskadder.innerHTML + "<li>" + document.getElementById("task").value + "</li>"
})