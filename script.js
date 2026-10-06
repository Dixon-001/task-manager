const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTask") 
const taskList = document.getElementById("taskList")
const clearTasks = document.getElementById("clearTasks")

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete">X</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    updateCount();
}   

addTaskButton.addEventListener("click", addTask);   
function deleteTask (e){
if (e.target.classList.contains("delete")){
    e.target.parentElement.remove();
    updateCount();
}
}


function updateCount() {
    const count = taskList.querySelectorAll("li").length;
    document.getElementById("taskCount").textContent = `${count} task${count !== 1 ? "s" : ""}`;

}   


taskList.addEventListener("click", deleteTask);
clearTasks.addEventListener("click", () => {
    taskList.innerHTML = "";
});   
clearTasks.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
        taskList.innerHTML = "";
        updateCount();
    }

});   