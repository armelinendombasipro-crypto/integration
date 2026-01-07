const IMAGE_SRC =
    'https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/06/pepefroggie-770x432-2.jpg?resize=644%2C362&ssl=1';

const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const colorDisplay = document.getElementById('colorDisplay');
const colorInfo = document.getElementById('colorInfo');

const img = new Image();
img.crossOrigin = "Anonymous";

img.onload = () => {
    canvas.width = 400;
    canvas.height = 300;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);

        const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
        const hex =
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
                .toUpperCase();

        colorDisplay.style.backgroundColor = `rgb(${r},${g},${b})`;
        colorInfo.innerHTML = `
            <p>Coordonnées : (${x}, ${y})</p>
            <p>RGB : ${r}, ${g}, ${b}</p>
            <p>HEX : ${hex}</p>
        `;
    });
};

img.src = IMAGE_SRC;
