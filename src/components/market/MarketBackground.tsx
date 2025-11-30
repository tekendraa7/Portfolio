
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Candle {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
  isBullish: boolean;
}

interface MarketBackgroundProps extends React.HTMLAttributes<HTMLCanvasElement> {
  candleWidth?: number;
  spawnSpeed?: number;
  volatility?: number;
  gridDensityX?: number;
  gridDensityY?: number;
  glowStrength?: number;
  parallax?: number;
}

export const MarketBackground: React.FC<MarketBackgroundProps> = ({
  className,
  candleWidth = 8,
  spawnSpeed = 1.2,
  volatility = 0.8,
  gridDensityX = 60,
  gridDensityY = 40,
  glowStrength = 10,
  parallax = 0.00005,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const [themeColors, setThemeColors] = useState({
    primary: '210, 100%, 56%',
    chart2: '190, 100%, 45%',
    destructive: '0, 84%, 60%'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computedStyles = getComputedStyle(document.documentElement);
      // Fetches CSS variables and ensures they use commas for canvas compatibility.
      const getThemeColor = (varName: string) => computedStyles.getPropertyValue(varName).trim().replace(/\s+/g, ',');
      setThemeColors({
        primary: getThemeColor('--primary'),
        chart2: getThemeColor('--chart-2'),
        destructive: getThemeColor('--destructive')
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let candles: Candle[] = [];
    let lastPrice = window.innerHeight / 2;
    let pulseY = window.innerHeight / 2;
    let pulseDirection = 1;
    let frameCount = 0;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      lastPrice = canvas.height / dpr / 2;
      candles = [];
    };

    const createCandle = () => {
      const priceMove = (Math.random() - 0.5) * 50 * volatility;
      const open = lastPrice;
      const close = lastPrice + priceMove;
      
      const wickFlair = Math.random() * 20 * volatility;
      const high = Math.max(open, close) + wickFlair;
      const low = Math.min(open, close) - wickFlair;

      candles.push({
        x: canvas.getBoundingClientRect().width + candleWidth * 2,
        open,
        high,
        low,
        close,
        isBullish: close >= open,
      });

      lastPrice = close;
      if (lastPrice < 0 || lastPrice > canvas.getBoundingClientRect().height) {
        lastPrice = canvas.getBoundingClientRect().height / 2;
      }
    };
    
    const drawGrid = () => {
      ctx.strokeStyle = `hsla(${themeColors.primary}, 0.1)`;
      ctx.lineWidth = 0.5;

      for (let x = canvas.width % gridDensityX; x < canvas.width; x += gridDensityX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = canvas.height % gridDensityY; y < canvas.height; y += gridDensityY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawPulseLine = () => {
      pulseY += pulseDirection * 0.1;
      if (pulseY > lastPrice + 2 || pulseY < lastPrice - 2) {
        pulseDirection *= -1;
      }
      
      ctx.beginPath();
      ctx.moveTo(0, pulseY);
      ctx.lineTo(canvas.width, pulseY);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, `hsla(${themeColors.primary}, 0)`);
      gradient.addColorStop(0.8, `hsla(${themeColors.primary}, 0.5)`);
      gradient.addColorStop(1, `hsla(${themeColors.primary}, 1)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.shadowColor = `hsl(${themeColors.primary})`;
      ctx.shadowBlur = 5;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };
    
    const drawCandles = () => {
      candles.forEach((candle) => {
        const bodyTop = Math.min(candle.open, candle.close);
        const bodyBottom = Math.max(candle.open, candle.close);

        const color = candle.isBullish ? `hsl(${themeColors.chart2})` : `hsl(${themeColors.destructive})`;
        const glowColor = candle.isBullish ? `hsla(${themeColors.chart2}, 0.7)` : `hsla(${themeColors.destructive}, 0.7)`;

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = glowStrength;
        
        // Wick
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(candle.x + candleWidth / 2, candle.high);
        ctx.lineTo(candle.x + candleWidth / 2, candle.low);
        ctx.stroke();
        
        // Body
        ctx.lineWidth = candleWidth;
        ctx.beginPath();
        ctx.moveTo(candle.x + candleWidth / 2, bodyTop);
        ctx.lineTo(candle.x + candleWidth / 2, bodyBottom);
        ctx.stroke();

        candle.x -= spawnSpeed;
      });

      candles = candles.filter(c => c.x > -candleWidth * 2);
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      drawGrid();
      
      frameCount++;
      if (frameCount % Math.floor(candleWidth * 2 / spawnSpeed) === 0) {
        createCandle();
      }
      
      drawCandles();
      drawPulseLine();
      
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
  }, [spawnSpeed, candleWidth, volatility, gridDensityX, gridDensityY, glowStrength, themeColors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
};
