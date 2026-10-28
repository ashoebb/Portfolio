export const profile = {
  name: "Abdu Ibra",
 
  title: "DevOps & Cloud Engineer",
  tagline: "Building reliable infrastructure where it matters.",
  location: "Cairo, Egypt · Remote",
  origin: "Egypt",
  email: "abduswedev@gmail.com",
  github: "https://github.com/ashoebb",
  linkedin: "https://www.linkedin.com/in/abdelrahman-shoeb-ba4230218/",
  username: "abdu",
  host: "devops",
};

export const about = {
  bio: [
    "DevOps & Cloud Engineer based in Cairo, Egypt, working remotely.",
    "B.Eng. Computer Engineering from the Arab Academy for Science and Technology (2024).",
    "I design, automate and operate AWS infrastructure (Terraform and CloudFormation, GitHub Actions CI/CD, containers, monitoring) and ship the application code when a product needs it.",
    "Currently pursuing the AWS Solutions Architect Associate (SAA-C03) certification.",
  ],
  facts: [
    { key: "name",         value: "Abdu Ibra" },
    { key: "role",         value: "DevOps & Cloud Engineer" },
    { key: "location",     value: "Cairo, Egypt · Remote" },
    { key: "education",    value: "B.Eng. Computer Engineering, AAST (2024)" },
    { key: "certification",value: "AWS Solutions Architect Associate (in progress)" },
    { key: "uptime",       value: "24/7 — coffee-powered" },
  ],
};

export type Skill = { name: string; level: number };
export type SkillGroup = { category: string; icon: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud",
    icon: "☁",
    skills: [
      { name: "AWS EC2",        level: 92 },
      { name: "AWS S3",         level: 95 },
      { name: "AWS Lambda",     level: 88 },
      { name: "DynamoDB",       level: 90 },
      { name: "CloudFront",     level: 85 },
      { name: "IAM",            level: 88 },
      { name: "VPC",            level: 82 },
      { name: "Route53",        level: 80 },
    ],
  },
  {
    category: "IaC & Config",
    icon: "⚙",
    skills: [
      { name: "Terraform",      level: 88 },
      { name: "CloudFormation", level: 82 },
      { name: "Ansible",        level: 75 },
    ],
  },
  {
    category: "Containers",
    icon: "⬢",
    skills: [
      { name: "Docker",         level: 90 },
      { name: "Kubernetes",     level: 80 },
      { name: "EKS",            level: 80 },
      { name: "ECS",            level: 78 },
    ],
  },
  {
    category: "CI/CD",
    icon: "↻",
    skills: [
      { name: "GitHub Actions", level: 92 },
      { name: "Jenkins",        level: 78 },
      { name: "AWS CodePipeline", level: 80 },
    ],
  },
  {
    category: "Monitoring",
    icon: "▲",
    skills: [
      { name: "Prometheus",     level: 80 },
      { name: "Grafana",        level: 82 },
      { name: "CloudWatch",     level: 88 },
      { name: "Datadog",        level: 80 },
      { name: "Incident Response", level: 80 },
      { name: "Log Analysis & Alerting", level: 80 },
    ],
  },
  {
    category: "Languages & Data",
    icon: "{}",
    skills: [
      { name: "Python",         level: 88 },
      { name: "Bash",           level: 90 },
      { name: "Node.js",        level: 90 },
      { name: "PHP (Laravel)",  level: 80 },
      { name: "MySQL",          level: 80 },
      { name: "PostgreSQL",     level: 80 },
      { name: "REST APIs",      level: 80 },
    ],
  },
  {
    category: "Systems",
    icon: "$",
    skills: [
      { name: "Linux (Ubuntu)", level: 92 },
      { name: "Linux (CentOS)", level: 80 },
      { name: "Networking",     level: 82 },
      { name: "SSL/TLS",        level: 85 },
      { name: "Git / GitHub",   level: 95 },
      { name: "IAM & Security", level: 80 },
      { name: "SOC 2 Readiness", level: 75 },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Tech Lead / Founding Engineer @ Dot — Stealth AI Social Platform",
    company: "",
    period: "Jun 2025 — Present",
    bullets: [
      "Sole engineer owning the full AWS infrastructure for a consumer social platform, from architecture design through production operations.",
      "Built the backend from zero: EC2, S3, 16 DynamoDB tables, IAM roles, CloudFront delivery, and 40+ REST API endpoints (Node.js/Express) for accounts, content feeds, and video uploads.",
      "Automated releases with GitHub Actions and AWS CodePipeline so every merge to main deploys with zero manual steps; infrastructure defined as code in CloudFormation.",
      "Built a video processing pipeline using S3 event triggers and Lambda for transcoding and delivery.",
      "Own monitoring, alerting, and incident response using CloudWatch and Datadog; led root-cause investigations and post-incident fixes.",
      "Applied SOC 2-aligned practices (access control, audit logging, infrastructure documentation) in preparation for enterprise customers.",
    ],
    tags: ["AWS", "Node.js", "DynamoDB", "GitHub Actions", "CloudFormation"],
  },
  {
    role: "Software Developer @ Gap Cloud",
    company: "",
    period: "Jan 2025 — Jul 2025",
    bullets: [
      "Maintained AWS infrastructure for a multi-tenant ERP SaaS platform serving enterprise customers across multiple regions.",
      "Debugged CI/CD pipeline failures and environment configuration issues to keep releases on schedule.",
      "Improved database query performance on slow endpoints, eliminating production timeouts.",
      "Managed IAM roles and least-privilege access boundaries between staging and production environments.",
      "Monitored CloudWatch logs and custom alerts to catch issues before customers noticed them.",
    ],
    tags: ["AWS", "IAM", "CloudWatch", "CI/CD"],
  },
  {
    role: "Software Developer @ Petrobel",
    company: "",
    period: "Jul 2024 — Dec 2024",
    bullets: [
      "Improved backend performance and reliability for production applications supporting internal operations.",
      "Coordinated with QA and operations teams to deploy updates safely and reduce downtime.",
      "Optimized SQL queries and backend services to improve system responsiveness.",
    ],
    tags: ["SQL", "Backend", "Performance"],
  },
  {
    role: "Cloud Computing Intern @ PwC ETIC",
    company: "",
    period: "Sep 2023 — Nov 2023",
    bullets: [
      "Deployed AWS infrastructure (EC2, S3, Lambda) using Terraform for consistent, auditable deployments.",
      "Built a CI/CD pipeline that cut deployment time from hours to under 10 minutes.",
      "Supported cloud security controls, IAM configuration, and audit-readiness documentation for enterprise compliance workflows.",
    ],
    tags: ["Terraform", "AWS", "CI/CD", "IAM"],
  },
];

