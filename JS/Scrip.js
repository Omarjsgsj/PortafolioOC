function typeWriter(elementId, text, delay = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Inicia el efecto con cada línea
window.onload = function() {
    typeWriter('line1', 'Hola!');
    setTimeout(() => typeWriter('line2', '  Y Soy'), 500); // Ajusta el tiempo según la longitud del texto anterior
    setTimeout(() => typeWriter('line3', 'Desarrollador Web'), 1500); // Ajusta el tiempo según la longitud del texto anterior
};

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
});