import { cn } from "@/lib/utils";

type BadgeVariant = "lime" | "sky" | "coral" | "violet" | "muted" | "green";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  animateDot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  lime: "bg-lime/10 border-lime/20 text-lime",
  sky: "bg-sky/10 border-sky/20 text-sky",
  coral: "bg-coral/10 border-coral/20 text-coral",
  violet: "bg-violet/10 border-violet/20 text-violet",
  muted: "bg-white/5 border-white/7 text-text-muted",
  green: "bg-[rgba(40,200,64,0.1)] border-[rgba(40,200,64,0.2)] text-[#28C840]",
};

const dotColors: Record<BadgeVariant, string> = {
  lime: "bg-lime",
  sky: "bg-sky",
  coral: "bg-coral",
  violet: "bg-violet",
  muted: "bg-text-muted",
  green: "bg-[#28C840]",
};

export function Badge({
  variant = "muted",
  children,
  className,
  dot = false,
  animateDot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border rounded-full",
        "text-[12px] font-medium tracking-wider px-4 py-1.5",
        "font-dm",
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            dotColors[variant],
            animateDot && "animate-blink"
          )}
        />
      )}
      {children}
    </span>
  );
}
