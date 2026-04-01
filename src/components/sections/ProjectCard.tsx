"use client";

import Link from "next/link";
import Image from "next/image";
import { useCardTilt } from "@/components/hooks/useCardTilt";
import { cn, getAccentHex } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

// ─── Tag Badge ────────────────────────────────────────────────────────────────

function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-light tracking-wide border border-white/10 bg-white/[0.04] text-text-muted">
      {label}
    </span>
  );
}

// ─── Featured Card (horizontal) ──────────────────────────────────────────────

function FeaturedCard({ project }: { project: Project }) {
  const categoryColor = getAccentHex(project.categoryColor);

  return (
    <div className="bg-bg border border-white/7 rounded-2xl overflow-hidden hover:border-white/15 transition-[border-color] duration-300 grid grid-cols-1 md:grid-cols-2">
      {/* Left — image */}
      <div
        className="relative flex items-center justify-center min-h-[260px] md:min-h-[380px]"
        style={{ background: project.thumbBg }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-[72px] leading-none select-none">{project.emoji}</span>
        )}
      </div>

      {/* Right — content */}
      <div className="p-8 flex flex-col justify-center">
        <p
          className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3 font-dm"
          style={{ color: categoryColor }}
        >
          {project.category}
        </p>

        <h3 className="font-syne text-[26px] font-bold tracking-tight mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-[14px] text-text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 flex-wrap">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[12px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full",
                "border transition-all duration-200 font-dm",
                link.accent
                  ? "text-black border-transparent hover:opacity-90"
                  : "text-text border-white/7 hover:border-white/20 hover:bg-white/[0.04]"
              )}
              style={
                link.accent && link.accentColor
                  ? { background: getAccentHex(link.accentColor) }
                  : undefined
              }
            >
              {link.label} {link.accent && "→"}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Regular Card (vertical) ─────────────────────────────────────────────────

export function ProjectCard({ project, className, featured }: ProjectCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useCardTilt<HTMLDivElement>();
  const categoryColor = getAccentHex(project.categoryColor);

  if (featured) return <FeaturedCard project={project} />;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bg-bg border border-white/7 rounded-2xl overflow-hidden",
        "transition-[border-color] duration-300 hover:border-white/15",
        "flex flex-col",
        className
      )}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ background: project.thumbBg, height: "200px" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-[48px] leading-none select-none">{project.emoji}</span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-2 font-dm"
          style={{ color: categoryColor }}
        >
          {project.category}
        </p>

        <h3 className="font-syne text-[19px] font-bold tracking-tight mb-2">
          {project.title}
        </h3>

        <p className="text-[13px] text-text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 flex-wrap">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[12px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full",
                "border transition-all duration-200 font-dm",
                link.accent
                  ? "text-black border-transparent hover:opacity-90"
                  : "text-text border-white/7 hover:border-white/20 hover:bg-white/[0.04]"
              )}
              style={
                link.accent && link.accentColor
                  ? { background: getAccentHex(link.accentColor) }
                  : undefined
              }
            >
              {link.label} {link.accent && "→"}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}