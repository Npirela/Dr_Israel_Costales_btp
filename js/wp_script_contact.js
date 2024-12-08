function sendToWhatsapp() {
    // Limpiar mensajes de error previos
    clearErrors();

    // Obtener los valores del formulario
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Validaciones
    if (!name) {
        showError('name', 'Por favor, ingrese su nombre.');
        return;
    }

    // Validación del correo electrónico (con expresión regular estricta)
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        showError('email', 'Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Validación del número de teléfono (debe comenzar con "+" seguido de números)
    let phonePattern = /^\+(\d{1,3})\d{7,14}$/; // Acepta códigos de país como +34, +1, etc.
    if (!mobile || !phonePattern.test(mobile)) {
        showError('mobile', 'Por favor, ingrese un número de teléfono válido con el código de país (ejemplo: +34XXXXXXXX).');
        return;
    }

    // Validación del mensaje
    if (!message) {
        showError('message', 'Por favor, ingrese un mensaje.');
        return;
    }

    // Si todas las validaciones pasan, crear la URL de WhatsApp
    let number = "+593993686522"; // Cambia este número por el que deseas usar.

    var url = "https://wa.me/" + number + "?text=" 
    + "Nombre: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Telefono: " + mobile + "%0a"
    + "Asunto: " + subject + "%0a"
    + "Mensaje: " + message + "%0a%0a";

    // Abrir la URL en una nueva pestaña
    window.open(url, '_blank').focus();
}

// Función para mostrar mensajes de error debajo de cada campo
function showError(field, message) {
    document.getElementById(field).classList.add('is-invalid');
    document.getElementById(field + '-error').innerText = message;
    document.getElementById(field + '-error').style.display = 'block';
}

// Función para limpiar los errores previos
function clearErrors() {
    let fields = ['name', 'email', 'mobile', 'message'];
    fields.forEach(function(field) {
        document.getElementById(field).classList.remove('is-invalid');
        document.getElementById(field + '-error').style.display = 'none';
    });
}