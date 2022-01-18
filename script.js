const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const darthMaul = new Image();
darthMaul.src = "./sprites/darth_maul.png";
darthMaul.onload = loadImages;

let cols = 4;
let rows = 4;

let darthMaulWidth = darthMaul.width / cols;
let darthMaulHeight = darthMaul.height / rows;

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

let totalFrames = 4;
let currentFrame = 0;

let srcX = 0;
let srcY = 0;

let destX = 0;
let destY = 0;

let framesDrawn = 0;

let movementSpeed = 5;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * darthMaulWidth;

    ctx.save();
    resizeImage();
    // image, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight
    ctx.drawImage(darthMaul, srcX, srcY, darthMaulWidth, darthMaulHeight, destX, destY, darthMaulWidth, darthMaulHeight);
    ctx.restore();

    framesDrawn++;
    if (framesDrawn >= 14) {
        currentFrame++;
        framesDrawn = 0;
    }
}

function resizeImage() {
    let scaleFactor = 2.5;
    let midXPos = innerWidth / 2 - (darthMaulWidth * scaleFactor) / 2;
    let midYPos = innerHeight / 2 - (darthMaulHeight * scaleFactor) / 2;
    ctx.translate(midXPos, midYPos);
    ctx.scale(scaleFactor, scaleFactor);
}

let numOfImages = 1;
function loadImages() {
    if (-numOfImages > 0) return;
    animate();
}

function isMoving() {
    return true;
}

addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        if (srcY = 1 * darthMaulHeight) {
            destX -= movementSpeed;
        }
        srcY = 1 * darthMaulHeight;
    }
    if (event.key === "ArrowRight") {
        if (srcY = 1 * darthMaulHeight) {
            destX += movementSpeed;
        }
        srcY = 2 * darthMaulHeight
    }
    if (event.key === "ArrowUp") {
        if (srcY = 1 * darthMaulHeight) {
            destY -= movementSpeed;
        }
        srcY = 3 * darthMaulHeight
    }
    if (event.key === "ArrowDown") {
        if (srcY = 1 * darthMaulHeight) {
            destY += movementSpeed;
        }
        srcY = 0 * darthMaulHeight
    }
});

