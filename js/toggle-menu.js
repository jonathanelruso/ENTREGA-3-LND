const MENU = document.querySelector('.nav-menu');
const TOGGLE_BUTTON = document.querySelector('.menu-toggle');

TOGGLE_BUTTON.addEventListener('click', () => {
    if (MENU.classList.contains('active')) {
        // Aplicar la animación de cierre
        MENU.classList.remove('active');
        MENU.classList.add('closing');

        // Esperar a que la animación termine antes de resetear la clase
        setTimeout(() => {
            MENU.classList.remove('closing');
        }, 300); // Duración de la animación de cierre (300ms)
    } else {
        // Mostrar el menú con la animación de apertura
        MENU.classList.add('active');
    }
});