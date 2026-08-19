/**
 * SINGLE SOURCE OF TRUTH.
 * Every section of the site renders from this file. Update your resume ->
 * update this file -> the whole site follows. Nothing is hardcoded in the UI.
 */

export const profile = {
  name: "Ayush Mishra",
  initials: "AM",
  title: "Software Engineer",
  focus: "Backend & Full Stack",
  location: "New Delhi, India",
  noticePeriod: "15 days",
  headline: "I build backend systems that move video at scale.",
  lede:
    "Around two years at Digivive building production services for an OTT streaming platform — a multi-profile video transcoding pipeline in Java and Spring Boot, and a full content management system in Laravel and PostgreSQL.",
  summary:
    "Software Engineer with ~2 years building and running production backend systems for an OTT streaming platform. Comfortable owning a service end to end — schema design, API surface, job-processing workflows, failure handling and performance tuning.",
  openTo: "Open to backend and full-stack roles in Delhi NCR.",
  // Résumé download is currently hidden. To restore: put the PDF back in public/,
  // then re-add the button in app/page.tsx (hero CTA + footer).
  resumeFile: "/Ayush_Mishra_Resume.pdf",
  photo: "/ayush.png",
  status: "Open to opportunities",
} as const;

export const contact = {
  email: "ayushmishrarkt2345@gmail.com",
  phone: "+91 8858771351",
  phoneHref: "tel:+918858771351",
  linkedin: "https://www.linkedin.com/in/25ayush-mishra/",
  linkedinLabel: "/in/25ayush-mishra",
  github: "https://github.com/ayushmishra25",
  githubLabel: "@ayushmishra25",
} as const;

/** Hero stat tiles. Add a metric here once you have a real number for it. */
export const stats = [
  { label: "Experience", value: "~2 yrs" },
  { label: "Production systems", value: "2" },
  { label: "DSA problems", value: "200+" },
  { label: "B.Tech CGPA", value: "8.1" },
] as const;

export type Work = {
  name: string;
  stack: string[];
  bullets: string[];
  blurb: string;
  production: boolean;
};

export const experience = [
  {
    company: "Digivive Services Pvt Ltd",
    role: "Software Engineer — OTT Platform Solutions",
    period: "Oct 2024 – Present",
    location: "New Delhi",
    scope:
      "Backend engineer across two production systems on the company's OTT streaming platform. I own service design, API surfaces, database schemas, job-processing workflows and performance work — plus the reliability engineering that keeps a media pipeline from failing quietly.",
    work: [
      {
        name: "Video Transcoding & Packaging Pipeline",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Bento4"],
        production: true,
        blurb:
          "Multi-profile encoding pipeline for OTT streaming delivery, with job orchestration APIs, automated workflow execution and PostgreSQL-backed traceability.",
        bullets: [
          "Designed and built a transcoding pipeline supporting multi-profile encoding for streaming delivery.",
          "Built backend services and REST APIs for job creation, processing, monitoring and status tracking.",
          "Wrote transcoding scripts across multiple resolution and bitrate profiles and automated end-to-end workflow execution.",
          "Used Bento4 to package encoded output into streaming-ready formats for smooth playback delivery.",
          "Modelled PostgreSQL storage for jobs, profiles, logs and pipeline metadata — full traceability on every run.",
          "Hardened it in production with failure handling, retries, error logging and job reprocessing.",
        ],
      },
      {
        name: "OTT Content Management Platform",
        stack: ["Laravel", "PostgreSQL", "REST", "RBAC"],
        production: true,
        blurb:
          "Full CMS for content upload, scheduling, metadata and categorisation, with secure REST APIs and role-based access control.",
        bullets: [
          "Built the CMS end to end: content upload, scheduling, metadata handling and video categorisation.",
          "Developed and integrated secure REST APIs for user roles, modules, permissions and media asset management.",
          "Implemented role-based access control to secure and scale admin operations.",
          "Improved performance through backend refactoring, query optimisation, indexing and caching.",
        ],
      },
    ] satisfies Work[],
  },
] as const;

