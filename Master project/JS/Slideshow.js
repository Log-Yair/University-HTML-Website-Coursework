const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides .parallax-text-field');

const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');

let counter = 1;
const size = images[0].clientWidth;

slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
console.log(images.length);

nextbtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    slides.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevbtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slides.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

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