// Script para cambiar el contador de pacientes de manera diaria por 5 pacientes que se atienden en la consulta 
// Cantidad inicial
let CantidadPacientesContador = 4023; // Cambia este valor a tu cantidad específica
let incremento = 2;

// Obtener datos del almacenamiento local
let cantidad = localStorage.getItem('cantidad') || CantidadPacientesContador;
let fechaUltimoAumento = localStorage.getItem('fechaUltimoAumento');

// Convertir a número
cantidad = Number(cantidad);

// Verificar si ha pasado un día desde el último aumento
if (fechaUltimoAumento) {
    let fechaActual = new Date();
    fechaUltimoAumento = new Date(fechaUltimoAumento);
    let unDiaEnMilisegundos = 24 * 60 * 60 * 1000;

    // Si ha pasado más de un día
    if (fechaActual - fechaUltimoAumento >= unDiaEnMilisegundos) {
        cantidad += incremento; // Aumentar la cantidad
        localStorage.setItem('cantidad', cantidad); // Guardar nueva cantidad
        localStorage.setItem('fechaUltimoAumento', fechaActual); // Actualizar la fecha
    }
} else {
    // Si no hay fecha, establecer la fecha de hoy
    localStorage.setItem('fechaUltimoAumento', new Date());
    localStorage.setItem('cantidad', cantidad); // Guardar cantidad inicial
}

// Mostrar la cantidad actual
document.getElementById('cantidad').textContent = `${cantidad}`;
