// components/ui/AnimatedCursor.jsx
import { useEffect, useRef } from 'react';

export function AnimatedCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x - 4}px`;
        dotRef.current.style.top = `${y - 4}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.left = `${x - 18}px`;
        outlineRef.current.style.top = `${y - 18}px`;
      }
    };

    const onEnter = () => {
      if (outlineRef.current) {
        outlineRef.current.style.transform = 'scale(1.8)';
        outlineRef.current.style.borderColor = 'rgba(0, 217, 255, 0.8)';
      }
    };

    const onLeave = () => {
      if (outlineRef.current) {
        outlineRef.current.style.transform = 'scale(1)';
        outlineRef.current.style.borderColor = 'rgba(108, 99, 255, 0.6)';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-outline hidden lg:block" aria-hidden="true" />
    </>
  );
}
