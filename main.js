const form = document.getElementById('formulario');
const input = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const eliminarN = document.getElementById('borrar');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = input.value.trim();
    if (nombre == "") {
        alert('Por favor ingrese un nombre');
        return;
    }

    localStorage.setItem('usuario', nombre);

    saludo.textContent = 'Bienvenido ' + nombre;

    input.value = "";
});

document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        saludo.textContent = "Bienvenido de nuevo " + usuarioGuardado;
    }
});

eliminarN.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    saludo.textContent = "Bienvenido Usuario Indefinido";
})

