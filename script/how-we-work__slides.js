document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work-steps__step').forEach(el =>
    {
        el.addEventListener('click', function(event) {
            var stepLinks = document.querySelectorAll('.work-steps__step');
            
            stepLinks.forEach(el2 => el2.classList.remove('work-steps__active'));
            event.target.classList.add('work-steps__active');

            var index = Array.prototype.indexOf.call(stepLinks, event.target);
            var slides = document.querySelectorAll('.how-we-work__slide');
            slides.forEach(el => el.classList.remove('how-we-work__slide--visible'));
            
            slides[index].classList.add('how-we-work__slide--visible');
        })
    })
})