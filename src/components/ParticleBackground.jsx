import React, { useMemo } from 'react';

const ParticleBackground = () => {
  const stars = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.4,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.2,
      color: i % 3 === 0 ? 'rgba(34,211,238,0.85)' : i % 3 === 1 ? 'rgba(59,130,246,0.85)' : 'rgba(255,255,255,0.75)',
    })),
  []);

  // Fewer orbs, no expensive blur overlaps
  const orbs = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: [15, 70, 30, 75][i],
      y: [20, 60, 75, 15][i],
      size: [350, 280, 320, 260][i],
      color: ['rgba(59,130,246,0.06)', 'rgba(168,85,247,0.05)', 'rgba(34,211,238,0.05)', 'rgba(99,102,241,0.06)'][i],
      duration: [25, 30, 22, 28][i],
      delay: [0, 5, 10, 15][i],
    })),
  []);

  return (
    <div
      className="fixed inset-0 z-[-10] overflow-hidden bg-[#070c18]"
      style={{ contain: 'strict' }}
    >
      {/* Grid lines — static, cheap */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Static diagonal gradient — no animation needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      {/* Stars — CSS-only twinkle, GPU-accelerated via opacity+transform only */}
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: star.color,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite alternate`,
            willChange: 'opacity, transform',
          }}
        />
      ))}

      {/* Ambient orbs — no blur filter on individual elements to avoid layer explosion */}
      {orbs.map(orb => (
        <div
          key={orb.id}
          style={{
            position: 'absolute',
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
            animation: `orbFloat ${orb.duration}s ${orb.delay}s ease-in-out infinite alternate`,
            willChange: 'transform',
          }}
        />
      ))}

      <style>{`
        @keyframes twinkle {
          0%   { opacity: 0.1; transform: scale(0.85); }
          100% { opacity: 0.9; transform: scale(1.15); }
        }
        @keyframes orbFloat {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(25px, -35px); }
          100% { transform: translate(-15px, 15px); }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
