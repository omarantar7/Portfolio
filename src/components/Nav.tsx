"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    // Highlight whichever section crosses the top fifth of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    for (const { id } of items) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
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
