export const profile = {
  name: "Abdelrahman Shoeb",
  nickname: "Abdu",
  title: "DevOps & Cloud Engineer",
  tagline: "Building reliable infrastructure where it matters.",
  location: "Remote",
  origin: "Egypt",
  email: "abdelrahmanshoeb4@gmail.com",
  github: "https://github.com/ashoebb",
  linkedin: "https://www.linkedin.com/in/abdelrahman-shoeb-ba4230218/",
  username: "abdu",
  host: "devops",
};

export const about = {
  bio: [
    "DevOps & Cloud Engineer, originally from Egypt, working remotely.",
    "B.Sc. Computer Engineering from the Arab Academy for Science and Technology (2024).",
    "I design and operate AWS infrastructure, automate everything I can with Terraform and GitHub Actions, and ship software end-to-end when the product needs it.",
    "Currently pursuing the AWS Solutions Architect Associate (SAA-C03) certification.",
  ],
  facts: [
    { key: "name",         value: "Abdelrahman Shoeb (Abdu)" },
    { key: "role",         value: "DevOps & Cloud Engineer" },
    { key: "location",     value: "Remote" },
    { key: "origin",       value: "Cairo, Egypt" },
    { key: "education",    value: "B.Sc. Computer Engineering, AAST (2024)" },
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
      { name: "ECS",            level: 78 },
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
    ],
  },
  {
    category: "CI/CD",
    icon: "↻",
    skills: [
      { name: "GitHub Actions", level: 92 },
      { name: "Jenkins",        level: 78 },
    ],
  },
  {
    category: "Monitoring",
    icon: "▲",
    skills: [
      { name: "Prometheus",     level: 80 },
      { name: "Grafana",        level: 82 },
      { name: "CloudWatch",     level: 88 },
    ],
  },
  {
    category: "Scripting",
    icon: "{}",
    skills: [
      { name: "Python",         level: 88 },
      { name: "Bash",           level: 90 },
      { name: "Node.js",        level: 90 },
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
    role: "Founding Engineer",
    company: "Dot — Stealth AI Social Platform",
    period: "2024 — Present",
    bullets: [
      "Solo-built a Gen Z-focused video social platform end-to-end.",
      "Designed and shipped a Node.js/Express backend with a React frontend.",
      "Modeled 16 DynamoDB tables and exposed 40+ REST API endpoints.",
      "Operated full AWS infrastructure: EC2, S3, CloudFront, DynamoDB, Lambda.",
      "Wrote CI/CD pipelines in GitHub Actions for build, test, and deploy.",
    ],
    tags: ["AWS", "Node.js", "React", "DynamoDB", "GitHub Actions"],
  },
  {
    role: "Software Developer",
    company: "Gap Cloud",
    period: "2023 — 2024",
    bullets: [
      "Built and maintained cloud infrastructure for client workloads.",
      "Developed internal tooling and software services to support delivery.",
    ],
    tags: ["AWS", "Linux", "Python"],
  },
  {
    role: "Engineering Intern",
    company: "PwC — ETIC",
    period: "2023",
    bullets: [
      "Worked across enterprise IT and engineering on internal initiatives.",
    ],
    tags: ["Enterprise IT"],
  },
  {
    role: "Engineering Intern",
    company: "Petrobel",
    period: "2022",
    bullets: [
      "Hands-on with industrial IT systems and field engineering.",
    ],
    tags: ["IT Operations"],
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
    name: "Dot Social Platform",
    command: "docker run dot-social:latest",
    description: "Full-stack social media MVP solo-built on AWS — mobile-first video, feeds, and messaging for Gen Z.",
    highlights: [
      "End-to-end design: 16 DynamoDB tables, 40+ REST endpoints",
      "AWS: EC2, S3, CloudFront, Lambda, IAM, Route53",
      "GitHub Actions CI/CD with multi-environment deploys",
      "React frontend, Node.js/Express backend",
    ],
    stack: ["AWS", "Node.js", "React", "DynamoDB", "Lambda", "CloudFront"],
    status: "in-progress",
  },
  {
    name: "DevOps Consulting System",
    command: "terraform apply -auto-approve",
    description: "Productized DevOps service packages on Upwork — reusable Terraform modules, GitHub Actions templates, and SOPs.",
    highlights: [
      "Terraform modules for VPC, ECS, RDS, IAM baselines",
      "Reusable GitHub Actions workflows (build, scan, deploy)",
      "Standardized runbooks and incident SOPs",
      "Onboarded multiple clients to repeatable IaC",
    ],
    stack: ["Terraform", "GitHub Actions", "AWS", "Docker"],
    status: "shipped",
  },
  {
    name: "Sports Biomechanics Analyzer",
    command: "streamlit run cmj_analysis.py",
    description: "Python Streamlit app analyzing Counter-Movement Jump (CMJ) performance from Vicon force-plate data.",
    highlights: [
      "Force-plate signal processing in NumPy/Pandas",
      "Interactive plots and per-athlete reports",
      "Reproducible analysis pipeline",
    ],
    stack: ["Python", "Streamlit", "Pandas", "NumPy"],
    status: "shipped",
  },
  {
    name: "Kubernetes Dashboard",
    command: "kubectl apply -f k8s-dashboard/",
    description: "Lightweight cluster dashboard for visualizing pods, deployments, and node health across environments.",
    highlights: [
      "Live pod and deployment status",
      "Prometheus + Grafana integration",
      "Helm-based install",
    ],
    stack: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
    status: "open-source",
  },
];

export const contact = {
  intro: "Open to DevOps, Cloud, and SRE roles — full-time or contract.",
  lines: [
    { label: "email",    value: profile.email,    href: `mailto:${profile.email}` },
    { label: "github",   value: "github.com/ashoebb",    href: profile.github },
    { label: "linkedin", value: "linkedin.com/in/abdelrahman-shoeb", href: profile.linkedin },
    { label: "location", value: profile.location, href: null },
  ],
};
