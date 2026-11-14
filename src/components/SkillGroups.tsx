import type { ReactNode } from "react";
import Card from "@/components/Card";
import { languages, skills } from "@/data/portfolio";

/** Chips sit as quiet outlines and light up, one after another, when their row is hovered. */
function Chip({ index, children }: { index: number; children: ReactNode }) {
  return (
    <li
      className="rounded-full border border-line px-3 py-1 text-xs font-medium leading-5 text-link transition-colors duration-300 ease-out group-hover:border-accent/20 group-hover:bg-accent-soft/10 group-hover:text-accent motion-reduce:transition-none"
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      {children}
    </li>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="mb-8 last:mb-0">
      <Card>
        <h3 className="z-10 mb-3 mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted transition-colors group-hover:text-heading sm:col-span-2 sm:mb-0">
          {label}
        </h3>
        <ul
          className="z-10 flex flex-wrap gap-2 sm:col-span-6"
          aria-label={label}
        >
          {children}
        </ul>
      </Card>
    </li>
  );
}

export default function SkillGroups() {
  return (
    <ul className="group/list">
      {skills.map(({ group, items }) => (
        <Row key={group} label={group}>
          {items.map((item, index) => (
            <Chip key={item} index={index}>
              {item}
            </Chip>
          ))}
        </Row>
      ))}
      <Row label="Languages">
        {languages.map(({ name, level }, index) => (
          <Chip key={name} index={index}>
            {name}
            <span className="ml-1.5 text-muted transition-colors group-hover:text-accent/70">
              {level}
            </span>
          </Chip>
        ))}
      </Row>
    </ul>
  );
}
