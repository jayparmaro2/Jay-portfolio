// responsive-menu
document.addEventListener("DOMContentLoaded", function() {
    var responsiveMenu = document.querySelector(".responsive-menu");
    var mobileMenu = document.querySelector(".mobile-menu");

    // Add click event listener to toggle 'active' class on responsive-menu and mobile-menu
    responsiveMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

$('.animate-slide').animatedHeadline({
    animationType: 'slide'
});