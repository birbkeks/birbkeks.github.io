const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'abcdefghijklmoprstuvwxyz';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0.2, '#FF0000'); // Red at top
gradient.addColorStop(0.3, '#FF7F00'); // Orange
gradient.addColorStop(0.4, '#FFFF00'); // Yellow
gradient.addColorStop(0.5, '#00FF00'); // Green
gradient.addColorStop(0.7, '#0000FF'); // Blue
gradient.addColorStop(0.9, '#9400D3'); // Purple at bottom

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

let speed = 40; // Milliseconds between each frame

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.09)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < rainDrops.length; i++) {
    // Fill the text with the gradient
    context.fillStyle = gradient;
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.font = `${fontSize}px monospace`;
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

window.addEventListener('load', () => {
  draw();
  setInterval(draw, speed);
});
