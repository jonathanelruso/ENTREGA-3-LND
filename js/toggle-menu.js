const MENU = document.querySelector('.nav-menu');
const TOGGLE_BUTTON = document.querySelector('.menu-toggle');

TOGGLE_BUTTON.addEventListener('click', () => {
    if (MENU.classList.contains('active')) {
        MENU.classList.remove('active');
        MENU.classList.add('closing');
        setTimeout(() => {
            MENU.classList.remove('closing');
        }, 300);
    } else {
        MENU.classList.add('active');
    }
});