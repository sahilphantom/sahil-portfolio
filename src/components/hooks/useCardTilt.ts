"use client";

import { useRef, useCallback } from "react";

export function useCardTilt<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(4px)`;
    card.style.transition = "none";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    card.style.transition = "transform 0.5s ease";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
