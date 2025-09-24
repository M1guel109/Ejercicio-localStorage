const usuarioC = document.getElementById('usuario-creado');

document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        usuarioC.textContent = "Bienvenido de nuevo " + usuarioGuardado;
    }
});