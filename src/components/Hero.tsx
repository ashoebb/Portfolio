"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const ROLES = [
  "DevOps & Cloud Engineer",
  "AWS Solutions Architect",
  "Infrastructure Builder",
  "CI/CD Pipeline Engineer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(ROLES[0]);
      return;
    }
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, roleIdx]);

  return (
    <div className="grid sm:grid-cols-[auto,1fr] gap-x-6 gap-y-2 items-start">
      <div data-anim className="text-terminal-dim text-xs sm:text-sm pt-1">USER</div>
      <div data-anim>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-terminal-text leading-tight tracking-tight">
          {profile.name}
          <span className="text-terminal-green"> ({profile.nickname})</span>
        </h1>
      </div>

      <div data-anim className="text-terminal-dim text-xs sm:text-sm pt-1">ROLE</div>
      <div data-anim className="text-terminal-green text-lg sm:text-2xl glow-green min-h-[1.6em]">
        {text}
        <span className="cursor" />
      </div>

      <div data-anim className="text-terminal-dim text-xs sm:text-sm pt-1">LOC</div>
      <div data-anim className="text-terminal-text text-base sm:text-lg">
        {profile.location} <span className="text-terminal-dim">·</span> originally from {profile.origin}
      </div>

      <div data-anim className="text-terminal-dim text-xs sm:text-sm pt-1">TAG</div>
      <div data-anim className="text-terminal-text/80 text-base sm:text-lg italic">
        “{profile.tagline}”
      </div>

      <div className="hidden sm:block" />
      <div data-anim className="flex flex-wrap gap-3 mt-4">
        <a
          href="#contact"
          className="px-4 py-2 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition rounded text-sm"
        >
          ./contact.sh
        </a>
        <a
          href="#projects"
          className="px-4 py-2 border border-white/20 text-terminal-text hover:border-terminal-green hover:text-terminal-green transition rounded text-sm"
        >
          ls projects/
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white/20 text-terminal-text hover:border-terminal-green hover:text-terminal-green transition rounded text-sm"
        >
          git clone github
        </a>
      </div>
    </div>
  );
}
