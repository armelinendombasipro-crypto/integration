const IMAGE_SRC =
    'https://c.files.bbci.co.uk/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg';

const mainCanvas = document.getElementById('mainCanvas');
const magnifierCanvas = document.getElementById('magnifierCanvas');

const ctx = mainCanvas.getContext('2d');
const magCtx = magnifierCanvas.getContext('2d');

mainCanvas.width = 640;
mainCanvas.height = 360;
magnifierCanvas.width = 150;
magnifierCanvas.height = 150;

const img = new Image();
img.crossOrigin = "Anonymous";

img.onload = () => {
    ctx.drawImage(img, 0, 0, mainCanvas.width, mainCanvas.height);

    mainCanvas.addEventListener('mousemove', e => {
        const rect = mainCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const scaleX = img.naturalWidth / mainCanvas.width;
        const scaleY = img.naturalHeight / mainCanvas.height;

        magCtx.clearRect(0, 0, 150, 150);
        magCtx.save();
        magCtx.beginPath();
        magCtx.arc(75, 75, 75, 0, Math.PI * 2);
        magCtx.clip();

        magCtx.drawImage(
            img,
            x * scaleX - 75,
            y * scaleY - 75,
            150,
            150,
            0,
            0,
            150,
            150
        );

        magCtx.restore();
    });

    mainCanvas.addEventListener('mouseleave', () => {
        magCtx.clearRect(0, 0, 150, 150);
    });
};

img.src = IMAGE_SRC;
