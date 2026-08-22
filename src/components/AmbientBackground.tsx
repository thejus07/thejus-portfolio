import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with inertia & velocity dampening
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0,
      speed: 0,
      isMoving: false,
    };

    let idleTimer: NodeJS.Timeout;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.isMoving = false;
      }, 400);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Inertia & velocity tracking
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      mouse.vx += dx * 0.05;
      mouse.vy += dy * 0.05;
      mouse.vx *= 0.85; // friction
      mouse.vy *= 0.85;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Dark Base Environment
      ctx.fillStyle = '#070709';
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric Ambient Light Pools (Depth Layers)
      const ambientGlow1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.3,
        100,
        width * 0.2,
        height * 0.3,
        600
      );
      ambientGlow1.addColorStop(0, 'rgba(37, 99, 235, 0.08)');
      ambientGlow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambientGlow1;
      ctx.fillRect(0, 0, width, height);

      const ambientGlow2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7,
        150,
        width * 0.8,
        height * 0.7,
        700
      );
      ambientGlow2.addColorStop(0, 'rgba(79, 70, 229, 0.07)');
      ambientGlow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambientGlow2;
      ctx.fillRect(0, 0, width, height);

      // 3. Mouse-Following Luminous Atmospheric Light Field (Light + Depth + Distortion)
      const lightRadius = 450 + Math.sin(time) * 30 + Math.min(mouse.speed * 8, 150);
      const intensity = 0.12 + Math.min(mouse.speed * 0.005, 0.15);

      const mouseLight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        lightRadius
      );
      mouseLight.addColorStop(0, `rgba(59, 130, 246, ${intensity.toFixed(3)})`);
      mouseLight.addColorStop(0.4, `rgba(6, 182, 212, ${(intensity * 0.5).toFixed(3)})`);
      mouseLight.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = mouseLight;
      ctx.fillRect(0, 0, width, height);

      // 4. Subtle Surface Refraction Distortion (No dots, no lines, no particles)
      if (mouse.speed > 0.5) {
        ctx.save();
        const rippleGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          50,
          mouse.x,
          mouse.y,
          lightRadius * 0.7
        );
        rippleGrad.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        rippleGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = rippleGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, lightRadius * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070709]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
