document.addEventListener('DOMContentLoaded', 
function() {
    document.querySelector('.top-nav__close-btn').addEventListener('click', toggleTopNav);
    document.querySelector('.header__burger').addEventListener('click', toggleTopNav);
    window.addEventListener('resize', resizeTopNav);
});

function toggleTopNav() {
    resizeTopNav();
    document.querySelector('.top-nav__list').classList.toggle('top-nav__list--active');
};

function resizeTopNav() {
    var h = document.querySelector('.hero').clientHeight + document.querySelector('.header').clientHeight + 1;
    document.querySelector('.top-nav__list').style.height = h + 'px';
}