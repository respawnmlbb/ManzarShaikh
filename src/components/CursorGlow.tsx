import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const SIZE = 720;

/** Soft signal-cyan radial gradient that trails the cursor. */
export default function CursorGlow() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(-SIZE);
  const my = useMotionValue(-SIZE);

  const sx = useSpring(mx, { stiffness: 52, damping: 22, mass: 0.55 });
  const sy = useSpring(my, { stiffness: 52, damping: 22, mass: 0.55 });

  const x = useTransform(sx, (v) => v - SIZE / 2);
  const y = useTransform(sy, (v) => v - SIZE / 2);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{ x, y, width: SIZE, height: SIZE }}
    >
      <div
        className="h-full w-full rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(6,182,212,0.085), rgba(6,182,212,0.022) 46%, transparent 72%)",
        }}
      />
    </motion.div>
  );
}
