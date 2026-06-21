import React, { useEffect, useRef } from 'react';

/**
 * Single SVG background that subtly parallax-shifts on scroll.
 * Light theme — soft blue/indigo geometric lines only.
 */
const SVGBackground = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    let rafId;
    const onScroll = () => {
      if (!svgRef.current) return;
      const y = window.scrollY;
      // Gentle parallax: moves up at 15% of scroll speed
      svgRef.current.style.transform = `translateY(${y * 0.15}px)`;
    };

    const throttled = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    window.addEventListener('scroll', throttled, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttled);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-10] overflow-hidden"
      style={{ background: '#f8fafc', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        width="100%"
        height="140%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ willChange: 'transform', display: 'block' }}
      >
        {/* Subtle grid */}
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="0.8"/>
          </pattern>
          <radialGradient id="topGlow" cx="25%" cy="15%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.10)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
          <radialGradient id="bottomGlow" cx="80%" cy="85%" r="45%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.08)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </radialGradient>
        </defs>

        {/* Grid layer */}
        <rect width="1440" height="1260" fill="url(#grid)" />

        {/* Soft ambient glows */}
        <rect width="1440" height="1260" fill="url(#topGlow)" />
        <rect width="1440" height="1260" fill="url(#bottomGlow)" />

        {/* Decorative diagonal lines */}
        <line x1="0" y1="180" x2="500" y2="680" stroke="rgba(59,130,246,0.07)" strokeWidth="1.5" />
        <line x1="200" y1="0" x2="900" y2="900" stroke="rgba(99,102,241,0.06)" strokeWidth="1" />
        <line x1="1440" y1="120" x2="900" y2="700" stroke="rgba(59,130,246,0.07)" strokeWidth="1.5" />
        <line x1="1200" y1="0" x2="400" y2="900" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />

        {/* Corner accent arcs */}
        <path d="M 0 0 Q 200 0 200 200" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1.5"/>
        <path d="M 1440 900 Q 1240 900 1240 700" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1.5"/>

        {/* Subtle circles */}
        <circle cx="120" cy="120" r="80" fill="none" stroke="rgba(59,130,246,0.07)" strokeWidth="1"/>
        <circle cx="1320" cy="780" r="100" fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>
        <circle cx="720" cy="450" r="320" fill="none" stroke="rgba(148,163,184,0.05)" strokeWidth="1"/>

        {/* Small dot accents */}
        <circle cx="360" cy="240" r="3" fill="rgba(59,130,246,0.25)"/>
        <circle cx="1100" cy="200" r="2.5" fill="rgba(99,102,241,0.25)"/>
        <circle cx="240" cy="600" r="2" fill="rgba(59,130,246,0.2)"/>
        <circle cx="1200" cy="520" r="3" fill="rgba(99,102,241,0.2)"/>
        <circle cx="680" cy="120" r="2" fill="rgba(59,130,246,0.18)"/>
        <circle cx="800" cy="780" r="2.5" fill="rgba(99,102,241,0.18)"/>
      </svg>
    </div>
  );
};

export default SVGBackground;
