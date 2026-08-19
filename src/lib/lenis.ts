import type Lenis from "lenis";

export const lenisRef: { current: Lenis | null } = { current: null };

export function scrollToTarget(target: string | number) {
  const lenis = lenisRef.current;
  if (lenis) {
    lenis.scrollTo(target, {
      offset: typeof target === "number" ? 0 : -64,
      duration: 1.1,
    });
    return;
  }
  if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
