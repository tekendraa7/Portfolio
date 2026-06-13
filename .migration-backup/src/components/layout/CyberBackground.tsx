
'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CyberBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    const grid = gridRef.current;
    if (!canvas || !grid) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;

    // --- Resize Handler ---
    function resize() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);


    // --- Matrix Rain Setup ---
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    let drops = new Array(columns).fill(1);

    function drawMatrix() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // --- Floating Particles Setup ---
    let particles: any[] = [];
    function spawnParticle() {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -Math.random() * 1.5 - 0.5,
            size: Math.random() * 2 + 1,
            life: 1000
        });
    }

    function drawParticles() {
        if (!ctx) return;
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 1;

            if(p.life <= 0) {
                particles.splice(i, 1);
            }

            ctx.fillStyle = `rgba(0, 255, 255, ${p.life / 500})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    let particleInterval = setInterval(spawnParticle, 300);

    // --- Mouse Parallax ---
    const handleMouseMove = (e: MouseEvent) => {
        if (!grid) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        grid.style.transform = `perspective(500px) rotateX(${65 + y}deg) rotateY(${x}deg)`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    // --- Animation Loop ---
    let lastMatrixDraw = 0;
    const draw = (timestamp: number) => {
        if (timestamp - lastMatrixDraw > 40) {
            drawMatrix();
            lastMatrixDraw = timestamp;
        }
        drawParticles();
        animationFrameId = requestAnimationFrame(draw);
    };
    draw(0);

    // --- Cleanup ---
    return () => {
        window.removeEventListener('resize', resize);
        document.removeEventListener('mousemove', handleMouseMove);
        clearInterval(particleInterval);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="bg-root" ref={mountRef} className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div id="hacker-grid" ref={gridRef}></div>
        <canvas id="matrix" ref={matrixCanvasRef} className="fixed top-0 left-0 pointer-events-none"></canvas>
      </div>
    </>
  );
}
