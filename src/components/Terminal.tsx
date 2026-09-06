"use client";

import { ReactNode } from "react";
import { profile } from "@/data/content";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export default function Terminal({ children, title, className = "" }: Props) {
  const titleText = title ?? `${profile.username}@${profile.host} — -zsh — 120×40`;

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-terminal bg-terminal-bg ${className}`}
      role="region"
      aria-label="Terminal window"
    >
      {/* Title bar */}
      <div className="titlebar-grad flex items-center px-4 py-2.5 select-none">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-terminal-red border border-black/20 hover:brightness-110 transition" />
          <span className="w-3 h-3 rounded-full bg-terminal-yellow border border-black/20 hover:brightness-110 transition" />
          <span className="w-3 h-3 rounded-full bg-terminal-green border border-black/20 hover:brightness-110 transition" />
        </div>
        <div className="flex-1 text-center text-xs text-terminal-dim tracking-wide truncate px-4">
          {titleText}
        </div>
        <div className="w-12" aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="bg-terminal-bg text-terminal-text">{children}</div>
    </div>
  );
}
