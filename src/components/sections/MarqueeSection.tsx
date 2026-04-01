import { MARQUEE_ITEMS } from "@/data";

// Duplicate items to create seamless loop
const DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export function MarqueeSection() {
  return (
    <div
      className="overflow-hidden py-4 bg-lime"
      aria-label="Skills marquee"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {DOUBLED.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 flex-shrink-0 px-8 font-syne text-[15px] font-bold text-black uppercase tracking-wide"
          >
            {item.label}
            <span className="opacity-40 text-[12px]">&#10022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
