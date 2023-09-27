/*
Sistema para registrar pacientes y mostrarlos en tarjetas
*/

//Primer paso : Obtener todos los elementos del HTML y guardarlos en variables de JS

//Inputs separados, boton, texto de confirmacion

let nombrePaciente = document.getElementById("nombrePaciente");//input nombre
let edadPaciente = document.getElementById("edadPaciente");//input edad
let botonRegistroPaciente = document.getElementById("btnRegistrarPaciente");//boton
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");//container mensaje de confirmación


//Array para almacenar pacientes
let pacientes = [];


//Funcion para registrar un nuevo paciente
function registrarPaciente(){

    //Obtener atributo value del input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;


    //Array para guardar la información del paciente
    let paciente = {
        nombre : valorNombrePaciente,//Se toma el valor del input y se asigna a esta variable
        edad : valorEdadPaciente,//Se toma el valor del input y se asigna a esta variable
        citas : []
    };
    
    //Cuando se tiene la informacion del paciente:
    pacientes.push(paciente);//array.push(valorAAgregar)

    //Se muestra información en consola
    mostrarInfoPaciente(paciente);//invocación de otra función

    //Mensaje de confirmación (textContent)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente"

    //Se genera tarjeta
    generarTarjetaPaciente(paciente);//Invocacion de una función para generar tarjetas

    return paciente;
}//Termina funcion registrarPaciente


//Funcion para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    // console.log("Citas registradas: ");

    // //forEach para mostrar la informacio del paciente con su cita
    // paciente.citas.forEach((cita, indice) => {
    //     console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    // });
}//Termina funcion mostrarInfoPaciente


//Funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){

    //Crear
    let tarjetaDiv = document.createElement("div");//Se crea container para tarjeta. 
    tarjetaDiv.className = "col-sm-12 col-md-6 col-lg-4"; //Se especifica que es una columna
    //Se puede sintetizar estos dos pasos con el "div.col" desde el primer paso


    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">
            Paciente
        </div>
        <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
    `  //carácter especial de texto "Alt gr + }" para crear plantillas literales


    //insertar
    contenedorTarjetas.appendChild(tarjetaDiv);
    
}//Cierra funcion crear tarjeta

//evento
botonRegistroPaciente.addEventListener("click", registrarPaciente);