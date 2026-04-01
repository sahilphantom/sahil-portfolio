"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATS = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { n: "React",      icon: "https://cdn.simpleicons.org/react/61DAFB",       lvl: "Strong" },
      { n: "Next.js",    icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",    lvl: "Strong" },
      { n: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E",   lvl: "Strong" },
      { n: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6",   lvl: "Good"   },
      { n: "Redux",      icon: "https://cdn.simpleicons.org/redux/764ABC",        lvl: "Good"   },
      { n: "Zustand",    icon: "/images/zustand.svg",      lvl: "Good"   },
      { n: "Tailwind",   icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",  lvl: "Strong" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { n: "Node.js",    icon: "https://cdn.simpleicons.org/nodedotjs/339933",    lvl: "Strong" },
      { n: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff",      lvl: "Strong" },
      { n: "FastAPI",    icon: "https://cdn.simpleicons.org/fastapi/009688",      lvl: "Good"   },
      { n: "Python",     icon: "https://cdn.simpleicons.org/python/3776AB",       lvl: "Good"   },
      { n: "MongoDB",    icon: "https://cdn.simpleicons.org/mongodb/47A248",      lvl: "Strong" },
      { n: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1",   lvl: "Good"   },
      { n: "Redis",      icon: "https://cdn.simpleicons.org/redis/DC382D",        lvl: "Good"   },
    ],
  },
  {
    key: "ai",
    label: "AI & Automation",
    items: [
      { n: "LangChain",  icon: "https://cdn.simpleicons.org/langchain/3dd9eb",    lvl: "Strong" },
      { n: "LangGraph",  icon: "",    lvl: "Good"   },
      { n: "LangSmith",  icon: "",    lvl: "Good"   },
      { n: "n8n",        icon: "https://cdn.simpleicons.org/n8n/EA4B71",          lvl: "Good"   },
    ],
  },
  {
    key: "tools",
    label: "Tools & Platforms",
    items: [
      { n: "VS Code",    icon: "/images/vscode.png", lvl: "Strong" },
      { n: "Git",        icon: "https://cdn.simpleicons.org/git/F05032",           lvl: "Strong" },
      { n: "GitHub",     icon: "https://cdn.simpleicons.org/github/ffffff",        lvl: "Strong" },
      { n: "Postman",    icon: "https://cdn.simpleicons.org/postman/FF6C37",       lvl: "Good"   },
    //   { n: "Apidog",     icon: "/images/Apidog.svg",       lvl: "Good"   },
    ],
  },
] as const;

type FilterKey = "all" | (typeof CATS)[number]["key"];

const LVL_STYLE: Record<string, { bg: string; color: string }> = {
  Strong: { bg: "rgba(61,217,235,0.12)",  color: "#3dd9eb" },
  Good:   { bg: "rgba(181,123,255,0.12)", color: "#B57BFF" },
};

// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker() {
  const all = CATS.flatMap((c) => c.items.map((i) => i.n));
  const doubled = [...all, ...all];
  return (
    <div className="border-t border-white/7 pt-5 mt-8 overflow-hidden">
      <style>{`
        .ts-ticker{display:flex;gap:24px;width:max-content;animation:tsTick 32s linear infinite}
        .ts-ticker:hover{animation-play-state:paused}
        @keyframes tsTick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      `}</style>
      <div className="ts-ticker">
        {doubled.map((name, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-[0.08em] uppercase text-text-muted/40">
            <span className="w-1 h-1 rounded-full bg-lime flex-shrink-0" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function TechCard({ item }: { item: { n: string; icon: string; lvl: string } }) {
  const ls = LVL_STYLE[item.lvl] ?? LVL_STYLE.Good;
  return (
    <div className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-4 flex flex-col items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06] text-center">
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={item.icon}
          alt={item.n}
          width={36}
          height={36}
          className="object-contain"
          style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.4))" }}
        />
      </div>

      {/* Name */}
      <p className="text-[12px] font-semibold text-text font-mono leading-tight">{item.n}</p>

      {/* Level */}
      <span
        className="text-[10px] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded-md"
        style={{ background: ls.bg, color: ls.color }}
      >
        {item.lvl}
      </span>
    </div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────

function CatSection({ cat }: { cat: (typeof CATS)[number] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-text-muted/50 font-mono">
          {cat.label}
        </span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-text-muted/40 font-mono">
          {cat.items.length}
        </span>
        <span className="flex-1 h-px bg-white/7" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
        {cat.items.map((item) => (
          <TechCard key={item.n} item={item} />
        ))}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TechStackSection() {
  const [active, setActive] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    ...CATS.map((c) => ({ key: c.key as FilterKey, label: c.label })),
  ];

  const shown = active === "all" ? CATS : CATS.filter((c) => c.key === active);

  return (
    <section
      id="stack"
      className="py-24 px-4 sm:px-6 md:px-12 bg-bg border-t border-white/7"
      aria-label="Tech Stack"
    >
      <SectionLabel color="#FF5C4D">What I build with</SectionLabel>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2
          className="font-syne font-extrabold tracking-tighter leading-[1.05]"
          style={{ fontSize: "clamp(32px,5vw,60px)" }}
        >
          Built with{" "}
          <span className="text-lime italic">intention.</span>
        </h2>
        <p className="text-text-muted text-[14px] font-dm leading-relaxed max-w-xs">
          Technologies I reach for when shipping products that matter.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={[
              "px-4 py-1.5 rounded-full border text-[11px] font-mono font-medium tracking-[0.06em] uppercase transition-all duration-200",
              active === f.key
                ? "bg-lime/10 border-lime/40 text-lime"
                : "bg-transparent border-white/10 text-text-muted hover:border-white/20 hover:text-text",
            ].join(" ")}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8">
        {shown.map((cat) => (
          <CatSection key={cat.key} cat={cat} />
        ))}
      </div>

      <Ticker />
    </section>
  );
}