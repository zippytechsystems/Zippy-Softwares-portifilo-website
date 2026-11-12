import React, { useEffect, useRef } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  alpha: number;
}

export const InteractiveCanvas3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 650;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 35 : 75;
    const particles: Particle3D[] = [];

    const colors = [
      'rgba(2, 132, 199, ',   // Cyan
      'rgba(37, 99, 235, ',   // Blue
      'rgba(56, 189, 248, ',  // Sky
      'rgba(99, 102, 241, '   // Indigo
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * 600,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left - width / 2,
        y: e.clientY - rect.top - height / 2,
        active: true,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left - width / 2,
          y: e.touches[0].clientY - rect.top - height / 2,
          active: true,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    const fov = 380;
    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera rotation based on time + mouse target
      angleY += 0.0018;
      const targetAngleX = mouseRef.current.active ? (mouseRef.current.y / height) * 0.35 : 0;
      const targetAngleY = mouseRef.current.active ? (mouseRef.current.x / width) * 0.35 : 0;
      angleX += (targetAngleX - angleX) * 0.05;

      const cosY = Math.cos(angleY + targetAngleY);
      const sinY = Math.sin(angleY + targetAngleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected: { x: number; y: number; scale: number; alpha: number; color: string; radius: number }[] = [];

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Particle velocity step
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Space wrapping
        const boundX = width * 0.65;
        const boundY = height * 0.65;
        const boundZ = 300;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -boundZ) p.z = boundZ;
        if (p.z > boundZ) p.z = -boundZ;

        // 3D Rotation Transform (Yaw + Pitch)
        // Y-axis rotation
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // X-axis rotation
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX + 380; // offset camera

        if (z2 <= 20) continue; // Behind camera

        const scale = fov / z2;
        const projX = x1 * scale + width / 2;
        const projY = y2 * scale + height / 2;

        const effectiveAlpha = Math.min(1, Math.max(0.1, p.alpha * scale * 1.1));
        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha: effectiveAlpha,
          color: p.color,
          radius: p.radius * scale
        });

        // Draw 3D Glowing Particle Node
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(1, p.radius * scale * 1.3), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${effectiveAlpha})`;
        ctx.shadowBlur = 8 * scale;
        ctx.shadowColor = 'rgba(2, 132, 199, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw 3D Connecting Neural Constellation Lines
      const maxDistance = isMobile ? 90 : 135;
      const projLen = projected.length;
      for (let i = 0; i < projLen; i++) {
        for (let j = i + 1; j < projLen; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22 * projected[i].scale;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = Math.max(0.5, 0.9 * projected[i].scale);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto z-0 opacity-80 ${className}`}
      style={{ touchAction: 'none' }}
    />
  );
};
