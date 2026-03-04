import React, { useMemo } from 'react';

const ParticleBackground = () => {
  const stars = useMemo(() => 
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    })), 
  []);

  const orbs = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 100,
      color: ['rgba(59,130,246,0.05)', 'rgba(168,85,247,0.05)', 'rgba(34,211,238,0.04)', 'rgba(99,102,241,0.05)', 'rgba(59,130,246,0.03)', 'rgba(236,72,153,0.04)'][i],
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    })),
  []);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-[#070c18]">
      {/* Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.id % 3 === 0 ? 'rgba(34,211,238,0.8)' : star.id % 3 === 1 ? 'rgba(59,130,246,0.8)' : 'rgba(255,255,255,0.8)',
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite alternate`,
            boxShadow: star.size > 1.5 ? `0 0 ${star.size * 3}px currentColor` : 'none',
          }}
        />
      ))}

      {/* Animated floating orbs */}
      {orbs.map(orb => (
        <div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `orbFloat ${orb.duration}s ${orb.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Horizontal scanning line */}
      <div
        className="absolute left-0 right-0 h-px opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.8), rgba(59,130,246,0.8), transparent)',
          animation: 'scanLine 8s linear infinite',
        }}
      />

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes orbFloat {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(10px, -10px) scale(1.05); }
        }
        @keyframes scanLine {
          0% { top: -2%; }
          100% { top: 102%; }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
