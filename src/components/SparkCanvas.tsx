"use client";

import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  color: string;
}

export default function SparkCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Refined Champagne & Brass micro-ember palette
    const colors = [
      "rgba(245, 238, 223, 0.8)", // Soft warm white
      "rgba(209, 165, 108, 0.75)", // Brushed brass
      "rgba(232, 190, 130, 0.65)", // Muted champagne gold
      "rgba(184, 122, 62, 0.5)",   // Warm bronze
    ];

    // Delicate density: fewer, softer particles
    const sparkCount = Math.min(Math.floor((width * height) / 32000), 28);
    const sparks: Spark[] = [];

    const createSpark = (fromBottomOnly = false): Spark => {
      const radius = Math.random() * 1.2 + 0.5;
      return {
        x: Math.random() * width,
        y: fromBottomOnly ? height + Math.random() * 10 : Math.random() * height,
        radius,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.65 + 0.25), // slow, graceful float
        alpha: fromBottomOnly ? 0 : Math.random() * 0.5,
        maxAlpha: Math.random() * 0.5 + 0.2,
        decay: Math.random() * 0.0025 + 0.001,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < sparkCount; i++) {
      sparks.push(createSpark(false));
    }

    let time = 0;

    const render = () => {
      if (!isRunning) return;
      time += 0.02;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];

        s.x += s.vx + Math.sin(time + i) * 0.2;
        s.y += s.vy;

        if (s.alpha < s.maxAlpha) {
          s.alpha = Math.min(s.alpha + 0.01, s.maxAlpha);
        } else {
          s.alpha -= s.decay;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.radius * 4;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (s.y < -10 || s.x < -10 || s.x > width + 10 || s.alpha <= 0) {
          sparks[i] = createSpark(true);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibility = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        render();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
