import { motion } from "framer-motion";
import { cascade, cascadeItem } from "../lib/motion";
import { PROJECTS, type Project } from "../data";
import SectionHeading from "./SectionHeading";

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover/row:translate-x-1"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag}
          className="whitespace-nowrap rounded border border-white/10 px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-gray-400 transition-colors duration-200 group-hover/row:border-white/20"
        >
          [ {tag} ]
        </span>
      ))}
    </>
  );
}

function RowContent({ p }: { p: Project }) {
  return (
    <div className="grid items-center gap-x-8 gap-y-3 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1.35fr)_auto]">
      <div className="flex items-baseline gap-4">
        <span
          className={`font-mono text-[11px] tabular-nums ${
            p.locked ? "text-gray-700" : "text-gray-600"
          }`}
          aria-hidden
        >
          {p.index}
        </span>
        <div className="min-w-0">
          <h3
            className={`truncate text-lg font-semibold tracking-tight ${
              p.locked ? "text-gray-400" : "text-white"
            }`}
          >
            {p.name}
          </h3>
          <p className="mt-1 truncate font-mono text-[11px] text-gray-600">
            {p.host}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-400 md:pr-4">
        {p.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 md:justify-end">
        <Tags tags={p.tags} />
        {p.locked ? (
          <span className="ml-1 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-gray-600">
            <LockIcon />
            ON REQUEST
          </span>
        ) : (
          <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-white">
            VISIT
            <ArrowIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectLogs() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        variants={cascade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-8"
      >
        <div className="space-y-5">
          <SectionHeading code="02" label="DEPLOYED_INSTANCES" />
          <motion.div variants={cascadeItem} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Shipped work — live and public
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              Three web apps delivered solo in 2026 via AI-directed development
              with Claude, GPT &amp; Cursor. Deployed on Cloudflare Pages.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={cascadeItem}
          className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
        >
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 sm:px-6">
            <span className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              instances — production
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-gray-600">
              3 LIVE · 1 ARCHIVED
            </span>
          </div>

          <motion.ul variants={cascade}>
            {PROJECTS.map((p) => (
              <motion.li
                key={p.id}
                variants={cascadeItem}
                className="border-b border-white/5 transition-colors duration-200 last:border-0 hover:border-white/20"
              >
                {p.locked ? (
                  <div className="group/row cursor-default px-5 py-5 transition-colors duration-200 hover:bg-white/[0.02] sm:px-6">
                    <RowContent p={p} />
                  </div>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.name}`}
                    className="group/row block px-5 py-5 transition-colors duration-200 hover:bg-white/[0.04] sm:px-6"
                  >
                    <RowContent p={p} />
                  </a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.p
          variants={cascadeItem}
          className="font-mono text-[11px] tracking-[0.14em] text-gray-600"
        >
          <span className="text-signal">$</span> full case studies available on
          request — most automation work is internal &amp; NDA-bound.
        </motion.p>
      </motion.div>
    </section>
  );
}
