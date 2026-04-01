import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full",
        "text-[11px] text-text-muted tracking-wide",
        "bg-white/5 border border-white/7",
        "font-dm",
        className
      )}
    >
      {children}
    </span>
  );
}
