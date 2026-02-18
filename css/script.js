// 1. Esto saldrá en la consola (la pestaña "Console" que ves en tu navegador)
console.log("Tarea de: Veronica Pardo");

// 2. Buscamos el botón y el cuadro de texto
const boton = document.querySelector('button');
const inputNombre = document.querySelector('input');

// 3. Programamos la acción del clic
boton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la página se refresque
    
    const nombreUsuario = inputNombre.value; // Captura lo que escribiste (Vero)
    
    if(nombreUsuario === "") {
        alert("¡Por favor, escribe tu nombre primero!");
    } else {
        alert("¡Hola " + nombreUsuario + "! Soy tu primer programa en JS funcionando.");
    }
});
