/* 

DOM (Document Object Model / Modelo de Objetos del Documento)


Cuando creamos paginas que usan HTML + CSS estamos creando páginas estáticas (porque no tienen interactividad), cuando agragamos JS nuestras paginas se convierten en sitios dinámicos(tienen interactividad).


El navegador lee el documento html de arriba a abajo, de izq a derecha (renderización)

Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de estas etiquetas se consideran "hojas"(nodos).


Cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representación más basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, un texto, incluso un comentario.

    - Document : Nodo raíz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el.

    - Element : Son nodos definidos por etiquetas html (div, h1, p, img, meta, head, script, etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador).

    - Text : El texto que hay dentro de un elemento se considera un nodo, con la caracteristicaque es un nodo hijo.

    - Atribbutes : Los atributos de las etiquetas tambien se convierten en nodos, son nodos que estan asociados a algun elemento y se pueden considerar también elementos hijos.

    - Comment : Los comentarios tambien son un nodo, porque forma parte del documento.






    ¿Para que utilizar JS en un DOM?
        - Agregar elementos HTML
        - Modificar elementos html
        - Borrar elementos HTML
*/

//Nodos de documento HTML

// Paso 1. Guardar los elementos HTML en variables de JS (let, var, const)

/*Metodos de selección de elementos : Permiten traer una etiqueta HTML y guardarla para su uso posterior.

    - Metodos tradicionales
        - getElementById
        - getElementByTagName
        - getElementByClassName

*/


//Aqui se obtiene un elemento por id
let nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);


//Para estas variables es mejor usar const para evitar la reasignación accidental, debido a que solo guarda la referencia del objeto
//Aqui se obtiene varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aqui se obtienen varios elementos por etiquetas
const inputs = document.getElementsByTagName("input");
console.log(inputs);


/*
Metodos Actuales

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll    

*/

//Aqui se obtiene un elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui se obtienen varios elementos por el selector .
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Métodos para modificar elementos en el texto

    - innerHTML : Esta propiedad permite acceder y modificar el contenido del elemento. Se asigna una cadena de texto y se puede modificar o eliminar el texto. (Cuando ya existe el texto)

    - textContent : Cambiar o recuperar el contenido dentro de un elemento. Se puede modificar o eliminar el texto (Crear nuevo texto)

*/


//Modificar texto de un h1 con innerHTML
let titulo = document.getElementById("titulo1");
titulo.innerHTML = "New Text Title";


//Crear un nuevo texto con innerHTML
//titulo.innerHTML = "<p>Bienvenido</p>"

let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Paciente registrado correctamente</p>";


/*

Crear elementos

    - Crear el elemento
        - createElement
        - createTextNode
        - createComment


    - Poner el elemento
        - append
        - appendChild

*/

//Creando un elemento con createElement
let imagen = document.createElement("img");

//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz"

//Poner imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild (imagen);//Se pone como hijo para que lo coloque debajo y NO a la par