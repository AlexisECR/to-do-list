var btnAdd = document.getElementById('btnAdd');
var newTask = document.getElementById("newTask");
var containerList = document.getElementById("containerList");
if (btnAdd) {
    btnAdd.addEventListener('click', function (e) {
        var description = newTask.value;
        createTask(description);
        newTask.value = "";
    });
}
else {
    console.log("Error: No se encontraron algunos elementos...");
}
function createTask(description) {
    var _a;
    if (!description.trim()) {
        alert('Debes agregar un texto valido');
        return;
    }
    var task = document.createElement('div');
    task.setAttribute('class', 'task');
    var taskDescription = document.createElement('span');
    taskDescription.setAttribute('class', 'task-description');
    taskDescription.textContent = description;
    var taskDeleteButton = document.createElement('button');
    taskDeleteButton.setAttribute('class', 'task-delete-button');
    taskDeleteButton.textContent = 'Eliminar';
    taskDeleteButton.onclick = function () {
        //document.getElementById("containerList")?.removeChild(task);
        if (containerList) {
            containerList.removeChild(task);
        }
    };
    task.appendChild(taskDescription);
    task.appendChild(taskDeleteButton);
    (_a = document.getElementById("containerList")) === null || _a === void 0 ? void 0 : _a.appendChild(task);
}
