const V = document.title;

if (V == "Bowo Bengkel") {
    home = "#";
    about = "about";
    catalog = "catalog";
    contact = "contact";
} else if (V == "Bowo Bengkel | About") {
    home = "../";
    about = "#";
    catalog = "../catalog";
    contact = "../contact";
} else if (V == "Bowo Bengkel | Catalog") {
    home = "../";
    about = "../about";
    catalog = "#";
    contact = "../contact";
} else if (V == "Bowo Bengkel | Contact Us") {
    home = "../";
    about = "../about";
    catalog = "../catalog";
    contact = "#";
}

const navbarBox = document.querySelector(".nav-");
let navbar = document.createElement("header");
navbar.classList.add("fixed-top");
navbar.innerHTML = `<nav class="navbar navbar-expand-lg position-fixed w-100 shadow-sm bg-primary fixed-top my-0 py-0 text-light" >
<div class="container-md px-4 my-0 py-0">
    <a class="navbar-brand d-flex" href="#home"><img src="assets/img/icon.png" alt="" class="w-25"><h2 class="text-white my-auto ms-3">Bowo Bengkel</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end my-0 py-0 bg-primary" id="offcanvasRight">
        <div class="offcanvas-header p-4 text-light">
            <h2>Bowo Bengkel</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="link ms-lg-auto me-4 me-lg-0 text-end text-light">
            <ul class="n navbar-nav gap-md-3 gap-sm-3 gap-3" style="z-index: 10000;">
                <li class="nav-item align-items-center text-light">
                    <a class="nav-link text-light" href="${home}">Home</a>
                </li>
                <li class="nav-item align-items-center ">
                    <a class="nav-link text-light" href="${about}">About Us</a>
                </li>
                <li class="nav-item align-items-center ">
                    <a class="nav-link text-light" href="${catalog}">Catalog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="${contact}">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>`;
navbarBox.appendChild(navbar);
