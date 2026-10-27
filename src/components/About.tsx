"use client";

import { about } from "@/data/content";

export default function About() {
  return (
    <div className="grid md:grid-cols-[1.1fr,1fr] gap-8 md:gap-12">
      <div className="space-y-4 text-terminal-text/90 text-base sm:text-lg leading-relaxed">
        {about.bio.map((p, i) => (
          <p key={i} data-anim>
            {p}
          </p>
        ))}
      </div>

      <div data-anim className="rounded-md border border-white/10 bg-black/40 overflow-hidden">
        <div className="px-4 py-2 border-b border-white/10 text-xs text-terminal-dim flex items-center justify-between">
          <span>~/about/whoami.json</span>
          <span className="text-terminal-green">● live</span>
        </div>
        <div className="p-4 text-sm">
          <span className="text-terminal-dim">{"{"}</span>
          <div className="pl-4">
            {about.facts.map((f, i) => (
              <div key={f.key} data-anim>
                <span className="text-terminal-magenta">&quot;{f.key}&quot;</span>
                <span className="text-terminal-dim">: </span>
                <span className="text-terminal-green">&quot;{f.value}&quot;</span>
                {i < about.facts.length - 1 && <span className="text-terminal-dim">,</span>}
              </div>
            ))}
          </div>
          <span className="text-terminal-dim">{"}"}</span>
        </div>
      </div>
    </div>
  );
}
