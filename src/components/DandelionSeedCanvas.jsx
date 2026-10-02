import React, { useEffect, useRef } from 'react';

export default function DandelionSeedCanvas({ mousePos }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize 45 dandelion seed particles
    const particleCount = 45;
    const particles = [];

    const createSeed = (initialX, initialY) => {
      return {
        x: initialX !== undefined ? initialX : Math.random() * canvas.width,
        y: initialY !== undefined ? initialY : Math.random() * canvas.height,
        vx: (Math.random() - 0.7) * 0.8, // Drifting mostly leftwards
        vy: (Math.random() - 0.8) * 0.6, // Drifting upwards
        size: Math.random() * 12 + 10,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.6 + 0.35,
        stemLength: Math.random() * 14 + 10,
        fluffCount: Math.floor(Math.random() * 5) + 6
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createSeed());
    }
    particlesRef.current = particles;

    // Click to burst seeds
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        const seed = createSeed(clickX, clickY);
        seed.vx = Math.cos(angle) * speed;
        seed.vy = Math.sin(angle) * speed - 1.5;
        particlesRef.current.push(seed);
      }
      // Cap particle count
      if (particlesRef.current.length > 90) {
        particlesRef.current = particlesRef.current.slice(-70);
      }
    };

    window.addEventListener('click', handleClick);

    // Draw single dandelion seed
    const drawDandelionSeed = (ctx, p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      // Seed core capsule at bottom
      ctx.fillStyle = '#6b4e2e';
      ctx.beginPath();
      ctx.ellipse(0, p.stemLength, 1.2, 3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Thin stem
      ctx.strokeStyle = '#d0c3ab';
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      ctx.moveTo(0, p.stemLength);
      ctx.lineTo(0, 0);
      ctx.stroke();

      // Feathery Parachute (fluff top)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.lineWidth = 0.8;
      const radius = p.size;
      for (let i = 0; i < p.fluffCount; i++) {
        const angle = -Math.PI / 2 + ((i - (p.fluffCount - 1) / 2) * (Math.PI / 3)) / (p.fluffCount / 2);
        const endX = Math.cos(angle) * radius;
        const endY = Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Tiny tip tuft
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(endX, endY, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // Animation Loop
    let lastTime = performance.now();
    const render = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mX = mousePos?.x || canvas.width / 2;
      const mY = mousePos?.y || canvas.height / 2;

      particlesRef.current.forEach((p) => {
        // Ambient wind motion
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Sine wave swaying
        p.x += Math.sin(time * 0.0015 + p.y * 0.01) * 0.3;

        // Mouse repulsion force
        const dx = p.x - mX;
        const dy = p.y - mY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }

        // Damping velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around screen boundaries
        if (p.x < -40) p.x = canvas.width + 30;
        if (p.x > canvas.width + 40) p.x = -30;
        if (p.y < -40) p.y = canvas.height + 30;
        if (p.y > canvas.height + 40) p.y = -30;

        drawDandelionSeed(ctx, p);
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ opacity: 0.95 }}
    />
  );
}
