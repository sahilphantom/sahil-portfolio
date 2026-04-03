"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { BlobCanvas } from "@/components/sections/BlobCanvas";
import { STATS } from "@/data";
import { scrollToSection } from "@/lib/utils";

const DEFAULT_BIO =
  "I'm <strong>Sahil</strong> — a full stack developer and <strong>AI automation engineer</strong> building scalable web apps and intelligent workflows. I work with MERN, Python, and modern AI tools to create systems that are fast, practical, and built for real-world use.";

// ─── Terminal ─────────────────────────────────────────────────────────────────

function HeroTerminal() {
  return (
    <>
      <style>{`
        .terminal-typed {
          color: #f0ede8;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #3dd9eb;
          width: 0;
          font-family: 'Courier New', Courier, monospace;
        }
        .terminal-typed.typing-1 {
          animation: type1 1s steps(20, end) 0.4s forwards,
            cursor-blink 0.8s step-end 1.4s 3;
        }
        .terminal-typed.typing-2 {
          animation: type2 1.1s steps(24, end) 1.8s forwards,
            cursor-blink 0.8s step-end 2.9s 2;
        }
        .terminal-typed.typing-3 {
          animation: type3 1.3s steps(28, end) 3.2s forwards,
            cursor-blink 0.8s step-end 4.5s infinite;
        }
        @keyframes type1 { from { width: 0 } to { width: 20ch } }
        @keyframes type2 { from { width: 0 } to { width: 24ch } }
        @keyframes type3 { from { width: 0 } to { width: 28ch } }
        @keyframes cursor-blink {
          0%, 100% { border-right-color: #3dd9eb }
          50% { border-right-color: transparent }
        }
      `}</style>

      <div className="relative bg-surface border border-white/7 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
        {/* Window bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-surface-2 border-b border-white/7">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <p className="flex-1 text-center text-[11px] text-text-muted font-dm tracking-wide">
            sahil@portfolio ~ zsh
          </p>
        </div>

        {/* Terminal body */}
        <div className="px-6 py-7 flex flex-col gap-5 min-h-[370px]">
          {/* whoami */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#3dd9eb] text-[13px] font-mono">$</span>
              <span className="text-text-muted text-[13px] font-mono">whoami</span>
            </div>
            <p className="text-text text-[13px] font-mono leading-relaxed pl-4 border-l border-white/10">
              Sahil — Full Stack &amp; AI Automation Engineer
            </p>
          </div>

          {/* stack */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#3dd9eb] text-[13px] font-mono">$</span>
              <span className="text-text-muted text-[13px] font-mono">cat stack.txt</span>
            </div>
            <div className="pl-4 border-l border-white/10 flex flex-wrap gap-2 mt-1">
              {["MERN","MENN", "Python", "LangChain","LangGraph", "LangSmith", "n8n", "FastAPI", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md border"
                  style={{
                    background: "rgba(61,217,235,0.07)",
                    borderColor: "rgba(61,217,235,0.2)",
                    color: "#3dd9eb",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* status */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#3dd9eb] text-[13px] font-mono">$</span>
              <span className="text-text-muted text-[13px] font-mono">status --now</span>
            </div>
            <div className="pl-4 border-l border-white/10">
              <p className="text-[13px] font-mono text-text-muted">
                role
                <span className="text-text ml-2">Junior Frontend Dev @ Mozzine Technologies</span>
              </p>
              <p className="text-[13px] font-mono text-text-muted mt-1">
                available
                <span className="ml-2" style={{ color: "#28C840" }}>true</span>
              </p>
            </div>
          </div>

          {/* blinking cursor line */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-[#3dd9eb] text-[13px] font-mono">$</span>
            <span
              className="terminal-typed typing-3 text-[13px]"
              style={{ width: 0 }}
            >
              building something great...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Stat Item ────────────────────────────────────────────────────────────────

function StatItem({
  num,
  suffix,
  label,
}: {
  num: string;
  suffix?: string;
  label: string;
}) {
  const display = num === "inf" ? "\u221e" : num;
  return (
    <div>
      <div className="font-syne text-[28px] sm:text-[36px] font-extrabold text-text leading-none">
        {display}
        {suffix && <span className="text-lime">{suffix}</span>}
      </div>
      <div className="text-[11px] sm:text-[13px] text-text-muted mt-1 uppercase tracking-widest font-dm">
        {label}
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const [bio, setBio] = useState(DEFAULT_BIO);
  const [bioKey, setBioKey] = useState(0);

  const handleBioChange = useCallback((html: string) => {
    setBio(html);
    setBioKey((k) => k + 1);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden noise-overlay"
      aria-label="Hero"
    >
     

      {/* Morphing blob */}
      <BlobCanvas />

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-10 items-start min-h-screen px-4 sm:px-6 md:px-12 pt-16 pb-12 lg:pb-16">

        {/* Left — text content */}
        <div className="stagger-children pt-24 sm:pt-28 lg:pt-32">

          {/* Terminal eyebrow */}
          <div className="flex flex-col gap-2">
            <style>{`
              .eyebrow-typed {
                overflow: hidden;
                white-space: nowrap;
                width: 0;
                border-right: 2px solid #3dd9eb;
                font-family: 'Courier New', Courier, monospace;
                font-size: 13px;
                color: #f0ede8;
              }
              .eyebrow-typed.et-1 {
                animation: etType1 0.8s steps(18, end) 0.3s forwards,
                  etBlink 0.7s step-end 1.1s 3;
              }
              .eyebrow-typed.et-2 {
                animation: etType2 1s steps(24, end) 1.6s forwards,
                  etBlink 0.7s step-end 2.6s infinite;
              }
              @keyframes etType1 { from { width: 0 } to { width: 18ch } }
              @keyframes etType2 { from { width: 0 } to { width: 24ch } }
              @keyframes etBlink {
                0%, 100% { border-right-color: #3dd9eb }
                50%       { border-right-color: transparent }
              }
            `}</style>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[13px] text-[#3dd9eb]">$</span>
              <span className="eyebrow-typed et-2">Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[13px] text-[#3dd9eb]">$</span>
              <span className="eyebrow-typed et-2">AI Automation Engineer</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-fraunces font-extrabold leading-[0.95] tracking-tightest mt-6 sm:mt-8">
            <span className="block text-[clamp(42px,7vw,82px)]">
              Build systems
            </span>
            <span className="block text-[clamp(42px,7vw,82px)] text-lime italic">
              powered by AI.
            </span>
            <span
              className="block text-coral font-bold"
              style={{ fontSize: "clamp(30px,4.9vw,72px)" }}
            >
              Code that delivers.
            </span>
          </h1>

          {/* Bio */}
          <p
            key={bioKey}
            className="text-text-muted text-[15px] sm:text-[17px] md:text-[18px] max-w-[540px] leading-[1.75] font-light font-dm mt-5 sm:mt-7"
            style={{ animation: "fadeUp 0.5s ease both" }}
            dangerouslySetInnerHTML={{ __html: bio }}
          />

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-8 sm:mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("work")}
            >
              View Projects &darr;
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Stats */}
<div className="grid grid-cols-2 font-fraunces place-items-center sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-6 sm:gap-10 mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-white/7">
  {STATS.map((s) => (
    <StatItem key={s.label} {...s} />
  ))}
</div>
        </div>

        {/* Right — Terminal (desktop only) */}
        <div className="hidden lg:flex lg:items-center lg:min-h-screen lg:pt-24">
          <HeroTerminal />
        </div>

      </div>
    </section>
  );
}