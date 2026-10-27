
var botones = document.querySelectorAll('.pregunta');
var contenidos = document.querySelectorAll('.respuesta');

// Recorremos los botones para asignarles el clic
for (let i = 0; i < botones.length; i++) {
    
    botones[i].onclick = function() {
        
        // Primero cerramos TODO o sea quitamos la clase activo
        for (let j = 0; j < botones.length; j++) {
            contenidos[j].classList.remove('activo');
            botones[j].classList.remove('activo');
        }
        
        // Luego abrimos Solo el que se hizo clic
        contenidos[i].classList.add('activo');
        botones[i].classList.add('activo');
    };
}