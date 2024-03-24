let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value.trim()}</span>
            <div class="actions">
                <span class="time">${getTime()}</span>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        li.addEventListener("click", toggleTask);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function toggleTask() {
    this.classList.toggle("completed");
}

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function editTask(button) {
    let li = button.closest("li");
    let span = li.querySelector("span");
    
    // Create an input field
    let input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    
    // Replace the span with the input field
    li.replaceChild(input, span);
    
    // Focus on the input field
    input.focus();
    
    // Update the task text when the input field loses focus
    input.addEventListener("blur", function() {
        if (input.value.trim() !== "") {
            span.textContent = input.value.trim();
        }
        li.replaceChild(span, input);
    });
}

function deleteTask(button) {
    let li = button.parentNode.parentNode;
    li.remove();
}
