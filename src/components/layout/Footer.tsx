"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/7 bg-bg px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-[13px] font-dm">
          &copy; {year} Sahil Mahmood. Made with intuition.
        </p>

        <div className="flex items-center gap-6 text-[13px] font-dm text-text-muted">
          <Link
            href="#"
            className="hover:text-text transition-colors duration-200"
          >
            Privacy
          </Link>
         
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lime hover:opacity-80 transition-opacity duration-200"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
