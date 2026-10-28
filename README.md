<p align="center">
  <img src="https://raw.githubusercontent.com/abdu/portfolio/main/public/terminal-preview.png" alt="Terminal Portfolio Preview" width="800"/>
</p>

<h1 align="center">⚡ <code>abdu@devops:~$ whoami</code></h1>

<p align="center">
  <strong>DevOps & Cloud Engineer</strong> • <strong>AWS Solutions Architect (in progress)</strong> • <strong>Infrastructure Builder</strong>
</p>

<p align="center">
  <a href="https://abdubuilds.vercel.app"><strong>🌐 Live Portfolio → abdubuilds.vercel.app</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white" alt="Next.js 14"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white" alt="GSAP"/>
  <img src="https://img.shields.io/badge/AWS-Certified%20(SAA%20in%20progress)-FF9900?logo=amazon-aws&logoColor=white" alt="AWS"/>
  <img src="https://img.shields.io/badge/Terraform-1.0-7B42BC?logo=terraform&logoColor=white" alt="Terraform"/>
  <img src="https://img.shields.io/badge/Kubernetes-1.28-326CE5?logo=kubernetes&logoColor=white" alt="Kubernetes"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
</p>

---

## 🎭 The Concept

> **Why another portfolio?** Because infrastructure should be *visible*, *auditable*, and *beautiful*—even when it's just a personal site.

This portfolio **is** the infrastructure. Every section loads like a command execution. The terminal isn't a gimmick—it's the mental model I live in daily. SSH sessions, CI/CD logs, `kubectl get pods`, `terraform plan`—this is how I think, so this is how I present.

| Feature | Implementation |
|---------|----------------|
| 🖥️ **Terminal UI** | macOS-style window with traffic lights, title bar, working prompt |
| ⚡ **Boot Sequence** | Simulated kernel init → systemd → cloud-init → kubelet → terraform → prometheus |
| 📜 **Scroll-Driven Commands** | Each section = a typed command (`whoami`, `cat about.txt`, `git log`, `docker ps`) |
| 📊 **Animated Skill Bars** | Fill on viewport entry via GSAP ScrollTrigger |
| 🐳 **Project Cards** | Mini terminals with `$` commands, status badges (shipped / in-progress / open-source) |
| 🎮 **Interactive Easter Egg** | Real REPL at bottom: `help`, `whoami`, `ls`, `cat`, `echo`, `clear`, history (↑/↓), `Ctrl+L` |
| 📺 **CRT Aesthetic** | Scanlines + vignette + reduced-motion support |
| 🔍 **SEO-Ready** | Open Graph, Twitter Card, JSON-LD Person schema, semantic landmarks |

---

## 🛠️ Tech Stack

```yaml
framework:     Next.js 14 (App Router)
language:      TypeScript 5
styling:       Tailwind CSS
animation:     GSAP 3 + ScrollTrigger
font:          JetBrains Mono (via next/font)
deployment:    Vercel (abdubuilds.vercel.app)
ci/cd:         GitHub Actions → Vercel Preview → Production
```

**Cloud & Infra** (what I actually build with):
```
☁️  AWS: EC2, S3, Lambda, DynamoDB, CloudFront, IAM, VPC, Route53, ECS/EKS
⚙️  IaC: Terraform, CloudFormation, Ansible
📦  Containers: Docker, Kubernetes (EKS/ECS), Helm
🔄  CI/CD: GitHub Actions, AWS CodePipeline, Jenkins
📈  Observability: Prometheus, Grafana, CloudWatch, Datadog
💻  Languages: Python, Bash, Node.js, Go (learning)
```

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/abdu/portfolio.git
cd portfolio

# Install deps
npm install

# Dev server (hot reload)
npm run dev          # → http://localhost:3000

