import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  color?: string;
}

export function SectionLabel({
  children,
  className,
  centered = false,
  color = "#3dd9eb",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        "text-[11px] font-semibold tracking-widest uppercase font-dm",
        "mb-4",
        centered && "justify-center",
        className
      )}
      style={{ color }}
    >
      {!centered && (
        <span
          className="block w-6 h-px flex-shrink-0"
          style={{ background: color }}
        />
      )}
      {children}
    </div>
  );
}