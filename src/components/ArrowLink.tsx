import { HiMiniArrowRight, HiMiniArrowUpRight } from "react-icons/hi2";

type ArrowLinkProps = {
  href: string;
  text: string;
  ariaLabel?: string;
  /** Stretch the link over its parent card so the whole card is clickable. */
  cover?: boolean;
  /** Same-tab link with a right arrow instead of an external up-right arrow. */
  internal?: boolean;
  className?: string;
};

export default function ArrowLink({
  href,
  text,
  ariaLabel = text,
  cover = false,
  internal = false,
  className = "font-medium",
}: ArrowLinkProps) {
  // Keep the arrow glued to the last word so it never wraps onto its own line.
  const splitAt = text.lastIndexOf(" ");
  const lead = splitAt === -1 ? "" : text.slice(0, splitAt + 1);
  const last = text.slice(splitAt + 1);
  const Arrow = internal ? HiMiniArrowRight : HiMiniArrowUpRight;

  return (
    <a
      className={`group/link inline-flex items-baseline text-base leading-tight text-heading hover:text-accent focus-visible:text-accent ${className}`}
      href={href}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noreferrer noopener"}
      aria-label={internal ? ariaLabel : `${ariaLabel} (opens in a new tab)`}
    >
      {cover && (
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      )}
      <span>
        {lead}
        <span className="inline-block">
          {last}
          <Arrow
            className={`ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform motion-reduce:transition-none ${
              internal
                ? "group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2"
                : "group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
            }`}
            aria-hidden="true"
          />
        </span>
      </span>
    </a>
  );
}
