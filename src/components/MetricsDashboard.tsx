import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cascade, cascadeItem } from "../lib/motion";
import { useCountUp } from "../lib/hooks";
import { METRICS } from "../data";

function MetricCell({
  value,
  suffix,
  label,
  note,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  started: boolean;
}) {
  const count = useCountUp(value, started, 1300 + value * 2);

  return (
    <motion.div
      variants={cascadeItem}
      className="group relative bg-[#080808] p-6 transition-colors duration-200 hover:bg-[#0b0b0b] sm:p-8"
    >
      <span
        className="absolute right-4 top-4 font-mono text-[10px] text-gray-700 transition-colors duration-200 group-hover:text-signal/70"
        aria-hidden
      >
        ▮
      </span>
      <p className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
        {count}
        <span className="text-gray-500">{suffix}</span>
      </p>
      <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-gray-500">
        {label}
      </p>
      <p className="mt-1.5 font-mono text-[11px] text-gray-600">{note}</p>
    </motion.div>
  );
}

export default function MetricsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        variants={cascade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          variants={cascadeItem}
          className="mb-5 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-gray-600"
        >
          <span>
            <span className="text-signal">▍</span> system_metrics — live
            readout
          </span>
          <span className="hidden sm:inline">UPDATED: Q3 · 2026</span>
        </motion.div>

        <motion.div
          variants={cascadeItem}
          ref={ref}
          className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
        >
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <MetricCell key={m.label} {...m} started={inView} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
