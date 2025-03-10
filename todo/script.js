const dynamicParagraph = document.getElementById('dynamicParagraph');
const inputField = document.getElementById('inputele');
const button = document.getElementById('addBtn');
const clearFunc = document.querySelector('.clearFunc');
const taskCount = document.getElementById('taskCount');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let count = tasks.filter(task => task.completed).length;
let sum = tasks.length;

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    dynamicParagraph.innerHTML = '';

    tasks.forEach((task, index) => {
        const anchor = document.createElement('a');
        anchor.innerText = (task.completed ? "[x] " : "[ ] ") + task.text;
        anchor.style.cursor = "pointer";
        dynamicParagraph.appendChild(anchor);
        dynamicParagraph.appendChild(document.createElement("br"));

        anchor.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            count = tasks.filter(task => task.completed).length;
            updateLocalStorage();
            renderTasks();
        });
    });

    taskCount.innerHTML = `${count}/${sum} tasks completed`;
    clearFunc.classList.toggle('hidden', tasks.length === 0);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') addTask();
}

function addTask() {
    const input = document.querySelector('.inputTask').value.trim();
    if (input !== "") {
        tasks.push({ text: input, completed: false });
        sum++;
        document.querySelector('.inputTask').value = '';
        updateLocalStorage();
        renderTasks();
    }
}

function clearAll() {
    if (confirm("It will delete everything. Do you want to proceed?")) {
        localStorage.removeItem('tasks');
        tasks = [];
        count = 0;
        sum = 0;
        renderTasks();
    }
}

button.addEventListener('click', addTask);
inputField.addEventListener('keydown', handleKeyDown);

renderTasks();
