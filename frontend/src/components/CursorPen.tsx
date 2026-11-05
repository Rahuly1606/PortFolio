import { useEffect, useRef, useState } from "react";

export function CursorPen() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const position = useRef({ x: -40, y: -40, tx: -40, ty: -40 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (event: PointerEvent) => {
      position.current.tx = event.clientX;
      position.current.ty = event.clientY;
    };
    const tick = () => {
      const p = position.current;
      p.x += (p.tx - p.x) * 0.28;
      p.y += (p.ty - p.y) * 0.28;
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${p.tx}px, ${p.ty}px, 0) rotate(-18deg)`;
      if (trailRef.current) trailRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      frame.current = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    frame.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="pen-cursor-layer" aria-hidden="true">
      <div ref={trailRef} className="pen-cursor-trail" />
      <div ref={cursorRef} className="pen-cursor">
        <svg viewBox="0 0 22 22" fill="none">
          <path
            d="M4 17L7 10L15 2L20 7L12 15L4 17Z"
            fill="#242326"
            stroke="#f5f3ef"
            strokeWidth="1"
          />
          <path d="M7 10L12 15M4 17L8.5 13" stroke="#A49AFF" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
