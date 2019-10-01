const $mainNav = document.querySelector('.main-nav');

function mainNavScroll () {
    const windowTop = window.pageYOffset;

    if (windowTop > 100) {
        $mainNav.classList.add('-scrolled');
    } else {
        $mainNav.classList.remove('-scrolled');
    }

};

window.addEventListener('scroll', function() {
    mainNavScroll();
});