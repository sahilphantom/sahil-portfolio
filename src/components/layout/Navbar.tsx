"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href.slice(1));
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "border-b border-white/7",
        "bg-bg/70 backdrop-blur-xl",
        "transition-all duration-300",
        scrolled ? "px-6 md:px-12 py-3" : "px-6 md:px-12 py-5"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-fraunces font-extrabold text-[28px] italic tracking-tight text-text no-underline"
        aria-label="Sahil — home"
      >
        SAHIL<span className="text-lime">.</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={cn(
              "text-text-muted text-[13px] font-medium tracking-wide uppercase",
              "transition-colors duration-200 hover:text-text",
              "font-instrument"
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <Button
        variant="primary"
        size="sm"
        className="hidden md:inline-flex text-[13px] px-6 py-2.5"
        onClick={() => scrollToSection("contact")}
      >
        Let&apos;s Talk &rarr;
      </Button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileOpen}
      >
        <span
          className={cn(
            "block w-6 h-px bg-text transition-all duration-300",
            mobileOpen && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "block w-6 h-px bg-text transition-all duration-300",
            mobileOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block w-6 h-px bg-text transition-all duration-300",
            mobileOpen && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0",
          "bg-surface border-b border-white/7",
          "flex flex-col gap-0 md:hidden",
          "transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={cn(
              "px-6 py-4 text-text-muted text-sm uppercase tracking-wide",
              "border-b border-white/5 hover:text-text hover:bg-white/[0.03]",
              "transition-colors duration-200 font-dm"
            )}
          >
            {link.label}
          </a>
        ))}
        <div className="px-6 py-4">
          <Button
            variant="primary"
            size="sm"
            className="w-full justify-center"
            onClick={() => { scrollToSection("contact"); setMobileOpen(false); }}
          >
            Let&apos;s Talk &rarr;
          </Button>
        </div>
      </div>
    </header>
  );
}
