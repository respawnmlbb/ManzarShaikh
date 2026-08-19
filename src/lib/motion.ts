import type { Easing, Transition, Variants } from "framer-motion";

/** Mechanical, snappy curves — no elastic, no bounce. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_INOUT: [number, number, number, number] = [0.83, 0, 0.17, 1];
export const EASE_MECHANICAL: [number, number, number, number] = [
  0.32, 0, 0.67, 0,
];

export const t = (
  duration = 0.5,
  delay = 0,
  ease: Easing = EASE_OUT
): Transition => ({ duration, delay, ease });

/** Slide-up + fade, used across every section entrance. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: t(0.6) },
};

/** Parent that staggers children by 50ms — the "cascading load". */
export const cascade: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

export const cascadeItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: t(0.55) },
};

/** Line-mask reveal for display headlines. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: t(0.8, 0, EASE_INOUT) },
};