/** `core` = the ones recruiters search for. They render highlighted. */
export const skills = [
  {
    group: "Backend",
    items: [
      { name: "Java", core: true },
      { name: "Spring Boot", core: true },
      { name: "Laravel", core: true },
      { name: "REST API design", core: true },
      { name: "PHP" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Schema design" },
      { name: "Query optimisation" },
      { name: "Indexing" },
      { name: "Caching" },
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3)", core: true },
      { name: "Docker", core: true },
      { name: "Kubernetes", core: true },
      { name: "Nginx" },
      { name: "SSL" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Responsive design" },
    ],
  },
  {
    group: "Testing & Performance",
    items: [
      { name: "Apache JMeter", core: true },
      { name: "Load testing" },
      { name: "Load balancing" },
      { name: "Performance tuning" },
      { name: "Query profiling" },
    ],
  },
  {
    group: "Practices",
    items: [
      { name: "RBAC" },
      { name: "Job-processing workflows" },
      { name: "Retry & failure handling" },
      { name: "Agile" },
      { name: "Postman" },
    ],
  },
  {
    group: "Foundations",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "OOP" },
      { name: "Operating Systems" },
      { name: "DBMS" },
      { name: "Computer Networks" },
    ],
  },
] as const;

/**
 * Products Ayush worked on the backend for, live in production.
 * `context` = what the product does (taken from the public product pages).
 * `contribution` = his part. Keep those two separate — it is what keeps the claim honest.
 */
export const personalProjects = [
  {
    name: "Cloud",
    tagline: "Repo-connected deployment platform",
    context:
      "A cloud deployment platform: connect a GitHub, GitLab or Bitbucket repository and ship straight to production. Handles separate dev, staging and production environments, real-time build and runtime logs, health checks, and autoscaling — so product teams deploy without managing infrastructure themselves.",
    contribution:
      "Backend engineering in Java and Spring Boot — the services and REST APIs behind repository connection, deployment orchestration and environment management.",
    stack: ["Java", "Spring Boot", "REST APIs"],
    live: true,
    repo: "",
  },
  {
    name: "Mail",
    tagline: "Business email on your own domain",
    context:
      "A business email service running on customer-owned domains: mailbox provisioning under central admin control, spam filtering, encryption in transit and account protection, with calendar and contacts alongside mail in one workspace.",
    contribution:
      "Backend engineering in Java and Spring Boot — mailbox provisioning, domain and account management, and the REST APIs the admin surface runs on.",
    stack: ["Java", "Spring Boot", "REST APIs", "SMTP"],
    live: true,
    repo: "",
  },
] as const;

export const earlierProjects = [
  {
    name: "Crypto-Centric Blog Platform",
    blurb:
      "News and blog platform for cryptocurrency content, with content management and a REST-driven frontend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "LearnLog",
    blurb:
      "Student-focused self-help mobile app with an Appwrite backend and API authentication, wired to an open LLM.",
    stack: ["Flutter", "Appwrite", "Open LLM", "REST"],
  },
  {
    name: "Content Aggregator",
    blurb:
      "Pulls topic-specific content from across the web and aggregates it into a single feed.",
    stack: ["Python"],
  },
] as const;

export const education = [
  {
    when: "2021 – 2025",
    what: "B.Tech, Computer Science & Engineering",
    where: "Raj Kumar Goel Institute of Technology, Ghaziabad",
    link: "https://www.rkgit.edu.in/",
    result: "CGPA 8.1 / 10",
    note: "Joined Digivive in Oct 2024 and worked full-time through the final year.",
  },
  {
    when: "2019 – 2021",
    what: "Intermediate",
    where: "Aditya Birla Intermediate College, Renukoot",
    link: "https://adityabirlaschools.co.in/abic-renukoot/",
    result: "87%",
  },
  {
    when: "2017 – 2019",
    what: "High School",
    where: "Aditya Birla Intermediate College, Renukoot",
    link: "https://adityabirlaschools.co.in/abic-renukoot/",
    result: "84%",
  },
] as const;

export const internships = [
  { org: "Hindalco Industries (Aditya Birla Group)", role: "IT Programmer — Renukoot" },
  { org: "CodeClause", role: "Python Development Intern" },
  { org: "Oasis Infobyte", role: "Web Development Intern" },
] as const;

export const beyondCode = [
  { title: "President — Taxila", detail: "The literary society of RKGIT" },
  { title: "Winner — Line Following Robot", detail: "Technical competition, IEEE RKGIT" },
  { title: "Runner-up — Robo Soccer", detail: "Technical competition, Electrazz RKGIT" },
] as const;

export const achievements = [
  "Solved 200+ data structures and algorithms problems across LeetCode and GeeksforGeeks.",
] as const;

export const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
