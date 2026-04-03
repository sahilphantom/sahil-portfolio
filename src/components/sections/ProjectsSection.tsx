"use client";

import { useState, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { PROJECTS } from "@/data";

export function ProjectsSection() {
  const revealRef = useScrollReveal();
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  // Show 3 by default (fills one row on lg), rest hidden
  const visible = rest.slice(0, 3);
  const hidden = rest.slice(3);

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 md:px-12 bg-surface border-t border-white/7"
      aria-label="Selected work"
    >
      <SectionLabel color="#F5C542">Selected Work</SectionLabel>

      <h2
        className="font-fraunces font-extrabold tracking-tighter leading-[1.05] mb-12"
        style={{ fontSize: "clamp(32px,5vw,60px)" }}
      >
        Projects I&apos;m{" "}
        <span className="text-text-muted italic">proud of.</span>
      </h2>

      <div ref={revealRef} className="reveal-on-scroll flex flex-col gap-5">
        {/* Featured — horizontal card */}
        {featured && <ProjectCard project={featured} featured />}

        {/* Always visible grid row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Expandable hidden projects */}
        {hidden.length > 0 && (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              maxHeight: expanded ? gridRef.current?.scrollHeight ?? 9999 : 0,
              opacity: expanded ? 1 : 0,
            }}
          >
            {hidden.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Expand / Collapse button */}
        {hidden.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="group relative flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-surface-2 text-text-muted text-[13px] font-dm font-medium tracking-wide hover:border-lime/40 hover:text-lime transition-all duration-300"
            >
              {/* Glow */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-lime/10 pointer-events-none" />

              {/* Icon */}
              <span
                className="relative flex items-center justify-center w-5 h-5 rounded-full border border-current transition-transform duration-500"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <span className="relative">
                {expanded
                  ? `Collapse — hide ${hidden.length} projects`
                  : `See all — ${hidden.length} more projects`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}