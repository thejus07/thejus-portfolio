import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SoftwareCoreVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollY } = useScroll();

  // Scroll transformation for rotation and morph intensity
  const scrollRotation = useTransform(scrollY, [0, 800], [0, Math.PI * 2]);
  const scrollMorph = useTransform(scrollY, [0, 600], [1, 2.2]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 440);
    let height = (canvas.height = 440);

    let time = 0;
    let mouse = { x: 220, y: 220, targetX: 220, targetY: 220 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render Procedural Liquid Chrome Software Core
    const render = () => {
      time += 0.02;

      // Smooth lerp mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 130;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Render 3D Mathematical Liquid Chrome Mesh Rings
      const ringCount = 28;
      const currentScrollRot = scrollRotation.get();
      const currentMorph = scrollMorph.get();

      for (let i = 0; i < ringCount; i++) {
        const ringAngle = (i / ringCount) * Math.PI * 2 + time * 0.5 + currentScrollRot;
        const ringRadius = radius * (0.35 + (i / ringCount) * 0.65);

        ctx.beginPath();
        const points = 72;
        for (let j = 0; j <= points; j++) {
          const theta = (j / points) * Math.PI * 2;

          // Deforming liquid wave formula
          const distortion =
            Math.sin(theta * 3 + time * 2 + i * 0.2) * 12 * currentMorph +
            Math.cos(theta * 5 - time * 1.5) * 8;

          // Mouse magnetic pull distortion
          const mDx = mouse.x - centerX;
          const mDy = mouse.y - centerY;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
          const mousePull = Math.max(0, (200 - mDist) / 200) * 18;

          const r = ringRadius + distortion + mousePull;
          const x = Math.cos(theta + ringAngle * 0.1) * r;
          const y = Math.sin(theta + ringAngle * 0.1) * r * 0.75; // Isometric tilt

          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // Liquid Chrome Specular Gradient Color
        const alpha = 0.12 + (i / ringCount) * 0.35;
        const isCyan = i % 2 === 0;

        ctx.strokeStyle = isCyan
          ? `rgba(6, 182, 212, ${alpha.toFixed(3)})`
          : `rgba(59, 130, 246, ${alpha.toFixed(3)})`;

        ctx.lineWidth = 1.2 + (i / ringCount) * 0.8;
        ctx.shadowBlur = 15;
        ctx.shadowColor = isCyan ? 'rgba(6, 182, 212, 0.4)' : 'rgba(59, 130, 246, 0.4)';
        ctx.stroke();
      }

      // Center Core Volumetric Orb Glow
      const coreGradient = ctx.createRadialGradient(0, 0, 5, 0, 0, 80);
      coreGradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
      coreGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.25)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollRotation, scrollMorph]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer Specular Glow Ring */}
      <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-3xl pointer-events-none" />

      {/* Procedural Liquid Chrome Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 block w-[380px] h-[380px] md:w-[440px] md:h-[440px] cursor-pointer"
        title="Procedural Liquid Chrome Software Core Visual"
      />
    </motion.div>
  );
};
