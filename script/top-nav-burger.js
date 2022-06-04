document.addEventListener('DOMContentLoaded', 
function() {
    document.querySelector('.top-nav__close-btn').addEventListener('click', toggleTopNav);
    document.querySelector('.header__burger').addEventListener('click', toggleTopNav);
});

function toggleTopNav() {
    document.querySelector('.top-nav__list').classList.toggle('top-nav__list--active');
};