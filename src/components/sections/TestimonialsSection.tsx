"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { TESTIMONIALS } from "@/data";
import type { Testimonial } from "@/types";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-surface border border-white/7 rounded-2xl p-8">
      <div
        className="font-syne text-[40px] font-extrabold leading-none mb-4 opacity-50"
        style={{ color: "#3dd9eb" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <p className="text-[15px] text-text-muted leading-[1.75] mb-6 font-dm">
        {t.quote}
      </p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-syne text-[14px] font-bold flex-shrink-0"
          style={{ background: t.avatarBg, color: t.avatarColor }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-syne font-bold text-[14px]">{t.author}</p>
          <p className="text-[12px] text-text-muted">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="py-24 px-6 md:px-12 bg-bg"
      aria-label="Testimonials"
    >
      <SectionLabel>Kind Words</SectionLabel>

      <h2
        className="font-syne font-extrabold tracking-tighter leading-[1.05] mb-16"
        style={{ fontSize: "clamp(36px,5vw,60px)" }}
      >
        What clients{" "}
        <span className="text-text-muted">say.</span>
      </h2>

      <div
        ref={revealRef}
        className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}
