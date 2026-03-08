/*usando modals para mostrar imagen como pop up*/
/* comentar al deshabilitar el popup linea 136 en adelante de index html */

const myModal = bootstrap.Modal.getOrCreateInstance('#ad-popup');

window.addEventListener('DOMContentLoaded', () => {myModal.show();});