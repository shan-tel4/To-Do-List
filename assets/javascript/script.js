const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    console.log("addTask function triggered");
    if (inputBox.value === '') {
        alert("You must write something!");
        console.log("Alert triggered for empty input");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        console.log("Task added:", inputBox.value);
    }
}