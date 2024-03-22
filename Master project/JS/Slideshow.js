const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides .parallax-text-field');

const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');

let counter = 1;

var slider;

let size = images[0].clientWidth;


slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextbtn.addEventListener('click', forward);

prevbtn.addEventListener('click', backward)

slides.addEventListener('transitionend', () => {
    if (images[counter].id === 'light-parallex-text-field-last') {
        slides.style.transition = 'none';
        counter = images.length - 2;
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'light-parallex-text-field-first') {
        slides.style.transition = 'none';
        counter = images.length - counter;
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

window.addEventListener('resize', reshape);

function reshape() {
    size = images[0].clientWidth;
}

function forward() {
    if (counter >= images.length - 1) return;
    slides.style.transition = 'transform 1s ease-in-out';
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    slide();
}

function backward() {
    if (counter <= 0) return;
    slides.style.transition = 'transform 1s ease-in-out';
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    slide();
}

function slide() {
    clearInterval(slider);
    slider = setInterval(forward, 5000);
}

slide();