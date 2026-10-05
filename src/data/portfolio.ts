export type Experience = {
  period: string;
  periodLabel: string;
  title: string;
  company: string;
  url?: string;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  url: string;
  sourceUrl: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: string[];
};

export type Certification = {
  name: string;
  issuer: string;
};

// Absolute site URL for canonical links, sitemap and social cards. Set NEXT_PUBLIC_SITE_URL
// once you have a custom domain; on Vercel it falls back to the production domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Omar Antar",
  role: "Full Stack Software Engineer",
  tagline: "I build and ship production web apps and SaaS products, end to end.",
  description:
    "Omar Antar is a full-stack software engineer based in Riyadh, Saudi Arabia, building and shipping production web applications and SaaS products with Vue, Nuxt, React, Next.js, Node.js, PostgreSQL and Docker.",
  photo: "/Profile.jpeg",
  location: "Riyadh, Saudi Arabia",
  email: "omarantar520@gmail.com",
  github: "https://github.com/omarantar7",
  linkedin: "https://www.linkedin.com/in/omar-antar-",
  resume: encodeURI("/Omar Antar's CV.pdf"),
  repositories: "https://github.com/omarantar7?tab=repositories",
  // The original CRA portfolio, still served from the gh-pages branch.
  previousVersion: "https://omarantar7.github.io/Portfolio/",
};

export const experiences: Experience[] = [
  {
    period: "Nov 2024 — Jul 2026",
    periodLabel: "November 2024 to July 2026",
    title: "Full-Stack Web Developer",
    company: "CodenDot",
    description:
      "Delivered 10+ web applications for around 8 clients, including about 10 dashboards and CMS platforms, as part of a team of 5 developers. Built the frontend of a SaaS portfolio-building platform end to end with Vue and Nuxt, added role-based access control to the company CMS, shipped an image pipeline that converts uploads to WebP or AVIF, and introduced the company’s first CI/CD pipeline. Also contributed to system and database design, handled production deployments and releases, and presented progress in live client demos.",
    tags: [
      "Vue",
      "Nuxt",
      "React",
      "Node.js",
      "MySQL",
      "Yii2/PHP",
      "WordPress",
      "Git/GitLab",
      "CI/CD",
    ],
  },
  {
    period: "Apr 2023 — Mar 2024",
    periodLabel: "April 2023 to March 2024",
    title: "UI/UX Designer",
    company: "Encrypt Pty Ltd",
    description:
      "Designed responsive web and mobile interfaces, user flows, wireframes, and high-fidelity prototypes in Figma, translating business requirements into user-centered solutions. Collaborated with frontend developers during Agile sprints to deliver accessible, consistent interfaces and maintain reusable design-system components.",
    tags: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Dental Clinic Management SaaS",
    url: "https://dental-clinic.cc",
    sourceUrl: "https://github.com/omarantar7/dental-clinic",
    image: "/images/projects/dental-clinic.png",
    imageAlt: "Dental Clinic sign-in page",
    description:
      "A clinic management platform I delivered independently, from requirements and system design to deployment and production infrastructure. Doctors and secretaries manage patients, sessions, payments, and analytics, with JWT auth using httpOnly cookies, role-based access, and Cloudflare R2 for patient files.",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "shadcn/ui",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Cloudflare R2",
      "GitHub Actions",
    ],
  },
  {
    title: "ChefBey",
    url: "https://chefbey.org",
    sourceUrl: "https://github.com/omarantar7/chefbey",
    image: "/images/projects/chefbey.webp",
    imageAlt: "ChefBey website homepage hero",
    description:
      "A multilingual website powered by a custom CMS I built from scratch, with content in Arabic, English, and Turkish. Full multilingual SEO got every public page indexed on Google, and an automated CI/CD workflow deploys it to a VPS with Docker and Nginx.",
    tags: [
      "Vue",
      "Nuxt",
      "Pinia",
      "Node.js",
      "TypeScript",
      "Docker",
      "Nginx",
      "i18n",
    ],
  },
];

export const education = {
  period: "2019 — 2022",
  periodLabel: "2019 to 2022",
  degree: "Bachelor’s Degree in Information Technology",
  school: "Institut Technique Orthodox",
  description:
    "Technical education focused on information technology, programming, web development, databases, computer networks, and software development fundamentals.",
};

export const certifications: Certification[] = [
  {
    name: "Software Engineering & System Design",
    issuer: "Software Engineering Excellence Academy SE²",
  },
  { name: "Docker: The Practical Guide", issuer: "Academind" },
  { name: "Clean Code", issuer: "Academind" },
  { name: "The MERN Fullstack Guide", issuer: "Academind" },
];
