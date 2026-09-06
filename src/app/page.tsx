"use client";

import { useEffect, useRef, useState } from "react";
import Terminal from "@/components/Terminal";
import BootSequence from "@/components/BootSequence";
import CommandSection from "@/components/CommandSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { ensureGsap } from "@/utils/animations";

export default function Page() {
  const [booted, setBooted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!booted) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from("[data-terminal-frame]", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      // Subtle parallax of background grid
      const grid = document.getElementById("bg-grid");
      if (grid && !reduced) {
        gsap.to(grid, {
          backgroundPosition: "0px 600px",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [booted]);

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      <div
        id="bg-grid"
        className="fixed inset-0 bg-grid pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {!booted && <BootSequence onDone={() => setBooted(true)} />}

      <div className="relative z-10 px-3 sm:px-6 md:px-10 pt-6 pb-20" data-terminal-frame>
        <Terminal>
          <CommandSection
            id="hero"
            command="whoami"
            comment="who am i?"
          >
            <Hero />
          </CommandSection>

          <CommandSection
            id="about"
            command="cat about.txt"
            comment="quick bio"
          >
            <About />
          </CommandSection>

          <CommandSection
            id="skills"
            command="ls -la skills/"
            comment="installed packages"
          >
            <Skills />
          </CommandSection>

          <CommandSection
            id="experience"
            command="git log --oneline experience/"
            comment="commit history"
          >
            <Experience />
          </CommandSection>

          <CommandSection
            id="projects"
            command="docker ps --filter status=featured"
            comment="running projects"
          >
            <Projects />
          </CommandSection>

          <CommandSection
            id="contact"
            command="cat contact.txt"
            comment="ways to reach me"
          >
            <Contact />
          </CommandSection>

          <CommandSection
            command="./shell.sh --interactive"
            comment="play around"
          >
            <InteractiveTerminal />
            <div className="mt-6 text-center text-xs text-terminal-comment">
              # © {new Date().getFullYear()} Abdelrahman Shoeb · built with Next.js, Tailwind &amp; GSAP ·{" "}
              <span className="text-terminal-green">end of stream</span>
            </div>
          </CommandSection>
        </Terminal>
      </div>
    </main>
  );
}
