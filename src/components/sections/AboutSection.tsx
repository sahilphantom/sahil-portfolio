"use client";


import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

import { TIMELINE } from "@/data";
import type { TimelineEntry } from "@/types";




// ─── Timeline Item ────────────────────────────────────────────────────────────

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="timeline-item pl-7 relative mb-9 group">
      <div className="timeline-dot" />
      <p className="text-[11px] text-text-muted tracking-widest uppercase mb-1 font-dm">
        {entry.year}
      </p>
      <h4 className="font-syne font-bold text-[17px] mb-0.5">
        {entry.title}
      </h4>
      <p className="text-[13px] text-lime font-medium mb-1.5">{entry.company}</p>
      <p className="text-[13px] text-text-muted leading-relaxed">
        {entry.description}
      </p>
    </div>
  );
}

// ─── About Visual ─────────────────────────────────────────────────────────────

function AboutVisual() {
  return (
    <div
      className="relative bg-surface  rounded-3xl overflow-hidden flex items-center justify-center"
      style={{ aspectRatio: "4/5" }}
    >
      {/* Gradient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(61,217,235,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(77,205,255,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Blob canvas — bottom right */}
      {/* <CardBlob /> */}

      {/* Initials */}
      <span
        className="relative z-10 font-syne font-extrabold select-none leading-none"
        style={{
          fontSize: "120px",
          color: "rgba(255,255,255,0.05)",
          letterSpacing: "-0.08em",
        }}
        aria-hidden="true"
      >
        SM.
      </span>

      {/* Location badge */}
      <div className="absolute bottom-6 right-6 z-10 bg-lime text-black px-5 py-2.5 rounded-full font-syne text-[13px] font-bold">
        Pakistan 🇵🇰
      </div>
    </div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

export function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-bg border-b border-t border-white/7"
      aria-label="About"
    >
      

      <div
        ref={revealRef}
        className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
      >

      {/* Visual */}
        <AboutVisual />


        {/* Text + timeline */}
        <div>
          <SectionLabel color="#7EE8A2">About</SectionLabel>
          <h2
            className="font-syne font-extrabold tracking-tighter leading-[1.05] mb-8"
            style={{ fontSize: "clamp(36px,5vw,60px)" }}
          >
            Builder at heart.{" "}
            <span className="text-text-muted">Engineer by trade.</span>
          </h2>

          <p className="text-text-muted text-[16px] leading-[1.8] mb-6 font-dm">
            I'm a full stack developer and AI automation engineer who loves
            building things that actually work — fast, clean, and built to
            scale. I started with Laravel, moved into the MERN stack, and now
            I'm deep into AI-powered systems and automation workflows.
          </p>

          <p className="text-text-muted text-[16px] leading-[1.8] mb-10 font-dm">
            Outside of work, I'm constantly experimenting with LangChain, n8n,
            and new AI tools — turning ideas into real pipelines. I care about
            writing clean code, shipping fast, and building things that solve
            real problems.
          </p>

          <Badge variant="green" dot animateDot>
            Open for contracts &mdash; Q2 2026
          </Badge>

          {/* Timeline */}
          <div className="relative pl-6 mt-14 timeline-line">
            {TIMELINE.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}