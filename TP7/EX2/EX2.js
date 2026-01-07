const canvas = document.getElementById('pacmanCanvas');
const ctx = canvas.getContext('2d');

// Dessin de Pac-Man
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.moveTo(200, 200);
ctx.arc(200, 200, 100, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(200, 200);
ctx.fill();
ctx.closePath();

// Dessin de l'oeil
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(215, 160, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "white";
// On le place un peu en haut à droite du centre de l'œil noir
ctx.arc(220, 155, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// Dessin des pastilles
ctx.fillStyle = "white";
// Bille 1
ctx.beginPath();
ctx.arc(330, 200, 10, 0, 2 * Math.PI);
ctx.fill();
// Bille 2
ctx.beginPath();
ctx.arc(380, 200, 10, 0, 2 * Math.PI);
ctx.fill();