var currentPage = window.location.pathname;
    var tabLinks = document.querySelectorAll('.header-tab a');

    tabLinks.forEach(function(link) {
        if (currentPage === '/' || currentPage === '/index.html') {
            if (link.getAttribute('href') === '/') {
                link.parentNode.classList.add('active-tab');
            }
        } else {
            if (link.getAttribute('href') === currentPage) {
                link.parentNode.classList.add('active-tab');
            }
        }
    });