const btn_agregar = document.getElementById('btn-agregar');
const inputElement = document.getElementById("nueva-tarea");


inputElement.setAttribute('maxlength','50');

btn_agregar.addEventListener('click',function (e){
  if(inputElement.value.trim() !== ''){
        let inputTexto = inputElement.value;  
        crear_elementos(inputTexto);
        inputElement.value = "";
    }  
})

function crear_elementos(texto){

    const div_padre = document.createElement("div")
    div_padre.setAttribute("id", "div_tarea");

    const label_tarea = document.createElement("label");
    label_tarea.setAttribute('class','label_tarea')

    const boton_eliminar = document.createElement("button");
    boton_eliminar.setAttribute('onclick', 'eliminar_elemento()');
    boton_eliminar.setAttribute('class', 'btn_eliminar');
    boton_eliminar.onclick = function(){
        this.parentNode.remove();
    }
   
    label_tarea.textContent = texto;
    boton_eliminar.textContent = 'Eliminar';

    div_padre.appendChild(label_tarea);
    div_padre.appendChild(boton_eliminar);

    document.getElementById("lista-tareas").appendChild(div_padre);
}

