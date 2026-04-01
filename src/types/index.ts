// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Hero / AI Chat ──────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  text: string;
}

export interface AiResponseEntry {
  msg: string;
  bio: string;
}

export type AiResponseKey = "startup" | "design" | "developer" | "default";

export type AiResponseMap = Record<AiResponseKey, AiResponseEntry>;

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface StatItem {
  num: string;
  suffix?: string;
  label: string;
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export type PhosphorIconName =
  | "PaintBrush"
  | "Code"
  | "CubeFocus"
  | "BrainCircuit"
  | "Shapes"
  | "CloudArrowUp"
  | "Cpu"
  | "Server"
  | "GitBranch"
  | "Sparkles"
  | "ChartLineUp";

export interface SkillCard {
  icon: PhosphorIconName;
  iconBg: string;
  letter: string;
  title: string;
  description: string;
  level: number;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export type AccentColor = "lime" | "sky" | "coral" | "violet";

export interface ProjectLink {
  label: string;
  href: string;
  accent?: boolean;
  accentColor?: AccentColor;
}

export interface Project {
  id: string;
  featured?: boolean;
  emoji: string;
  thumbBg: string;
  image?: string;
  category: string;
  categoryColor: AccentColor;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

export interface MarqueeItem {
  label: string;
}