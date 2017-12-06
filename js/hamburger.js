var menus = document.getElementsByClassName('hamburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        console.log('open');
        m.classList.toggle('open');
    });
});