export type Project = {
  name: string;
  command: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: "shipped" | "in-progress" | "open-source";
};

export const projects: Project[] = [
  {
    name: "Deploy-in-a-box",
    command: "npm run dev",
    description: "Multi-tenant SaaS that automates AWS infrastructure provisioning into customers' own AWS accounts via cross-account IAM.",
    highlights: [
      "CI/CD pipelines and ephemeral PR preview environments",
      "CloudWatch observability and a DynamoDB data studio",
      "AES-256-GCM encrypted environment variables",
      "Next.js, TypeScript, PostgreSQL, Stripe, AWS SDK v3; built solo",
    ],
    stack: ["AWS", "IAM", "Next.js", "PostgreSQL", "TypeScript"],
    status: "shipped",
  },
  {
    name: "Dot Social Platform",
    command: "docker run dot-social:latest",
    description: "Full-stack social media MVP solo-built on AWS — mobile-first video, feeds, and messaging for Gen Z.",
    highlights: [
      "16 DynamoDB tables, 40+ REST endpoints, GitHub Actions CI/CD",
      "Node.js/Express backend, React frontend",
      "AWS: EC2, S3, CloudFront, Lambda, IAM, Route53",
      "Video processing pipeline with S3 event triggers and Lambda",
    ],
    stack: ["AWS", "Node.js", "React", "DynamoDB", "Lambda", "CloudFront"],
    status: "in-progress",
  },
  {
    name: "Kubernetes Administration Dashboard (Graduation Project)",
    command: "kubectl apply -f k8s-dashboard/",
    description: "Web-based dashboard for managing and monitoring Kubernetes clusters, containerized as microservices with automated CI/CD and real-time uptime tracking, deployed on cloud infrastructure.",
    highlights: [
      "Containerized microservices architecture with automated CI/CD",
      "Real-time cluster uptime tracking and monitoring",
      "Deployed on cloud infrastructure",
    ],
    stack: ["Kubernetes", "Docker", "CI/CD"],
    status: "shipped",
  },
  {
    name: "DevOps Consulting System",
    command: "terraform apply -auto-approve",
    description: "Reusable DevOps service packages for client engagements: Terraform modules, GitHub Actions templates, and runbooks.",
    highlights: [
      "Terraform modules for VPC, ECS, RDS, and IAM baselines",
      "Reusable GitHub Actions workflows (build, scan, deploy)",
      "Standardized runbooks and incident SOPs",
    ],
    stack: ["Terraform", "GitHub Actions", "AWS", "Docker"],
    status: "shipped",
  },
];

export const contact = {
  intro: "Open to DevOps, Cloud, and SRE roles (full-time or contract) and freelance engagements.",
  lines: [
    { label: "email",    value: profile.email,    href: `mailto:${profile.email}` },
    { label: "github",   value: "github.com/ashoebb",    href: profile.github },
    { label: "linkedin", value: "linkedin.com/in/abdelrahman-shoeb", href: profile.linkedin },
    { label: "location", value: profile.location, href: null },
    { label: "services", value: "AWS cost & deployment audit · CI/CD pipeline setup · Terraform/IaC baseline", href: null },
  ],
};