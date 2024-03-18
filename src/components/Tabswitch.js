var currentPage = window.location.pathname;
var tabLinks = document.querySelectorAll('.header-tab a');

tabLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
        link.parentNode.classList.add('active-tab');
    }
});