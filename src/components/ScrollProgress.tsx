import { motion, useScroll, useSpring } from "framer-motion";

/** 1px signal-cyan readout of scroll position, pinned to the top edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-signal/70"
      style={{ scaleX }}
    />
  );
}
