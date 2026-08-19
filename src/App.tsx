import { useEffect } from "react";
import Lenis from "lenis";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import MetricsDashboard from "./components/MetricsDashboard";
import ProjectLogs from "./components/ProjectLogs";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { lenisRef } from "./lib/lenis";

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-white">
      {/* layered ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {/* faint top-center signal wash */}
        <div
          className="absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% -12%, rgba(6,182,212,0.055), transparent 70%)",
          }}
        />
        {/* instrument rails aligned to the content column */}
        <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 border-x border-white/[0.04] md:block" />
      </div>

      <div className="noise-overlay" aria-hidden />
      <CursorGlow />
      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <Hero />
        <Ticker />
        <MetricsDashboard />
        <ProjectLogs />
        <TechStack />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
