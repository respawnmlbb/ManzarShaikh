import { TICKER_ITEMS } from "../data";

/** Quiet mono marquee of the working arsenal — one ambient living element. */
export default function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-3"
      aria-label="Tools and platforms"
    >
      <div className="hairline-mask flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center font-mono text-[11px] tracking-[0.22em] text-gray-600"
            aria-hidden={i >= TICKER_ITEMS.length}
          >
            <span className="transition-colors duration-200 hover:text-gray-300">
              {item}
            </span>
            <span className="mx-6 text-signal/50" aria-hidden>
              //
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
