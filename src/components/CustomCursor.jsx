import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      const t = e.target;
      hovering.current = !!(
        t.tagName === 'BUTTON' ||
        t.tagName === 'A' ||
        t.closest('button') ||
        t.closest('a') ||
        t.classList.contains('cursor-pointer') ||
        t.closest('.magnetic-btn')
      );
    };

    // Animate ring with lerp — no React state changes at all
    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);

      const isHov = hovering.current;

      // Dot follows instantly
      dot.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px) scale(${isHov ? 0 : 1})`;

      // Ring follows with smooth lerp
      const size = isHov ? 64 : 32;
      ring.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.borderColor = isHov ? 'rgba(103,232,249,0.8)' : 'rgba(59,130,246,0.5)';
      ring.style.backgroundColor = isHov ? 'rgba(103,232,249,0.1)' : 'transparent';

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Dot cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: 'rgba(34,211,238,0.9)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'screen',
          willChange: 'transform',
          transition: 'transform 0.05s linear',
        }}
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1px solid rgba(59,130,246,0.5)',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'screen',
          willChange: 'transform, width, height',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
          boxShadow: '0 0 12px rgba(34,211,238,0.4)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
