import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AccentColor, AiResponseKey, AiResponseMap } from "@/types";

// ─── Class Utilities ──────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─── Accent Color Resolver ────────────────────────────────────────────────────

export const ACCENT_HEX: Record<AccentColor, string> = {
  lime: "#3dd9eb",
  sky: "#4DCDFF",
  coral: "#FF5C4D",
  violet: "#B57BFF",
};

export function getAccentHex(color: AccentColor): string {
  return ACCENT_HEX[color];
}

// ─── AI Response Matcher ──────────────────────────────────────────────────────

export function matchAiResponse(
  input: string,
  responses: AiResponseMap
) {
  const l = input.toLowerCase();
  const key: AiResponseKey =
    l.includes("startup") || l.includes("mvp") || l.includes("launch") || l.includes("landing")
      ? "startup"
      : l.includes("design system") || l.includes("figma") || l.includes("design") || l.includes("ui") || l.includes("ux")
      ? "design"
      : l.includes("code") || l.includes("develop") || l.includes("react") || l.includes("engineer") || l.includes("frontend")
      ? "developer"
      : "default";

  return responses[key];
}

// ─── Scroll Helpers ───────────────────────────────────────────────────────────

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ─── Unique ID Generator ──────────────────────────────────────────────────────

export function uid(): string {
  return Math.random().toString(36).slice(2, 9);
}

// ─── Blob Spline Math ────────────────────────────────────────────────────────

export type Point = [number, number];

export function buildBlobPath(points: Point[]): string {
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const mid: Point = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    d += ` Q ${a[0]},${a[1]} ${mid[0]},${mid[1]}`;
  }
  d += " Z";
  return d;
}

export function randomBlobPoints(
  cx: number,
  cy: number,
  r: number,
  count: number
): Point[] {
  const angles: number[] = [];
  for (let i = 0; i < count; i++) {
    angles.push((i / count) * Math.PI * 2);
  }
  return angles.map((a) => {
    const noise = 0.7 + Math.random() * 0.6;
    return [cx + Math.cos(a) * r * noise, cy + Math.sin(a) * r * noise];
  });
}

export function lerpPoints(a: Point[], b: Point[], t: number): Point[] {
  return a.map((p, i) => [
    p[0] + (b[i][0] - p[0]) * t,
    p[1] + (b[i][1] - p[1]) * t,
  ]);
}

export function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
