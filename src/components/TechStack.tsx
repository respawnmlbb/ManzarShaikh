import { motion } from "framer-motion";
import { cascade, cascadeItem } from "../lib/motion";
import { CREDENTIALS, MODULES } from "../data";
import SectionHeading from "./SectionHeading";

function CertIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-gray-500"
      aria-hidden
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
    >
      <motion.div
        variants={cascade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-8"
      >
        <div className="space-y-5">
          <SectionHeading code="03" label="TECH_STACK" />
          <motion.div variants={cascadeItem} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              The arsenal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              Four load-bearing modules: automation engines, AI-directed
              development, BI reporting, and web infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {MODULES.map((mod) => (
            <motion.article
              key={mod.id}
              variants={cascadeItem}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors duration-200 hover:border-white/20"
            >
              <header className="flex items-center justify-between gap-4 border-b border-white/5 bg-white/[0.02] px-4 py-2.5">
                <span className="flex min-w-0 items-center gap-1 font-mono text-xs text-gray-300">
                  <span className="text-gray-600">~/</span>
                  <span className="truncate">{mod.name}</span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="hidden font-mono text-[10px] tracking-[0.1em] text-gray-600 sm:inline">
                    {mod.status}
                  </span>
                  <span className="font-mono text-[10px] text-gray-700">
                    {mod.version}
                  </span>
                </span>
              </header>

              <ul className="p-2">
                {mod.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group/item flex items-center justify-between gap-4 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span
                        aria-hidden
                        className="font-mono text-xs text-gray-600 transition-colors duration-200 group-hover/item:text-signal"
                      >
                        &gt;
                      </span>
                      <span className="truncate text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-gray-600">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={cascadeItem}
          className="flex flex-wrap items-center gap-x-10 gap-y-4 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 sm:px-6"
        >
          <span className="font-mono text-[11px] tracking-[0.18em] text-gray-600">
            // CREDENTIALS
          </span>
          {CREDENTIALS.map((c) => (
            <span key={c.name} className="flex items-center gap-2.5">
              <CertIcon />
              <span className="text-sm text-gray-300">{c.name}</span>
              <span className="font-mono text-[11px] text-gray-600">
                {c.issuer} · {c.year}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
