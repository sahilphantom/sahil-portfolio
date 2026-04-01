"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  buildBlobPath,
  randomBlobPoints,
  lerpPoints,
  easeInOut,
  type Point,
} from "@/lib/utils";

export function BlobCanvas() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const blobPts = useRef<Point[]>(randomBlobPoints(350, 350, 250, 8));
  const targetPts = useRef<Point[]>(randomBlobPoints(350, 350, 250, 8));
  const blobT = useRef(0);

  const animate = useCallback(() => {
    blobT.current += 0.004;
    if (blobT.current >= 1) {
      blobT.current = 0;
      blobPts.current = targetPts.current;
      targetPts.current = randomBlobPoints(350, 350, 240, 8);
    }

    const current = lerpPoints(
      blobPts.current,
      targetPts.current,
      easeInOut(blobT.current)
    );

    if (pathRef.current) {
      pathRef.current.setAttribute("d", buildBlobPath(current));
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[750px] h-[800px] pointer-events-none opacity-10"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3dd9eb" />
            <stop offset="50%" stopColor="#4DCDFF" />
            <stop offset="100%" stopColor="#FF5C4D" />
          </linearGradient>
        </defs>
        <path ref={pathRef} fill="url(#blobGrad)" />
      </svg>
    </div>
  );
}
