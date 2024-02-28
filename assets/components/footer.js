const footerBox = document.querySelector(".footer-");
let footer = document.createElement("div");
footer.classList.add("container");
footer.innerHTML = `
<div class="row px-5 pt-5 pb-2">
    <div class="col-12 col-lg-4 text-light">
    <a href="${home}" class="d-flex gap-2 ">
        <img src="${icon}" alt="" style="width: 130px;">
        <h2 class="my-auto fw-bold text-light">Bowo <br>Bengkel</h2>
    </a>
    <div class="mt-3 text-light">
        <p>Bowo Bengkel adalah usaha yang bergerak di bidang pelayanan jasa servis mobil mainan. </p>
    </div>
    </div>
    <div class="col-12 col-lg-4 text-light">
    <h2 class="fw-bold">Info Kontak</h2>
    <div class="d-flex mt-4">
        <i class="fa-solid fa-location-dot fa-2x me-4 mt-2"></i>
        <p>Jl. Tanjung Blok Pinang No. 5 Malang Jawa Timur Indonesia</p>
    </div>
    <div class="d-flex mt-1">
        <i class="fa-solid fa-phone fa-2x me-3 mt-2"></i>
        <p>+62 123 456 7890 <br>
        +62 098 765 4321</p>
    </div>
    <div class="d-flex mt-1">
        <i class="fa-solid fa-envelope fa-2x me-3 mt-2"></i>
        <p>bowo@bengkel.id <br>bowobengkel@corp.com</p>
    </div>
    </div>
    <div class="col-12 col-lg-4 text-light">
    <h2 class="fw-bold">Links</h2>
    <div class="d-flex flex-column mt-4">
        <a href="${home}" class="text-light">Beranda</a>
        <a href="${about}" class="text-light">Tentang Kami</a>
        <a href="${catalog}" class="text-light">Katalog</a>
        <a href="${contact}" class="text-light">Kontak Kami</a>
    </div>
    </div>
    <hr class="text-light mt-3">
    <p class="text-light text-center">Developed by El Development</p>
</div>`;
footerBox.appendChild(footer);
