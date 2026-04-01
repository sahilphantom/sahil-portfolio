"use client";

import { useCustomCursor } from "@/components/hooks/useCustomCursor";

export function CustomCursor() {
  const { cursorRef, ringRef } = useCustomCursor();

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
