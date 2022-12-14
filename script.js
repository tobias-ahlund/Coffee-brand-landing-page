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

const mobileHero = document.querySelector(".hero");

const desktopHero = document.querySelector(".hero-desktop");

var w = window.innerWidth

if (w <= 767) {
    founderNameMobile.classList.add("visible");
    mobileHero.classList.add("visible");
} else if (w >= 768) {
    founderNameMobile.classList.add("hidden");
    mobileHero.classList.add("hidden");
}

if (w <= 767) {
    founderNameDesktop.classList.add("hidden");
    desktopHero.classList.add("hidden");
} else if (w >= 768) {
    founderNameDesktop.classList.add("visible");
    desktopHero.classList.add("visible");
}
