/*const myImage = new Image();
myImage.src = "img/my_image.jpg" 

rose.addEventListener('load', function(){ 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 706;

ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

let particlesArray = [];
const numberOfParticles = 5000;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * offscreenBuffering.anchor();
        this.size = Math.random() * 1, 5 + 1;
    }

    update() {
        this.y += this.velocity;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init(){
    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new particle);
    }
}

init();
function animate(){
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillstyle = 'rgd(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();

    }
    requestAnimationFrame(animate);
}
animate();

}); */
