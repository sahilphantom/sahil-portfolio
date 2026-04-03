"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// ─── Variant Maps ─────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-lime text-black border-transparent font-fraunces font-bold",
    "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(61,217,235,0.3)]",
  ].join(" "),
  secondary: [
    "bg-transparent text-text border border-white/10 font-fraunces font-semibold",
    "hover:border-white/20 hover:bg-white/[0.04]",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-muted border border-white/7 font-fraunces font-medium",
    "hover:border-white/20 hover:text-text",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm rounded-full",
  md: "px-9 py-4 text-sm rounded-full",
  lg: "px-12 py-[18px] text-base rounded-full",
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/50",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
