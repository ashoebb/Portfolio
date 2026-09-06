"use client";

import { projects, type Project } from "@/data/content";

const STATUS_STYLES: Record<Project["status"], { label: string; cls: string }> = {
  shipped:       { label: "● shipped",      cls: "text-terminal-green border-terminal-green/40" },
  "in-progress": { label: "◐ in-progress",  cls: "text-terminal-yellow border-terminal-yellow/40" },
  "open-source": { label: "◇ open-source",  cls: "text-terminal-cyan border-terminal-cyan/40" },
};

export default function Projects() {
  return (
    <div className="space-y-6">
      <div data-anim className="text-terminal-dim text-sm">
        # <span className="text-terminal-green">find projects/ -type f -name &apos;*.featured&apos;</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => {
          const status = STATUS_STYLES[p.status];
          return (
            <article
              key={p.name}
              data-anim
              className="group rounded-md border border-white/10 bg-black/40 overflow-hidden hover:border-terminal-green/60 hover:shadow-glow transition"
            >
              <header className="px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-terminal-dim min-w-0">
                  <span className="w-2 h-2 rounded-full bg-terminal-red shrink-0" />
                  <span className="w-2 h-2 rounded-full bg-terminal-yellow shrink-0" />
                  <span className="w-2 h-2 rounded-full bg-terminal-green shrink-0" />
                  <span className="truncate pl-2">{p.name.toLowerCase().replace(/\s+/g, "-")}.md</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 border rounded ${status.cls}`}>
                  {status.label}
                </span>
              </header>

              <div className="p-4 sm:p-5 space-y-3">
                <div className="text-xs text-terminal-dim">
                  <span className="text-terminal-green">$</span> {p.command}
                </div>
                <h3 className="text-lg sm:text-xl text-terminal-text font-semibold group-hover:text-terminal-green transition">
                  {p.name}
                </h3>
                <p className="text-sm text-terminal-text/85 leading-relaxed">{p.description}</p>

                <ul className="text-sm space-y-1 pt-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-terminal-green">→</span>
                      <span className="text-terminal-text/80">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
