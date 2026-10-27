"use client";

import { contact } from "@/data/content";

export default function Contact() {
  return (
    <div className="space-y-6">
      <p data-anim className="text-terminal-text/90 text-base sm:text-lg">
        {contact.intro}
      </p>

      <div data-anim className="rounded-md border border-white/10 bg-black/40 p-4 sm:p-6 font-mono text-sm sm:text-base">
        {contact.lines.map((line) => (
          <div key={line.label} className="grid grid-cols-[110px,1fr] gap-2 py-1">
            <span className="text-terminal-magenta">{line.label}</span>
            <span>
              <span className="text-terminal-dim">= </span>
              {line.href ? (
                <a
                  href={line.href}
                  target={line.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:underline glow-green"
                >
                  {line.value}
                </a>
              ) : (
                <span className="text-terminal-text">{line.value}</span>
              )}
            </span>
          </div>
        ))}
      </div>

      <div data-anim className="text-xs text-terminal-comment pt-4 border-t border-white/5">
        # tip: try typing <span className="text-terminal-green">help</span> in the interactive shell below.
      </div>
    </div>
  );
}
