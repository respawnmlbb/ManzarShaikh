import { motion } from "framer-motion";
import {
  EASE_INOUT,
  EASE_OUT,
  cascade,
  cascadeItem,
  maskLine,
  t,
} from "../lib/motion";
import { scrollToTarget } from "../lib/lenis";
import { LINKS } from "../data";

function TerminalCard() {
  return (
    <motion.aside
      variants={cascadeItem}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, delay: 0.5, ease: EASE_OUT }}
      className="relative hidden overflow-hidden rounded-lg border border-white/10 bg-panel/80 lg:block"
      aria-label="Terminal readout"
    >
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <span className="font-mono text-[11px] text-gray-500">
          manzar@ops: ~/status
        </span>
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-live/70" />
        </span>
      </div>

      {/* slow scanline sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
      />

      <div className="space-y-3 px-4 py-5 font-mono text-[12.5px] leading-relaxed">
        <p>
          <span className="text-gray-600">$</span>{" "}
          <span className="text-gray-300">whoami</span>
        </p>
        <p className="text-gray-500">
          <span className="text-signal">&gt;</span> automation specialist ·
          web builder
        </p>
        <p>
          <span className="text-gray-600">$</span>{" "}
          <span className="text-gray-300">uptime --career</span>
        </p>
        <p className="text-gray-500">
          <span className="text-signal">&gt;</span> 7+ yrs — ops, email
          marketing, no-code
        </p>
        <p>
          <span className="text-gray-600">$</span>{" "}
          <span className="text-gray-300">cat availability.log</span>
        </p>
        <p className="text-gray-500">
          <span className="text-live">●</span> full-time · freelance ·
          contracts
        </p>
        <p aria-hidden>
          <span className="text-gray-600">$</span>{" "}
          <span className="animate-blink text-signal">▍</span>
        </p>
      </div>
    </motion.aside>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* dot matrix, faded toward the edges */}
      <div
        aria-hidden
        className="dot-grid absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pb-24">
        <div className="grid items-end gap-14 lg:grid-cols-[1.45fr_1fr]">
          <motion.div variants={cascade} initial="hidden" animate="show">
            <motion.p
              variants={cascadeItem}
              className="mb-7 font-mono text-xs tracking-[0.2em] text-gray-500"
            >
              <span className="text-signal">[ 01 ]</span> // INTRODUCTION
            </motion.p>

            <h1 className="text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.05] lg:text-[4.1rem] lg:leading-[1.04]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={maskLine} className="block">
                  I build AI automations
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={maskLine}
                  transition={t(0.8, 0.09, EASE_INOUT)}
                  className="block"
                >
                  and ship web apps{" "}
                  <span className="whitespace-nowrap">
                    end-to-end.
                    <span
                      aria-hidden
                      className="ml-2 inline-block h-[0.72em] w-[3px] translate-y-[0.08em] animate-blink bg-signal align-baseline"
                    />
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={cascadeItem}
              className="mt-7 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              7+ years across ops, email marketing, and no-code automation.
              Specializing in vibe-coding, AI-directed development, and
              scalable Business Intelligence.
            </motion.p>

            <motion.div
              variants={cascadeItem}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToTarget("#work")}
                className="group inline-flex items-center gap-2.5 rounded-md border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/30 hover:bg-white/[0.05]"
              >
                View deployed work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 transition-all duration-200 group-hover:translate-y-0.5 group-hover:text-white"
                  aria-hidden
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-gray-400 transition-colors duration-200 hover:text-white"
              >
                INITIALIZE_CONNECTION
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <TerminalCard />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(1, 1.1)}
          className="mt-16 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] tracking-[0.18em] text-gray-600 lg:mt-20"
        >
          <span>PUNE, IN · 18.52°N 73.85°E · REMOTE-FIRST</span>
          <span className="hidden items-center gap-2 sm:flex">
            SCROLL
            <span className="inline-block h-px w-8 bg-white/20" aria-hidden />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
