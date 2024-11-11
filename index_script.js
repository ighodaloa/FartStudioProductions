// JavaScript to change image and text on hover
const developer1 = document.getElementById('developer1');
const developer2 = document.getElementById('developer2');

developer1.addEventListener('mouseenter', () => {
    developer1.querySelector('img').src = 'IAmtdIG.png'; //Change to in-game image
    developer1.querySelector('p').textContent = 'agbonkhese23'; //Change text
});

developer1.addEventListener('mouseleave', () => {
    developer1.querySelector('img').src = 'IAmtd.png'; //Reset to original image
    developer1.querySelector('p').textContent = 'Ighodalo Agbonkhese'; //Reset text
});

developer2.addEventListener('mouseenter', () => {
    developer2.querySelector('img').src = 'QBmtdIG.png'; //Change to in-game image
    developer2.querySelector('p').textContent = 'killerQ32'; //Change text
});

developer2.addEventListener('mouseleave', () => {
    developer2.querySelector('img').src = 'QBmtd.png'; //Reset to original image
    developer2.querySelector('p').textContent = 'Quinten Ballard'; //Reset text
});