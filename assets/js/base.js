// Loading
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    });
});

function setActiveLink() {
    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        if (navLink.getAttribute('location') === V) {
            navLink.classList.add('nav-active');
        }
    });
}

setActiveLink();