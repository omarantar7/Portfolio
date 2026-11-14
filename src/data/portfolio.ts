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
  year: number;
  title: string;
  url: string;
  sourceUrl?: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: string[];
};

/** A row on the /projects archive page. */
export type ArchivedProject = {
  year: number;
  title: string;
  /** Shown under the title when the role differs from the usual full-stack work. */
  role?: string;
  url?: string;
  sourceUrl?: string;
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
  tagline:
    "I build and ship production web apps and SaaS products, end to end.",
  description:
    "Omar Antar is a full-stack software engineer based in Riyadh, Saudi Arabia, building and shipping production web applications and SaaS products with Vue, Nuxt, React, Next.js, Node.js, PostgreSQL and Docker.",
  photo: "/Profile.jpeg",
  location: "Riyadh, Saudi Arabia",
  email: "omarantar520@gmail.com",
  github: "https://github.com/omarantar7",
  linkedin: "https://www.linkedin.com/in/omar-antar-",
  resume: encodeURI("/Omar Antar's CV.pdf"),
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
      "Delivered 10+ web applications for about 8 clients on a team of 5 developers working in Agile sprints with daily standups, including around 10 dashboards and CMS platforms. Introduced the company’s first CI/CD pipeline, replacing manual deployments across multiple projects. Built the frontend of Linfolio, a SaaS portfolio builder, end to end in Vue and Nuxt. Added role-based access control to the company CMS so clients can set each employee’s permissions, and shipped an image pipeline that converts uploads to WebP or AVIF to cut file sizes. Improved SEO across client websites by optimizing metadata and page structure. Also shaped system and database design, ran production releases, and presented progress in live client demos.",
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
      "SEO",
    ],
  },
  {
    period: "Apr 2023 — Mar 2024",
    periodLabel: "April 2023 to March 2024",
    title: "UI/UX Designer",
    company: "Encrypt Pty Ltd",
    description:
      "Worked remotely for an Australian company, turning business requirements into user flows, wireframes, and high-fidelity Figma prototypes for responsive web and mobile products. Partnered with frontend developers in Agile sprints to ship accessible interfaces, and maintained the reusable components of the design system.",
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
    year: 2026,
    title: "Mabeet",
    url: "https://mabeet-lb.com",
    image: "/images/projects/mabeet.webp",
    imageAlt: "Mabeet homepage hero with a booking request card",
    description:
      "A booking platform for guesthouses, B&Bs, and mountain cabins across Lebanon, where guests book straight from the host and nobody pays commission. I built it on a team of 3, each of us owning our own part of the product, working in Agile sprints with daily standups. Each host’s calendar syncs both ways with Airbnb and Booking.com, and the database itself rejects a second booking for the same night. Background work runs on cron jobs, Redis rate-limits the API, and an MCP server lets guests check live availability from Claude, ChatGPT, or any AI app.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "i18n",
      "MCP",
      "iCal Sync",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Node.js",
      "Cron Jobs",
      "Vitest",
      "Docker",
      "Nginx",
      "Cloudflare R2",
      "GitHub Actions",
    ],
  },
  {
    year: 2026,
    title: "Dental Clinic Management SaaS",
    url: "https://dental-clinic.cc",
    sourceUrl: "https://github.com/omarantar7/dental-clinic",
    image: "/images/projects/dental-clinic.png",
    imageAlt: "Dental Clinic sign-in page",
    description:
      "A clinic management platform I built on my own, from requirements and system design to deployment, and it’s now in production use. Doctors and secretaries each get role-based access to patients, sessions, payments, and analytics. Sign-in uses JWT access and refresh tokens in httpOnly cookies, and patient files are stored in Cloudflare R2.",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Docker",
      "Nginx",
      "Cloudflare R2",
      "GitHub Actions",
      "GHCR",
    ],
  },
  {
    year: 2026,
    title: "ChefBey",
    url: "https://chefbey.org",
    sourceUrl: "https://github.com/omarantar7/chefbey",
    image: "/images/projects/chefbey.webp",
    imageAlt: "ChefBey website homepage hero",
    description:
      "A website in Arabic, English, and Turkish, running on a custom CMS I built from scratch so content in all three languages is managed in one place. Multilingual SEO got every public page indexed on Google. An automated CI/CD workflow deploys it to a VPS with Docker and Nginx.",
    tags: [
      "Vue",
      "Nuxt",
      "Pinia",
      "Node.js",
      "TypeScript",
      "Vitest",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "GHCR",
      "i18n",
      "RTL",
      "SEO",
    ],
  },
];

// Everything on the /projects page, newest first. Featured projects come from `projects` above.
export const archive: ArchivedProject[] = [
  ...projects.map(({ year, title, url, sourceUrl, tags }) => ({
    year,
    title,
    url,
    sourceUrl,
    tags,
  })),
  {
    year: 2026,
    title: "AMAC",
    url: "https://www.amac.com.lb/",
    tags: ["Vue", "Vite", "Yii2", "PHP", "Bootstrap"],
  },
  {
    year: 2026,
    title: "Linfolio",
    role: "Frontend Developer",
    url: "https://linfol.io",
    tags: ["Vue", "Nuxt"],
  },
  {
    year: 2025,
    title: "Hallab Engineering",
    url: "https://hallabengineering.com/",
    tags: ["Vue", "Vite", "Yii2", "PHP"],
  },
  {
    year: 2025,
    title: "Sabco",
    url: "https://www.sabco-me.com/",
    tags: ["Vue", "Vite", "Yii2", "PHP", "Bootstrap"],
  },
  {
    year: 2025,
    title: "Aanakaboot",
    url: "https://aanakaboot.sa/",
    tags: ["Vue", "Vite", "Yii2", "PHP"],
  },
  {
    year: 2025,
    title: "Tuboshu",
    url: "https://tuboshu.co.uk/",
    tags: ["Vue", "Vite", "Yii2", "PHP"],
  },
  {
    year: 2025,
    title: "Metamac",
    url: "https://www.metamac.ae/",
    tags: ["Vue", "Vite", "Yii2", "PHP", "Bootstrap"],
  },
  {
    year: 2025,
    title: "AALICO",
    url: "https://www.aalico.com/",
    tags: ["WordPress", "PHP"],
  },
];

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "Vue",
      "Nuxt",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Pinia",
      "Zustand",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API Design",
      "JWT Auth",
      "Cron Jobs",
      "Third-Party APIs",
      "Yii2 / PHP",
      "WordPress",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Database Design"],
  },
  {
    group: "DevOps",
    items: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "GHCR",
      "CI/CD",
      "VPS",
      "Cloudflare R2",
      "Git",
    ],
  },
  {
    group: "Testing",
    items: ["Vitest", "Jest", "Unit Testing", "Integration Testing"],
  },
  {
    group: "Practices",
    items: [
      "Performance",
      "Accessibility",
      "SEO",
      "i18n & RTL",
      "Security",
      "Code Review",
      "Agile",
    ],
  },
  {
    group: "AI",
    items: ["Claude Code", "GitHub Copilot", "MCP Servers"],
  },
  {
    group: "Design",
    items: ["Figma", "Prototyping", "Design Systems"],
  },
];

export const languages = [
  { name: "Arabic", level: "Fluent" },
  { name: "English", level: "Professional" },
];

export const education = {
  period: "2019 — 2022",
  periodLabel: "2019 to 2022",
  degree: "Bachelor’s Degree in Information Technology",
  school: "Institut Technique Orthodox",
  description:
    "Coursework in programming, web development, databases, computer networks, and software development fundamentals.",
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
