"use client";

import { experience } from "@/data/content";

export default function Experience() {
  return (
    <div className="space-y-6">
      <div data-anim className="text-terminal-dim text-sm">
        # <span className="text-terminal-green">git log --oneline experience/</span> · {experience.length} entries
      </div>

      <ol className="relative border-l border-white/10 ml-3 space-y-8">
        {experience.map((item, idx) => (
          <li key={`${item.company}-${idx}`} data-anim className="pl-6 relative">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-terminal-green shadow-glow" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-terminal-yellow font-mono text-xs">commit {(idx + 1).toString().padStart(7, "0")}</span>
              <span className="text-terminal-dim text-xs">·</span>
              <span className="text-terminal-dim text-xs">{item.period}</span>
            </div>
            <h3 className="mt-1 text-lg sm:text-xl text-terminal-text font-semibold">
              {item.role}{" "}
              <span className="text-terminal-green">@ {item.company}</span>
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm sm:text-base text-terminal-text/85">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-terminal-green shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 border border-white/15 text-terminal-dim rounded hover:border-terminal-green hover:text-terminal-green transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
