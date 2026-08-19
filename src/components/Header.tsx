import { scrollToTarget } from "../lib/lenis";
import { useClock } from "../lib/hooks";

const NAV = [
  { label: "01 WORK", target: "#work" },
  { label: "02 STACK", target: "#stack" },
  { label: "03 CONTACT", target: "#contact" },
];

export default function Header() {
  const time = useClock();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => scrollToTarget(0)}
          className="group flex items-center gap-2.5"
          aria-label="Back to top — Manzar Shaikh"
        >
          <span className="inline-block h-4 w-[3px] bg-signal transition-all duration-200 group-hover:h-5" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Manzar Shaikh
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToTarget(item.target)}
              className="font-mono text-[11px] tracking-[0.14em] text-gray-500 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span
            className="hidden font-mono text-[11px] tabular-nums text-gray-600 lg:block"
            aria-hidden
          >
            {time} IST
          </span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] min-[430px]:hidden"
            aria-label="System status: available"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] py-1.5 pl-3 pr-3.5 min-[430px]:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
              System Status: Available
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
