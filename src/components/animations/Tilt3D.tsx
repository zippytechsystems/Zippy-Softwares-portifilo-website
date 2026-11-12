import React, { useRef, useState, useCallback } from 'react';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default 8)
  scale?: number; // scale on hover (default 1.02)
  glare?: boolean; // dynamic lighting glare
  perspective?: number; // 3D depth (default 1000)
  idleFloat?: boolean; // continuous gentle 3D floating when not hovered
  floatVariant?: 'normal' | 'slow' | 'reverse';
}

export const Tilt3D: React.FC<Tilt3DProps> = ({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
  perspective = 1000,
  idleFloat = false,
  floatVariant = 'normal',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const calculateTilt = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (clientY - rect.top) / rect.height - 0.5;

    const rotX = -y * maxTilt * 2;
    const rotY = x * maxTilt * 2;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      const glareX = ((x + 0.5) * 100).toFixed(1);
      const glareY = ((y + 0.5) * 100).toFixed(1);
      setGlareStyle({
        opacity: 0.22,
        background: `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.85), transparent 70%)`,
        transition: 'opacity 0.2s ease',
      });
    }
  }, [maxTilt, scale, glare, perspective]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    calculateTilt(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsInteracting(true);
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const resetTilt = () => {
    setIsInteracting(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease',
    });
  };

  const floatClass = idleFloat && !isInteracting 
    ? floatVariant === 'slow' 
      ? 'image-3d-floating-slow' 
      : floatVariant === 'reverse'
      ? 'image-3d-floating-reverse'
      : 'image-3d-floating'
    : '';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={resetTilt}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={resetTilt}
      className={`relative will-change-transform ${floatClass} ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}

      {/* Dynamic 3D Glass Glare Lighting */}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 mix-blend-overlay overflow-hidden"
          style={glareStyle}
        />
      )}
    </div>
  );
};
