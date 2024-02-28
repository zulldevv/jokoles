
// Loading
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('loader--hidden');

    document.querySelector('.loader').addEventListener('transitionend', () => {
        document.body.removeChild(document.querySelector('.loader'))
    })
})

function setActiveLink() {
    var currentTitle = document.title;

    // Remove "nav-active" class from all links
    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.classList.remove('nav-active');

        // Add "nav-active" class to the link whose data-location matches the document title
        if (navLink.getAttribute('location') === currentTitle) {
            navLink.classList.add('nav-active');
        }
    });
}

setActiveLink();