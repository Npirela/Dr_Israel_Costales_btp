// Script para cambiar el contador de pacientes de manera continua
// Cantidad inicial
let CantidadPacientesContador = 10000; // Cambia este valor a tu cantidad específica

// Fecha específica de inicio
let fechaInicio = new Date('2024-12-15T00:00:00'); // Fecha de inicio: 15-12-2024

// Obtener la fecha actual
let fechaActual = new Date();

// Calcular la diferencia en días entre la fecha actual y la fecha de inicio
let diferenciaEnMilisegundos = fechaActual - fechaInicio;
let diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (24 * 60 * 60 * 1000));

// Inicializar la cantidad final de pacientes con el valor inicial
let cantidadFinal = CantidadPacientesContador;

// Recorrer los días desde la fecha de inicio hasta la fecha actual
for (let i = 0; i < diferenciaEnDias; i++) {
    let fechaDiaActual = new Date(fechaInicio);
    fechaDiaActual.setDate(fechaDiaActual.getDate() + i); // Avanzar un día

    // Verificar si el día es par o impar y ajustar el incremento
    if (fechaDiaActual.getDate() % 2 === 0) { // Día par
        cantidadFinal += 3; // Incremento par (3)
    } else { // Día impar
        cantidadFinal += 4; // Incremento impar (4)
    }
}

// Mostrar la cantidad actual
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cantidad').textContent = `${cantidadFinal}`;
});