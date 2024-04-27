// Selecting form, input and list elements from HTML and storing these elements in variables
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Adding event listeners for when a user adds a new task
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }

    // Code to add the task 
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;


todoForm.addEventListener('submit', function(event) {
    // Existing ci=ode

    addTask(newTask); // Add the new task
});

    todoList.appendChild(listItem);
}

todoInput.value = ''; // Clear the input field after adding a task


});


