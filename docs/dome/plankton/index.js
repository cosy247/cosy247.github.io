const PLANKTON_AMOUNT = 50;
const CANVAS_SIZE = 500;
const PLANKTON_MAX_SIZE = 30;
const PLANKTON_MIN_SIZE = 15;
const MAX_EFFECT = 0.6;
const ADD_TIME_COUNT = 50;

const canvasDom = document.querySelector('canvas');
const ctx = canvasDom.getContext('2d');
const planktons = [];

canvasDom.width = CANVAS_SIZE;
canvasDom.height = CANVAS_SIZE;
for (let index = 0; index < PLANKTON_AMOUNT; index++) {
    addCircel();
}

function createCircle({ x, y, r, fill = '#ae7' }) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = '#8a78';
    ctx.stroke();
}

function addCircel(isTop = false) {
    const r = PLANKTON_MIN_SIZE + Math.random() * (PLANKTON_MAX_SIZE - PLANKTON_MIN_SIZE);
    planktons.push({
        r,
        x: r + Math.random() * (CANVAS_SIZE - r * 2),
        y: isTop ? -r : r + Math.random() * (CANVAS_SIZE - r * 2),
        fill: `#${(Math.random() * 99999999).toFixed(0).padStart(8, 0)}`,
    });
}

function nextStep(count = 0) {
    if (count == ADD_TIME_COUNT) {
        count = 0;
        addCircel(true);
    }
    ctx.fillStyle = 'rgba(255,255,255)';
    ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fill();
    planktons.forEach((plankton) => {
        const { x, y, r } = plankton;
        let effectX = 0;
        let effectY = 1;
        planktons.forEach(({ x: x2, y: y2, r: r2 }) => {
            if (x == x2 && y == y2) return;
            const distance = ((x - x2) ** 2 + (y - y2) ** 2) ** 0.5;
            if (distance > r + r2) return;
            effectX += (MAX_EFFECT * (r + r2 - distance) * (x - x2)) / distance;
            effectY += (MAX_EFFECT * (r + r2 - distance) * (y - y2)) / distance;
        });
        if (x + r >= CANVAS_SIZE && effectX > 0) {
            plankton.x = CANVAS_SIZE - r;
            effectX = 0;
        } else if (x - r <= 0 && effectX < 0) {
            plankton.x = r;
            effectX = 0;
        }
        if (y + r >= CANVAS_SIZE && effectY > 0) {
            plankton.y = CANVAS_SIZE - r;
            effectY = 0;
        }
        plankton.x += effectX;
        plankton.y += effectY;
        createCircle(plankton);
    });
    requestAnimationFrame(() => nextStep(count + 1));
}

nextStep();
