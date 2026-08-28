import React, { useEffect, useRef } from "react";

export const FireworksCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let particles = [];
    const colors = ["#f59e0b", "#fbbf24", "#dc2626", "#ea580c", "#38bdf8", "#ec4899", "#fde047"];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 2.2 + 0.8;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4.5 + 1.2;
        this.dx = Math.cos(angle) * velocity;
        this.dy = Math.sin(angle) * velocity;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.008;
        this.gravity = 0.04;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.gravity;
        this.alpha -= this.decay;
      }
    }

    const triggerBurst = (x, y) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const count = Math.floor(Math.random() * 25 + 20);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    let lastBurst = 0;
    const loop = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastBurst > 1200 && particles.length < 150) {
        const randomX = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
        const randomY = Math.random() * (canvas.height * 0.5) + canvas.height * 0.1;
        triggerBurst(randomX, randomY);
        lastBurst = timestamp;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].draw();
        particles[i].update();
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
};
