const btnAdd: HTMLButtonElement = document.getElementById('btnAdd') as HTMLButtonElement;
const newTask: HTMLInputElement = document.getElementById("newTask") as HTMLInputElement;
const containerList: HTMLDivElement = document.getElementById("containerList") as HTMLDivElement;

    btnAdd.addEventListener('click', function (e: MouseEvent) {
        let description: string = newTask.value;
        createTask(description);
        newTask.value = "";
    })

function createTask(description: string): void {

    if (!description.trim()) {
        alert('Debes agregar un texto valido');
        return;
    }

    const task: HTMLDivElement = document.createElement('div');
    task.setAttribute('class', 'task');

    const taskDescription: HTMLSpanElement = document.createElement('span');
    taskDescription.setAttribute('class', 'task-description');
    taskDescription.textContent = description;

    const taskDeleteButton: HTMLButtonElement = document.createElement('button');
    taskDeleteButton.setAttribute('class', 'task-delete-button');
    taskDeleteButton.textContent = 'Eliminar';
    taskDeleteButton.onclick = function () {    
        containerList.removeChild(task);
    }

    task.appendChild(taskDescription)
    task.appendChild(taskDeleteButton);

    document.getElementById("containerList")?.appendChild(task);
    
}