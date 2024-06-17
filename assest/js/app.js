// responsive-menu
document.addEventListener("DOMContentLoaded", function() {
    var responsiveMenu = document.querySelector(".responsive-menu");
    var mobileMenu = document.querySelector(".mobile-menu");

    responsiveMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});