// Crear el audio globalmente
let audio;

// Función para manejar la carga y reproducción del audio automáticamente al cargar la página
window.onload = function() {
    // Crear el objeto de audio y cargar el archivo
    audio = new Audio('flor_amarilla.mp3');  // Ruta a tu archivo de audio
    audio.type = 'audio/mpeg';
    audio.autoplay = true;  // Hacer que se reproduzca automáticamente
    audio.currentTime = 18;  // Establecer el tiempo inicial en el segundo 18
    audio.play();

    // Eliminar el mensaje de bienvenida después de 1 segundo
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
    }, 1000);
}

// Función para mostrar la respuesta según el botón presionado
function showResponse(answer) {
    const responseElement = document.getElementById("response");

    if (answer === 'Sí') {
        responseElement.innerHTML = "¡Ayyy! ¿A qué hora? ¿Dónde? ¿Cuándo? ¡Jajaja! 💖";
    } else if (answer === 'No') {
        responseElement.innerHTML = "No era una opción válida... ¡jaja! ❤️";
    }
}
