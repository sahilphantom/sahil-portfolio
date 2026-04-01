"use client";

import { useEffect, useRef, useCallback } from "react";

interface CursorRefs {
  cursorRef: React.RefObject<HTMLDivElement | null>;
  ringRef: React.RefObject<HTMLDivElement | null>;
}

export function useCustomCursor(): CursorRefs {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafRef = useRef<number | null>(null);

  const animateRing = useCallback(() => {
    ringX.current += (mouseX.current - ringX.current) * 0.12;
    ringY.current += (mouseY.current - ringY.current) * 0.12;

    if (ringRef.current) {
      ringRef.current.style.left = `${ringX.current}px`;
      ringRef.current.style.top = `${ringY.current}px`;
    }
    rafRef.current = requestAnimationFrame(animateRing);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleEnter = () => {
      cursorRef.current?.classList.add("cursor--hover");
      ringRef.current?.classList.add("ring--hover");
    };

    const handleLeave = () => {
      cursorRef.current?.classList.remove("cursor--hover");
      ringRef.current?.classList.remove("ring--hover");
    };

    document.addEventListener("mousemove", handleMove);

    const interactables = document.querySelectorAll("a, button, input, textarea");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animateRing]);

  return { cursorRef, ringRef };
}
