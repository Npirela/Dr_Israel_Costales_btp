// Script para cambiar el contador de pacientes de manera diaria por 5 pacientes que se atienden en la consulta 
// Cantidad inicial
let CantidadPacientesContador = 10000; // Cambia este valor a tu cantidad específica
let incremento = 3;

// Fecha específica de inicio
let fechaInicio = new Date('2024-12-15T00:00:00'); // Fecha de inicio: 15-12-2024

// Obtener datos del almacenamiento local
let cantidad = localStorage.getItem('cantidad');
let fechaUltimoAumento = localStorage.getItem('fechaUltimoAumento');

// Si no hay cantidad almacenada, establecer cantidad inicial
if (cantidad === null) {
    cantidad = CantidadPacientesContador;
} else {
    cantidad = Number(cantidad); // Convertir a número
}

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
    // Si no hay fecha, establecer la fecha de inicio específica
    localStorage.setItem('fechaUltimoAumento', fechaInicio);
    localStorage.setItem('cantidad', cantidad); // Guardar cantidad inicial
}

// Mostrar la cantidad actual
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cantidad').textContent = `${cantidad}`;
});

