// Script para cambiar el contador de pacientes de manera diaria por 3 pacientes que se atienden en la consulta 
// Cantidad inicial
let CantidadPacientesContador = 10000; // Cambia este valor a tu cantidad específica
let incremento = 3;

// Fecha específica de inicio
let fechaInicio = new Date('2024-12-15T00:00:00'); // Fecha de inicio: 15-12-2024

// Obtener la fecha y hora actual
let fechaActual = new Date();

// Calcular la diferencia en días entre la fecha actual y la fecha de inicio
let diferenciaEnMilisegundos = fechaActual - fechaInicio;
let diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (24 * 60 * 60 * 1000));

// Calcular el número de aumentos de pacientes que deben haberse realizado desde la fecha de inicio
let cantidadIncrementos = diferenciaEnDias > 0 ? diferenciaEnDias : 0; // Solo contar incrementos si han pasado días

// Calcular la cantidad de pacientes final después de los aumentos
let cantidadFinal = CantidadPacientesContador + (cantidadIncrementos * incremento);

// Mostrar la cantidad actual
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cantidad').textContent = `${cantidadFinal}`;
});

