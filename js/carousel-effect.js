// Constantes en snake_case y mayúsculas
const CAROUSEL_WRAPPER = document.querySelector('.carousel-wrapper');
const CAROUSEL_ITEMS = document.querySelectorAll('.carousel-item');
const TOTAL_ITEMS = CAROUSEL_ITEMS.length;
let currentIndex = 0;

// Función para cambiar la posición del carrusel
function moveCarousel() {
    currentIndex = (currentIndex + 1) % TOTAL_ITEMS;
    let offset = -currentIndex * 100;
    CAROUSEL_WRAPPER.style.transform = `translateX(${offset}%)`;
    rotateImages();
}

// Función para aplicar la rotación de las imágenes
function rotateImages() {
    CAROUSEL_ITEMS.forEach((item, index) => {
        let rotationDegree = 360 * (index + 1);
        item.querySelector('img').style.transform = `rotate(${rotationDegree}deg)`;
    });
}

// Configurar el intervalo para mover el carrusel cada 3 segundos
setInterval(moveCarousel, 3000);

// Iniciar la rotación de las imágenes
rotateImages();
