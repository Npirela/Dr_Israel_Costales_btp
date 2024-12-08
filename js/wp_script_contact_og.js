// Función para enviar el formulario a Whatsapp
function sendToWhatsapp(){
    let number = "+593993686522"; // Aquí debes poner el número de teléfono al que se enviará el mensaje

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Crear la URL con los datos del formulario
    var url = "https://wa.me/" + number + "?text=" 
    + "Nombre: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Telefono: " + mobile + "%0a"
    + "Asunto: " + subject + "%0a"
    + "Mensaje: " + message + "%0a%0a";

    // Abrir la URL en una nueva ventana
    window.open(url, '_blank').focus();
}
