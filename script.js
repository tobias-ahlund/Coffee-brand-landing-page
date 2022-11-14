let menuSelect = document.querySelector(".hamburger-menu");

let hiddenMenu = document.querySelector(".list-menu");

menuSelect.addEventListener("click", function() {
        if (hiddenMenu.classList.contains("active")) {
            hiddenMenu.classList.remove("active");
        } else {
            hiddenMenu.classList.add("active");
        }
});