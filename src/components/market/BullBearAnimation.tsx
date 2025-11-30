
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BullBearAnimationProps extends React.HTMLAttributes<HTMLCanvasElement> {}

export const BullBearAnimation: React.FC<BullBearAnimationProps> = ({ className, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const [themeColors, setThemeColors] = useState({
    bull: '135, 100%, 45%', // Greenish
    bear: '0, 84%, 60%', // Red
    primary: '210, 100%, 56%', // Blue for grid
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computedStyles = getComputedStyle(document.documentElement);
      const getThemeColor = (varName: string) => computedStyles.getPropertyValue(varName).trim().replace(/\s+/g, ',');
      setThemeColors({
        bull: getThemeColor('--chart-2'),
        bear: getThemeColor('--destructive'),
        primary: getThemeColor('--primary'),
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let bullX = 0;
    let bearX = 0;
    let phase = 'charging'; // charging, clashing, resetting
    let clashFrame = 0;
    const chargeSpeed = 2;
    const resetSpeed = 4;
    const clashDuration = 30; // frames

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      width = rect.width;
      height = rect.height;
      bullX = -80;
      bearX = width + 80;
      phase = 'charging';
    };

    const drawBull = (x: number) => {
        ctx.strokeStyle = `hsl(${themeColors.bull})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `hsla(${themeColors.bull}, 0.7)`;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        // Horns
        ctx.moveTo(x + 10, height / 2 - 20);
        ctx.bezierCurveTo(x - 10, height / 2 - 40, x - 30, height / 2 - 30, x - 20, height / 2 - 10);
        ctx.moveTo(x - 10, height / 2 - 20);
        ctx.bezierCurveTo(x + 10, height / 2 - 40, x + 30, height / 2 - 30, x + 20, height / 2 - 10);
        // Head
        ctx.moveTo(x - 20, height / 2 - 10);
        ctx.bezierCurveTo(x - 25, height / 2 + 10, x + 25, height / 2 + 10, x + 20, height / 2 - 10);
        // Body
        ctx.moveTo(x-30, height/2 + 5);
        ctx.bezierCurveTo(x-40, height/2+25, x-10, height/2+30, x, height/2 + 15);
        ctx.stroke();
    };

    const drawBear = (x: number) => {
        ctx.strokeStyle = `hsl(${themeColors.bear})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `hsla(${themeColors.bear}, 0.7)`;
        ctx.shadowBlur = 10;

        ctx.beginPath();
        // Head
        ctx.arc(x, height / 2 - 10, 20, 0, Math.PI * 2);
        // Body
        ctx.moveTo(x - 15, height / 2 + 10);
        ctx.bezierCurveTo(x - 40, height / 2 + 30, x + 40, height / 2 + 30, x + 15, height / 2 + 10);
        // Claws
        ctx.moveTo(x+20, height/2 + 25);
        ctx.lineTo(x+30, height/2 + 35);
        ctx.moveTo(x+25, height/2 + 25);
        ctx.lineTo(x+35, height/2 + 35);
        ctx.stroke();
    };

    const drawClash = (x: number, progress: number) => {
      const radius = 20 + progress * 80;
      const opacity = 1 - progress;
      ctx.strokeStyle = `hsla(${themeColors.primary}, ${opacity})`;
      ctx.lineWidth = 3 * opacity;
      ctx.shadowColor = `hsl(${themeColors.primary})`;
      ctx.shadowBlur = 20;

      ctx.beginPath();
      ctx.arc(x, height / 2, radius, 0, Math.PI * 2);
      ctx.stroke();

      // particles
      for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const particleRadius = progress * 40;
        const px = x + Math.cos(angle) * particleRadius;
        const py = height/2 + Math.sin(angle) * particleRadius;
        ctx.fillStyle = Math.random() > 0.5 ? `hsla(${themeColors.bull}, ${opacity})` : `hsla(${themeColors.bear}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';


      if (phase === 'charging') {
        bullX += chargeSpeed;
        bearX -= chargeSpeed;
        if (bearX - bullX < 100) {
          phase = 'clashing';
          clashFrame = 0;
        }
      } else if (phase === 'clashing') {
        clashFrame++;
        drawClash(bullX + 50, clashFrame / clashDuration);
        if (clashFrame >= clashDuration) {
          phase = 'resetting';
        }
      } else if (phase === 'resetting') {
        bullX -= resetSpeed;
        bearX += resetSpeed;
        if (bullX < -80 && bearX > width + 80) {
          phase = 'charging';
          bullX = -80;
          bearX = width + 80;
        }
      }

      drawBull(bullX);
      drawBear(bearX);
      
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'source-over';
      animationFrameId.current = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
        setup();
    };
    
    window.addEventListener('resize', handleResize);
    setup();
    draw();

    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [themeColors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
};