# Production build
npm run build
npm run start
```

---

## 📁 Project Anatomy

```
src/
├── app/
│   ├── layout.tsx        # SEO, metadata, JSON-LD schema, fonts
│   ├── page.tsx          # Main composition (boot → terminal → sections)
│   └── globals.css       # CRT effects, terminal theme, scrollbar styles
├── components/
│   ├── Terminal.tsx          # Window chrome + scroll container
│   ├── BootSequence.tsx      # Kernel-style boot log animation
│   ├── CommandSection.tsx    # Typing prompt + animated output wrapper
│   ├── Hero.tsx              # `whoami` → name + rotating roles
│   ├── About.tsx             # `cat about.txt` → bio + facts table
│   ├── Skills.tsx            # `ls -la skills/` → animated bars
│   ├── Experience.tsx        # `git log --oneline` → timeline
│   ├── Projects.tsx          # `docker ps` → project cards
│   ├── Contact.tsx           # `cat contact.txt` → links + services
│   └── InteractiveTerminal.tsx # REPL with history, built-in cmds
├── data/
│   └── content.ts       # Single source of truth (profile, skills, exp, projects)
├── hooks/
│   └── useScrollTrigger.ts # GSAP ScrollTrigger wrapper
└── utils/
    └── animations.ts    # GSAP context + reduced-motion helpers
```

---

## 🎮 Try the Terminal

Scroll to the bottom of the live site and run:

```bash
help              # List available commands
whoami            # Print profile summary
ls projects/      # List featured projects
cat about.txt     # Read bio
cat skills.txt    # List skills by category
echo "hello"      # Echo back
date              # Current timestamp
uname -a          # System info (AbduOS)
clear             # Clear screen
```

<kbd>↑</kbd>/<kbd>↓</kbd> — History navigation &nbsp;|&nbsp; <kbd>Ctrl</kbd>+<kbd>L</kbd> — Clear

---

## 🧠 Design Decisions Worth Mentioning

| Decision | Why |
|----------|-----|
| **Single data source** (`content.ts`) | Change name/email/skills once → updates everywhere (Hero, About, Contact, SEO, JSON-LD) |
| **GSAP Context + `useScrollTrigger` hook** | Cleanup on unmount, respects `prefers-reduced-motion`, no memory leaks |
| **CSS-first CRT effects** | Zero JS overhead, works with `prefers-reduced-motion` |
| **Semantic HTML inside terminal** | Screen readers see `<section>`, `<nav>`, `<article>` — not just `<div>` soup |
| **Vercel + GitHub Actions** | Preview deployments on every PR, instant cache invalidation |

---

## 📸 Screenshots

| Boot Sequence | Hero / Whoami | Skills | Interactive Terminal |
|:---:|:---:|:---:|:---:|
| ![Boot](public/screenshots/boot.png) | ![Hero](public/screenshots/hero.png) | ![Skills](public/screenshots/skills.png) | ![Terminal](public/screenshots/terminal.png) |

> *Add screenshots to `public/screenshots/` and they'll render above automatically.*

---

## 🌍 Deploy Your Own Fork

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fabdu%2Fportfolio)

1. Click the button above
2. Connect your GitHub
3. Add environment variables (none required)
4. Deploy → your own `*.vercel.app` in ~60s

**Customize:** Edit `src/data/content.ts` — that's it.

---

## 📬 Connect

| Platform | Link |
|----------|------|
| 💼 **LinkedIn** | [linkedin.com/in/abdu](https://linkedin.com/in/abdu) |
| 🐙 **GitHub** | [github.com/abdu](https://github.com/abdu) |
| 📧 **Email** | [abduswedev@gmail.com](mailto:abduswedev@gmail.com) |
| 🌐 **Portfolio** | [abdubuilds.vercel.app](https://abdubuilds.vercel.app) |

---

## 📄 License

MIT — Free to use, fork, remix. Attribution appreciated but not required.

```bash
$ echo "Built with ☕, 🎧, and way too many terraform apply runs"
```

---

<p align="center">
  <sub>If you like this, give it a ⭐ — it helps others discover the repo.</sub>
</p>