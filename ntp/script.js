const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ["#0bc9e4", "#ff6f61", "#ffd54f"];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

class Particle {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
        if (this.y - this.radius > canvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function createParticles() {
    for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speed = Math.random() * 1 + 0.5;

        particles.push(new Particle(x, y, radius, color, speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

createParticles();
animate();
