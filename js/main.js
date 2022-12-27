const canvas = document.querySelector('.noise')
const ctx = canvas.getContext('2d');

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    noise(ctx);
}

const noise = (ctx) => {
    const width = ctx.canvas.width,
        height = ctx.canvas.height,
        imageData = ctx.createImageData(width, height),
        buffer32 = new Uint32Array(imageData.data.buffer)

    for (let i = 0; i < buffer32.length;) {
        buffer32[i++] = ((255 * Math.random()) | 0) << 24;
    }

    ctx.putImageData(imageData, 0, 0);
}


// resize();
// window.addEventListener('resize', () => resize())

// noise(ctx);