"use client";

import { useEffect, useRef, useState } from "react";
import {
  PaintBrush,
  Code,
  Cube,
  Robot,
  Palette,
  TrendUp,
  HardDrive,
  Cpu,
  GitBranch,
  Sparkle,
  Brain,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data";
import type { SkillCard } from "@/types";
import { CloudArrowUpIcon } from "@phosphor-icons/react/dist/ssr";

// ─── Icon Map ────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  PaintBrush,
  Code,
  Cube,
  Robot,
  Palette,
  TrendUp,
  Server: CloudArrowUpIcon,
  Cpu,
  GitBranch,
  Sparkles: Sparkle,
  BrainCircuit: Brain,
};

// ─── Skill Cell ──────────────────────────────────────────────────────────────

interface SkillCellProps {
  card: SkillCard;
  animate: boolean;
}

function SkillCell({ card, animate }: SkillCellProps) {
  const IconComponent = ICON_MAP[card.icon];

  return (
    <div
      className={cn(
        "relative overflow-hidden group",
        "bg-bg px-8 py-9",
        "transition-colors duration-300 hover:bg-surface-2",
        "cursor-none"
      )}
    >
      {/* Ghost letter */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-[-10px] bottom-[-20px]",
          "font-syne text-[100px] font-black leading-none select-none pointer-events-none",
          "text-white/[0.04] transition-colors duration-300",
          "group-hover:text-white/[0.07]"
        )}
      >
        {card.letter}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: card.iconBg }}
      >
        {IconComponent && (
          <IconComponent size={22} weight="duotone" className="text-text" />
        )}
      </div>

      {/* Name */}
      <h3 className="font-syne text-[20px] font-bold tracking-tight leading-snug mb-2">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-text-muted leading-[1.6] mb-5">
        {card.description}
      </p>

      {/* Skill bar */}
      <div className="h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
        <div
          className="h-full bg-lime rounded-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            width: `${card.level}%`,
            transform: animate ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
          }}
        />
      </div>
    </div>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => setBarsAnimated(true), 300);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-surface border-t border-b border-white/7"
      aria-label="Skills"
    >
      {/* Header */}
      <div
        className={cn(
          "mb-0 transition-all duration-700",
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        )}
      >
        <p className="flex items-center gap-2.5 text-lime text-[11px] font-semibold tracking-[0.12em] uppercase font-fraunces mb-4">
          <span className="block w-6 h-px bg-lime" />
          What I bring
        </p>
        <h2
          className="font-fraunces font-extrabold tracking-tighter leading-[1.0]"
          style={{ fontSize: "clamp(36px,5vw,60px)" }}
        >
          Craft across <span className="text-text-muted italic">the full stack.</span>
        </h2>
      </div>

      {/* 3×2 grid */}
      <div
        className={cn(
          "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          "gap-px bg-white/7",
          "rounded-2xl overflow-hidden border border-white/7",
          "transition-all duration-700 delay-150",
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        )}
      >
        {SKILLS.map((card) => (
          <SkillCell key={card.title} card={card} animate={barsAnimated} />
        ))}
      </div>
    </section>
  );
}