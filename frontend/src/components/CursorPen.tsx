import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], [contenteditable='true']";

export function CursorPen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const position = useRef({ x: -40, y: -40, tx: -40, ty: -40 });
  const lastDraw = useRef<{ x: number; y: number } | null>(null);
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
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      lastDraw.current = null;
    };

    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      const overHero = Boolean(target?.closest(".marginalia-hero"));
      const point = { x: event.clientX, y: event.clientY };

      position.current.tx = point.x;
      position.current.ty = point.y;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        cursorRef.current.classList.toggle("is-interactive", interactive);
      }

      if (!overHero || interactive) {
        lastDraw.current = null;
        return;
      }

      const previous = lastDraw.current;
      if (previous) {
        const distance = Math.hypot(point.x - previous.x, point.y - previous.y);
        if (distance < 90) {
          context.beginPath();
          context.moveTo(previous.x, previous.y);
          context.quadraticCurveTo(
            (previous.x + point.x) / 2,
            (previous.y + point.y) / 2,
            point.x,
            point.y,
          );
          context.strokeStyle = "rgba(164, 154, 255, 0.72)";
          context.lineWidth = 1.5;
          context.lineCap = "round";
          context.lineJoin = "round";
          context.stroke();
        }
      }
      lastDraw.current = point;
    };

    const leave = () => {
      lastDraw.current = null;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const tick = () => {
      const current = position.current;
      current.x += (current.tx - current.x) * 0.28;
      current.y += (current.ty - current.y) * 0.28;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.tx}px, ${current.ty}px, 0) rotate(-18deg)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      context.save();
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "rgba(0, 0, 0, 0.014)";
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      context.restore();
      frame.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="pen-cursor-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="pen-cursor-canvas" />
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
