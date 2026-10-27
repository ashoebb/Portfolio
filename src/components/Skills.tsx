"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/utils/animations";
import { skillGroups } from "@/data/content";

export default function Skills() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap, ScrollTrigger } = ensureGsap();

    const bars = root.querySelectorAll<HTMLElement>("[data-skill-bar]");
    bars.forEach((bar) => {
      const target = Number(bar.dataset.level || "0");
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${target}%`,
          duration: reduced ? 0 : 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => {
        if (t.trigger && root.contains(t.trigger)) t.kill();
      });
    };
  }, []);

  return (
    <div ref={rootRef} className="space-y-8">
      <div data-anim className="text-terminal-dim text-sm">
        # output of <span className="text-terminal-green">ls -la skills/</span> · 7 categories,{" "}
        {skillGroups.reduce((acc, g) => acc + g.skills.length, 0)} entries
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            data-anim
            className="rounded-md border border-white/10 bg-black/40 hover:border-terminal-green/60 hover:shadow-glow transition group"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <span className="text-terminal-green text-lg">{group.icon}</span>
              <h3 className="text-terminal-text font-semibold">{group.category}</h3>
              <span className="ml-auto text-xs text-terminal-dim">
                {group.skills.length} pkgs
              </span>
            </div>
            <ul className="p-4 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-terminal-text/90">{skill.name}</span>
                    <span className="text-terminal-dim text-xs">{skill.level}%</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-white/5 rounded overflow-hidden">
                    <div
                      data-skill-bar
                      data-level={skill.level}
                      className="h-full skill-bar-fill rounded"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
