"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const CV_PATH = "/sahil-cv.pdf";

const SOCIALS = [
  { label: "GitHub", icon: <GithubLogoIcon className="size-5" />, href: "https://github.com/sahilphantom" },
  { label: "LinkedIn", icon: <LinkedinLogoIcon className="size-5" />, href: "https://www.linkedin.com/in/sahil-mahmood-b50159337/" },
];

export function ContactSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-bg overflow-hidden text-center"
      aria-label="Contact"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(61,217,235,0.06) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div ref={revealRef} className="reveal-on-scroll relative z-10">
        <SectionLabel  color="#FF5C4D" centered>Get In Touch</SectionLabel>

        <h2
          className="font-fraunces font-extrabold tracking-tightest leading-[0.95] mt-4 mb-6"
          style={{ fontSize: "clamp(48px,8vw,110px)" }}
        >
          Let&apos;s build{" "}
          <span className="text-lime italic">something great.</span>
        </h2>

        <p className="text-text-muted text-[18px] font-dm mb-12 max-w-md mx-auto leading-relaxed">
          I&apos;m open to freelance projects and full-time roles. If you have
          something worth building, let&apos;s talk.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              (window.location.href = "mailto:sahilmehmood188@gmail.com")
            }
          >
            sahilmehmood188@gmail.com &rarr;
          </Button>
          <a href={CV_PATH} download="Sahil_Mahmood_CV.pdf">
            <Button variant="secondary" size="lg">
              Download CV &darr;
            </Button>
          </a>
        </div>

        {/* Social pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={[
                "flex items-center gap-2 px-5 py-2.5 rounded-full",
                "bg-surface border border-white/7 text-text-muted text-[16px]",
                "hover:border-white/20 hover:text-text",
                "transition-all duration-200 font-dm",
              ].join(" ")}
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}