
'use client';

import React, { useRef, useEffect } from 'react';

interface MatrixBackgroundProps {
  dropSpeed?: number;
  density?: number;
  glowIntensity?: number;
  fontSize?: number;
  parallax?: number;
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  dropSpeed = 0.8,
  density = 0.975,
  glowIntensity = 5,
  fontSize = 14,
  parallax = 0.00005,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const characters = katakana + latin + nums;

    let drops: number[] = [];

    const setup = () => {
        const container = canvas.parentElement;
        if (!container) return;
        
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        const columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    };
    
    setup();

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.shadowColor = '#0f0';
        ctx.shadowBlur = glowIntensity;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > density) {
                drops[i] = 0;
            }
            drops[i] += dropSpeed;
        }
        animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
        setup();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const moveX = (clientX - window.innerWidth / 2) * -parallax;
      const moveY = (clientY - window.innerHeight / 2) * -parallax;
      if(canvas.parentElement){
        canvas.parentElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    window.addEventListener('resize', handleResize);
    if(parallax > 0){
        window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        if(parallax > 0){
          window.removeEventListener('mousemove', handleMouseMove);
        }
    };
  }, [dropSpeed, density, glowIntensity, fontSize, parallax]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden rounded-lg transition-transform duration-300 ease-out"
      style={{ pointerEvents: 'none' }}
    >
        <canvas ref={canvasRef} className="opacity-20" />
    </div>
  );
};
