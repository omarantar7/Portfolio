"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    let frame = 0;

    // The active section is the last one whose top has passed the top fifth of the
    // viewport. Sections are looked up on every pass, so the highlight never goes
    // stale when the page re-renders, and fast jumps (End key, scrollbar drags) can't
    // skip a section the way intersection events can.
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.2;
      let current = items[0].id;
      for (const { id } of items) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      // At the very bottom the last sections can't scroll any higher, so mark the last item.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = items[items.length - 1].id;
      setActiveId(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {items.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <li key={id}>
              <a
                className="group flex items-center py-3"
                href={`#${id}`}
                aria-current={active ? "location" : undefined}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading motion-reduce:transition-none ${
                    active ? "w-16 bg-heading" : "w-8 bg-line"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest group-hover:text-heading group-focus-visible:text-heading ${
                    active ? "text-heading" : "text-muted"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
