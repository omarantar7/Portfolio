import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { LuHistory } from "react-icons/lu";
import ArrowLink from "@/components/ArrowLink";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import Spotlight from "@/components/Spotlight";
import TagList from "@/components/TagList";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  siteUrl,
} from "@/data/portfolio";

// Tells search engines this page is about a person, which helps name searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: new URL(profile.photo, siteUrl).toString(),
  jobTitle: profile.role,
  description: profile.description,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: education.school,
  },
  knowsAbout: [
    "Full-stack web development",
    "Vue",
    "Nuxt",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "CI/CD",
    "UI/UX design",
  ],
  sameAs: [profile.github, profile.linkedin],
};

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-heading">{children}</span>;
}

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-12/25 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="mb-8 size-24 overflow-hidden rounded-full ring-2 ring-accent/40 ring-offset-4 ring-offset-background sm:size-28">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={336}
                  height={448}
                  priority
                  className="size-full origin-top scale-150 object-cover object-face"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                <Link href="/">{profile.name}</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">
                {profile.role}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
              <Nav />
            </div>
            <SocialLinks />
          </header>

          <main id="content" className="pt-24 lg:w-13/25 lg:py-24">
            <Section id="about" title="About" label="About me">
              <p className="mb-4">
                I’m a full-stack software engineer based in{" "}
                <Highlight>{profile.location}</Highlight>, and I enjoy taking
                products from an idea all the way to production. My work spans
                the whole lifecycle: gathering requirements, designing system
                architecture, modeling databases and APIs, building the backend
                and frontend, and running the infrastructure that keeps it all
                live.
              </p>
              <p className="mb-4">
                Most recently, I was a Full-Stack Web Developer at{" "}
                <Highlight>CodenDot</Highlight>, where I helped deliver{" "}
                <Highlight>10+ web applications</Highlight> for clients, from
                SaaS dashboards and CMS platforms to a portfolio-building
                platform, and introduced the company’s first CI/CD pipeline. On
                my own, I’ve designed, built, and deployed production products
                like a{" "}
                <a
                  className="font-medium text-heading hover:text-accent focus-visible:text-accent"
                  href={projects[0].url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Dental clinic management SaaS (opens in a new tab)"
                >
                  dental clinic management SaaS
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-heading hover:text-accent focus-visible:text-accent"
                  href={projects[1].url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="ChefBey (opens in a new tab)"
                >
                  ChefBey
                </a>
                .
              </p>
              <p>
                My core stack is Vue, Nuxt, React, Next.js, Node.js, Express,
                Prisma, PostgreSQL, MySQL, and Docker, and I care a lot about{" "}
                <Highlight>clean architecture</Highlight>, maintainability, and
                sound engineering principles. I also have a background in UI/UX
                design, which still shapes how I think about the people using
                what I build.
              </p>
            </Section>

            <Section id="experience" title="Experience" label="Work experience">
              <ol className="group/list">
                {experiences.map((job) => (
                  <li key={job.company} className="mb-12">
                    <Card>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
                        aria-label={job.periodLabel}
                      >
                        {job.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-heading">
                          {job.url ? (
                            <ArrowLink
                              href={job.url}
                              text={`${job.title} · ${job.company}`}
                              ariaLabel={`${job.title} at ${job.company}`}
                              cover
                            />
                          ) : (
                            <span className="text-base leading-tight">
                              {job.title} · {job.company}
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {job.description}
                        </p>
                        <TagList tags={job.tags} />
                      </div>
                    </Card>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <ArrowLink
                  href={profile.resume}
                  text="View Full Résumé"
                  className="font-semibold"
                />
              </div>
            </Section>

            <Section id="projects" title="Projects" label="Selected projects">
              <ul className="group/list">
                {projects.map((project) => (
                  <li key={project.title} className="mb-12">
                    <Card className="gap-4">
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <ArrowLink
                            href={project.url}
                            text={project.title}
                            cover
                          />
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {project.description}
                        </p>
                        <a
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-link hover:text-accent focus-visible:text-accent"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                        >
                          <FaGithub
                            className="mr-1 h-3 w-3"
                            aria-hidden="true"
                          />
                          <span>Source Code</span>
                        </a>
                        <TagList tags={project.tags} />
                      </div>
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={200}
                        height={48}
                        className="aspect-video rounded border-2 border-heading/10 object-cover transition group-hover:border-heading/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      />
                    </Card>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <ArrowLink
                  href={profile.repositories}
                  text="View Full Project Archive"
                  className="font-semibold"
                />
              </div>
            </Section>

            <Section
              id="education"
              title="Education"
              label="Education and certifications"
            >
              <ul className="group/list">
                <li className="mb-12">
                  <Card>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
                      aria-label={education.periodLabel}
                    >
                      {education.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="text-base font-medium leading-snug text-heading">
                        {education.degree} · {education.school}
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {education.description}
                      </p>
                    </div>
                  </Card>
                </li>
                <li className="mb-12">
                  <Card>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">
                      Certifications
                    </header>
                    <ul className="z-10 space-y-3 sm:col-span-6">
                      {certifications.map((cert) => (
                        <li key={cert.name}>
                          <h3 className="text-base font-medium leading-snug text-heading">
                            {cert.name}
                          </h3>
                          <p className="text-sm leading-normal">
                            {cert.issuer}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </li>
              </ul>
            </Section>

            <footer className="pb-16 sm:pb-0 flex justify-end">
              <a
                className="group/v1 inline-flex items-center gap-3 rounded-full border border-line bg-surface/40 py-2 pl-2 pr-5 transition hover:border-accent/50 hover:bg-surface focus-visible:border-accent/50 focus-visible:bg-surface motion-reduce:transition-none"
                href={profile.previousVersion}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit the first version of this portfolio (opens in a new tab)"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/20">
                  <LuHistory
                    className="h-4 w-4 transition-transform duration-500 group-hover/v1:-rotate-180 group-focus-visible/v1:-rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-muted">
                    Curious where it started?
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-heading group-hover/v1:text-accent group-focus-visible/v1:text-accent">
                    Visit portfolio v1
                    <HiMiniArrowUpRight
                      className="ml-1 h-4 w-4 transition-transform group-hover/v1:-translate-y-0.5 group-hover/v1:translate-x-0.5 group-focus-visible/v1:-translate-y-0.5 group-focus-visible/v1:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
