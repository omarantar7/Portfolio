import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiMiniEnvelope } from "react-icons/hi2";
import { profile } from "@/data/portfolio";

const links = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: HiMiniEnvelope },
];

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {links.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label} className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-heading"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              title={label}
            >
              <span className="sr-only">{label}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
