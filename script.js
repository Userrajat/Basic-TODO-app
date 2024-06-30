document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskItem.appendChild(taskTextElement);
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);
    
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
