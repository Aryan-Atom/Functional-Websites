const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ball = document.querySelector(".ball");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const segments = 10;
const rope = [];

// Initialize rope points
for (let i = 0; i <= segments; i++) {
  rope.push({ x: mouseX, y: mouseY, oldX: mouseX, oldY: mouseY });
}

document.body.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const gravity = 0.5;
const friction = 0.98;
const segmentLength = 20;

function updateRope() {
  // Verlet integration for rope physics
  for (let i = 0; i < rope.length; i++) {
    const p = rope[i];
    const vx = (p.x - p.oldX) * friction;
    const vy = (p.y - p.oldY) * friction;

    p.oldX = p.x;
    p.oldY = p.y;
    p.x += vx;
    p.y += vy + gravity;
  }

  // First segment follows the mouse
  rope[0].x = mouseX;
  rope[0].y = mouseY;

  // Apply constraints to segments
  for (let j = 0; j < 5; j++) { // multiple iterations for stability
    for (let i = 0; i < rope.length - 1; i++) {
      const p1 = rope[i];
      const p2 = rope[i + 1];

      let dx = p2.x - p1.x;
      let dy = p2.y - p1.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      let diff = dist - segmentLength;
      let offsetX = (dx / dist) * diff * 0.5;
      let offsetY = (dy / dist) * diff * 0.5;

      p1.x += offsetX;
      p1.y += offsetY;
      p2.x -= offsetX;
      p2.y -= offsetY;
    }
  }
}

function drawRope() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(rope[0].x, rope[0].y);
  for (let i = 1; i < rope.length; i++) {
    ctx.lineTo(rope[i].x, rope[i].y);
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Ball at last segment
  const last = rope[rope.length - 1];
  ball.style.left = last.x + "px";
  ball.style.top = last.y + "px";
}

function animate() {
  updateRope();
  drawRope();
  requestAnimationFrame(animate);
  
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
