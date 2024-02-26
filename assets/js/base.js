
// Loading
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('loader--hidden');

    document.querySelector('.loader').addEventListener('transitionend', () => {
        document.body.removeChild(document.querySelector('.loader'))
    })
})

// function setActiveLink() {
//     var currentPath = document.title;

//     // Remove "active" class from all links
//     document.querySelectorAll('.nav-link').forEach(function (navLink) {
//         navLink.classList.remove('nav-active');

//         // Add "active" class to the link whose href matches the current page URL
//         if (navLink.getAttribute('location') == currentPath) {
//             navLink.classList.add('nav-active');
//         }
//     });
// }

// // Call the function on page load to set the initial active link
// document.addEventListener('DOMContentLoaded', setActiveLink);

// // Update the active link when the page URL changes
// window.addEventListener('popstate', setActiveLink);

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
// Call the function on page load to set the initial active link
document.addEventListener('DOMContentLoaded', setActiveLink);

// Update the active link when the document title changes
document.addEventListener('DOMSubtreeModified', setActiveLink);