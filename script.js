let menuSelect = document.querySelector(".hamburger-menu");

let hiddenMenu = document.querySelector(".list-menu");

menuSelect.addEventListener("click", function() {
        if (hiddenMenu.classList.contains("active")) {
            hiddenMenu.classList.remove("active");
        } else {
            hiddenMenu.classList.add("active");
        }
});


const founderNameMobile = document.querySelector(".founder-section-p-name");

const founderNameDesktop = document.querySelector(".founder-name");

var w = window.innerWidth

if (w <= 767) {
    founderNameMobile.classList.add("visible");
} else if (w >= 768) {
    founderNameMobile.classList.add("hidden");
}

if (w <= 767) {
    founderNameDesktop.classList.add("hidden");
} else if (w >= 768) {
    founderNameDesktop.classList.add("visible");
}
