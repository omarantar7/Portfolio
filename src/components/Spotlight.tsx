"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      el.style.setProperty("--spotlight-x", `${event.pageX}px`);
      el.style.setProperty("--spotlight-y", `${event.pageY}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="spotlight pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    />
  );
}
