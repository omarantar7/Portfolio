import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowLeft, HiMiniArrowUpRight } from "react-icons/hi2";
import ArrowLink from "@/components/ArrowLink";
import Spotlight from "@/components/Spotlight";
import TagList from "@/components/TagList";
import { archive, profile } from "@/data/portfolio";

const title = "All Projects";
const description = `Every project ${profile.name} has shipped, from independent SaaS products to client websites built at CodenDot.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    siteName: profile.name,
    title: `${title} | ${profile.name}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${profile.name}`,
    description,
  },
};

/** "https://omarantar7.github.io/Netflix/" -> "omarantar7.github.io/Netflix" */
function displayUrl(url: string) {
  const { host, pathname } = new URL(url);
  return `${host}${pathname}`.replace(/\/$/, "");
}

export default function ProjectsPage() {
  return (
    <div className="group/spotlight relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-24">
        <header>
          <Link
            href="/"
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent"
          >
            <HiMiniArrowLeft
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            />
            {profile.name}
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
            {title}
          </h1>
        </header>

        <main id="content">
          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-line bg-background/75 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-heading">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-heading">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-heading lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-heading sm:table-cell">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {archive.map((project) => {
                const primaryUrl = project.url ?? project.sourceUrl;
                return (
                  <tr
                    key={project.title}
                    className="border-b border-line/50 last:border-none"
                  >
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">{project.year}</div>
                    </td>

                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-heading">
                      {/* On phones the title carries the link, since the Links column is hidden. */}
                      <div className="sm:hidden">
                        {primaryUrl ? (
                          <ArrowLink href={primaryUrl} text={project.title} />
                        ) : (
                          project.title
                        )}
                      </div>
                      <div className="hidden sm:block">{project.title}</div>
                      {project.role && (
                        <p className="mt-1 text-sm font-normal text-muted">
                          {project.role}
                        </p>
                      )}
                    </td>

                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <div className="-mt-3">
                        <TagList tags={project.tags} />
                      </div>
                    </td>

                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="space-y-1 text-sm">
                        {project.url && (
                          <li>
                            <a
                              className="group/link whitespace-nowrap font-medium text-link hover:text-accent focus-visible:text-accent"
                              href={project.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.title} live site (opens in a new tab)`}
                            >
                              {displayUrl(project.url)}
                              <HiMiniArrowUpRight
                                className="ml-1 inline-block h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        )}
                        {project.sourceUrl && (
                          <li>
                            <a
                              className="inline-flex items-center font-medium text-link hover:text-accent focus-visible:text-accent"
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                            >
                              <FaGithub
                                className="mr-1 h-3 w-3"
                                aria-hidden="true"
                              />
                              Source Code
                            </a>
                          </li>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
