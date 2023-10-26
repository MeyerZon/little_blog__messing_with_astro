import confetti from 'canvas-confetti';


document.querySelector('.hamburger').addEventListener('click', () => {
    confetti()
    document.querySelector('.nav-links').classList.toggle('expanded');

});