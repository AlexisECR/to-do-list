const btnAdd: HTMLElement | null = document.getElementById('btnAdd');
const newTask: HTMLInputElement = document.getElementById("newTask") as HTMLInputElement;
const containerList : HTMLElement | null = document.getElementById("containerList");

if(btnAdd){
    btnAdd.addEventListener('click',function (e: MouseEvent){
        let description:string = newTask.value;
        createTask(description);
        newTask.value = "";
    })
}
else{console.log("Error: No se encontraron algunos elementos...")}


function createTask(description:string){
    if(!description.trim()){
        alert('Debes agregar un texto valido');
        return ;
    }

    const task:HTMLElement = document.createElement('div');
    task.setAttribute('class', 'task');

    const taskDescription:HTMLElement = document.createElement('span');
    taskDescription.setAttribute('class', 'task-description');
    taskDescription.textContent = description;

    const taskDeleteButton: HTMLElement = document.createElement('button');
    taskDeleteButton.setAttribute('class', 'task-delete-button');
    taskDeleteButton.textContent = 'Eliminar';
    taskDeleteButton.onclick = function(){
        //document.getElementById("containerList")?.removeChild(task);
    if(containerList){
        containerList.removeChild(task);
    }
    }
   
    task.appendChild(taskDescription)
    task.appendChild(taskDeleteButton);

    document.getElementById("containerList")?.appendChild(task);
}