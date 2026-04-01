"use client";

import { useState, useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ─── Role Data ─────────────────────────────────────────────────────────────────

const ROLES = [
  { key: "recruiter", label: "Recruiter" },
  { key: "client",    label: "Client"    },
  { key: "developer", label: "Developer" },
] as const;

type RoleKey = (typeof ROLES)[number]["key"];

const ROLE_TEXT: Record<RoleKey, string> = {
  recruiter:
    "Hi! I'm Sahil — a Full Stack Developer and AI Automation Engineer with hands-on experience across the MERN stack, Python, and modern AI tooling. I've worked at Mozzine Technologies as a Junior Frontend Developer, completed internships in Laravel and MERN, and built real products like an Urdu OCR system and a SaaS invoicing platform. I write clean code, ship on time, and I'm actively looking for a role where I can grow and contribute to something meaningful.",
  client:
    "Hi! I'm Sahil — I build fast, modern web applications and AI-powered automation systems that solve real business problems. Whether you need a full-stack web app, an automated workflow, or an AI-integrated product, I can take it from idea to production. I've built SaaS dashboards, OCR systems, CLI tools, and automation pipelines — and I care about delivering things that actually work.",
  developer:
    "Hey! I'm Sahil — full-stack with MERN and Python, currently deep into AI automation. My stack includes React, Next.js, Node.js, FastAPI, LangChain, LangGraph, and n8n. I've built an Urdu OCR system trained on 10K+ images, automated pipelines using LLM APIs, and a Node.js CLI for database backups with Google Drive integration. I enjoy working on things at the intersection of AI and practical engineering.",
};

// ─── Typewriter Hook ───────────────────────────────────────────────────────────

function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;

    function tick() {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        rafRef.current = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }

    rafRef.current = setTimeout(tick, speed);
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [text, speed]);

  return { displayed, done };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function AiPersonalizationSection() {
  const [activeRole, setActiveRole] = useState<RoleKey>("recruiter");
  const { displayed, done } = useTypewriter(ROLE_TEXT[activeRole]);

  return (
    <section
      id="ai"
      className="py-24 px-4 sm:px-6 md:px-6 bg-bg border-t border-b border-white/7"
      aria-label="AI Personalization"
    >
      <div className="max-w-[860px] mx-auto">

        {/* Header split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-10">
          <div>
            <SectionLabel color="#B57BFF" >Tailored for different roles</SectionLabel>
            <h2
              className="font-syne font-extrabold tracking-tighter leading-[1.05] mt-4"
              style={{ fontSize: "clamp(32px,5vw,44px)" }}
            >
              Personalized
              <br />
              <em className="text-lime not-italic">intro.</em>
            </h2>
          </div>
          <p className="text-text-muted text-[14px] sm:text-[15px] leading-[1.85] font-dm">
            Different visitors need different context. Select a role to see how
            I'd introduce myself — same background, different lens. Each version
            highlights what matters most to you.
          </p>
        </div>

        {/* AI Box */}
        <div className="bg-surface-2 border border-white/7 rounded-xl overflow-hidden">

          {/* Box header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/7 bg-bg">
            <span className="font-mono text-[10px] font-light tracking-[0.12em] uppercase text-text-muted">
              Personalization Engine
            </span>
            
          </div>

          {/* Box body */}
          <div className="p-5">

            {/* Role label */}
            <p className="font-mono text-[10px] font-light tracking-[0.12em] uppercase text-text-muted mb-3">
              I am a…
            </p>

            {/* Role buttons */}
            <div className="flex flex-wrap gap-2 mb-5">
              {ROLES.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setActiveRole(r.key)}
                  className={[
                    "font-mono text-[11px] font-light tracking-[0.06em] px-4 py-1.5 rounded border transition-all duration-200",
                    activeRole === r.key
                      ? "border-lime text-lime bg-lime/10"
                      : "border-white/10 text-text-muted hover:border-white/20 hover:text-text bg-transparent",
                  ].join(" ")}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Output */}
            <div
              className="bg-black/40 rounded-lg px-5 py-4 font-mono text-[13px] leading-[1.85] font-light text-text min-h-[130px]"
            >
              {displayed}
              {!done && (
                <span
                  className="inline-block w-[2px] h-[13px] bg-lime ml-[1px] align-middle"
                  style={{ animation: "blink 0.75s infinite" }}
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}