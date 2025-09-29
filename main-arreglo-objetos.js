const form = document.getElementById('formulario-curso');
const inpCurso = document.getElementById('curso');
const inpNombre = document.getElementById('nombre-profesor');
const inpPrecio = document.getElementById('precio');
const inpCiudad = document.getElementById('ciudad');
const inpCupo = document.getElementById('cupo');
const mensaje = document.getElementById('mensaje-curso');
const btnBorrar = document.getElementById('borrar');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const curso = inpCurso.value.trim();
    const profesor = inpNombre.value.trim();
    const precio = inpPrecio.value.trim();
    const ciudad = inpCiudad.value.trim();
    const cupo = inpCupo.value.trim();

    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert('Por favor llenar todos los campos(son obligatorios)');
        return;
    };

    // Anteriormente era solo un valor y ahora estamos alimentanto un objeto
    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    };

    //Capturamos el arreglo existente en el localStorage o lo creamos vacio si no existe previamente 
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];

    // Agregamos al arreglo cursosGuardados [] el nuevoCurso {}
    cursosGuardados.push(nuevoCurso);

    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));

    form.reset();
});

document.addEventListener('DOMContentLoaded', () =>{
    const cursoCreado = localStorage.getItem('curso');
    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        mensaje.innerHTML = 'Curso:' + objetoCurso.nombre + '<br>' + ' Profesor:' + objetoCurso.profesor + '<br>' + ' Precio:' + objetoCurso.precio + '<br>' + ' Ciudad:' + objetoCurso.ciudad + '<br>' + ' Cupo:' + objetoCurso.cupo;
    }
});

btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('cursos');
    mensaje.textContent = "Bienvenido curso indefinido";
});
