import { scrollToTarget } from "../lib/lenis";
import { useClock } from "../lib/hooks";
import { LINKS } from "../data";

export default function Footer() {
  const time = useClock();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-[11px] tracking-[0.14em] text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 MANZAR SHAIKH —{" "}
          <span className="text-gray-500">ALL SYSTEMS NOMINAL</span>
        </p>
        <p className="tabular-nums" aria-label={`Local time in Pune: ${time}`}>
          {LINKS.location.toUpperCase()} · {time} IST
        </p>
        <button
          type="button"
          onClick={() => scrollToTarget(0)}
          className="group flex w-fit items-center gap-2 transition-colors duration-200 hover:text-white"
        >
          BACK_TO_TOP
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
