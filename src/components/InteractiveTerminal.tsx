"use client";

import { useEffect, useRef, useState } from "react";
import { profile, about, projects, skillGroups, experience, contact } from "@/data/content";

type Line = { kind: "in" | "out" | "err"; text: string };

const HELP = `Available commands:
  help              — show this message
  whoami            — short bio
  ls                — list directories
  ls projects/      — list featured projects
  ls skills/        — list skill categories
  cat about.txt     — print about
  cat contact.txt   — print contact info
  cat experience.md — print work history
  echo <text>       — echo text back
  date              — print current date/time
  uname -a          — print system info
  clear             — clear the screen
  exit              — close terminal hint
`;

function cmdLs(arg?: string): string {
  if (!arg) return "about.txt   contact.txt   experience.md   projects/   skills/";
  const a = arg.replace(/\/$/, "");
  if (a === "projects") return projects.map((p) => `- ${p.name}`).join("\n");
  if (a === "skills") return skillGroups.map((g) => `- ${g.category} (${g.skills.length})`).join("\n");
  return `ls: cannot access '${arg}': No such file or directory`;
}

function cmdCat(arg?: string): string {
  if (!arg) return "cat: missing operand";
  switch (arg) {
    case "about.txt":
      return about.bio.join("\n\n");
    case "contact.txt":
      return contact.lines.map((l) => `${l.label.padEnd(10)} = ${l.value}`).join("\n");
    case "experience.md":
      return experience
        .map((e) => `${e.role} @ ${e.company} (${e.period})\n  ${e.bullets.join("\n  ")}`)
        .join("\n\n");
    default:
      return `cat: ${arg}: No such file or directory`;
  }
}

function cmdWhoami(): string {
  return `${profile.name} (${profile.nickname}) — ${profile.title}\n${profile.location} · originally from ${profile.origin}`;
}

function execute(input: string): { out: string; isErr?: boolean; clear?: boolean; exit?: boolean } {
  const trimmed = input.trim();
  if (!trimmed) return { out: "" };

  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");

  switch (cmd) {
    case "help":     return { out: HELP };
    case "whoami":   return { out: cmdWhoami() };
    case "ls":       return { out: cmdLs(rest[0]) };
    case "cat":      return { out: cmdCat(rest[0]) };
    case "echo":     return { out: arg };
    case "date":     return { out: new Date().toString() };
    case "uname": {
      if (rest[0] === "-a") return { out: "AbduOS 24.04 LTS x86_64 GNU/Linux (kernel 6.8.0-aws)" };
      return { out: "AbduOS" };
    }
    case "clear":    return { out: "", clear: true };
    case "exit":     return { out: "logout — but you can keep scrolling 👋", exit: true };
    case "sudo":     return { out: "Permission denied (you forgot the magic word).", isErr: true };
    case "rm":       return { out: "rm: nice try. read-only filesystem.", isErr: true };
    default:         return { out: `command not found: ${cmd} — type 'help' for options.`, isErr: true };
  }
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: `Last login: ${new Date().toDateString()} on ttys001` },
    { kind: "out", text: `Welcome to ${profile.username}@${profile.host}. Type 'help' to get started.` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input;
    const result = execute(value);
    const newLines: Line[] = [{ kind: "in", text: value }];

    if (result.clear) {
      setLines([]);
    } else {
      if (result.out) {
        newLines.push({ kind: result.isErr ? "err" : "out", text: result.out });
      }
      setLines((prev) => [...prev, ...newLines]);
    }

    if (value.trim()) {
      setHistory((prev) => [...prev, value]);
    }
    setInput("");
    setHIdx(null);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = hIdx === null ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx === null) return;
      const next = hIdx + 1;
      if (next >= history.length) {
        setHIdx(null);
        setInput("");
      } else {
        setHIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setLines([]);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <div
      onClick={focusInput}
      className="rounded-md border border-white/10 bg-black/70 overflow-hidden cursor-text"
      role="region"
      aria-label="Interactive terminal"
    >
      <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2 text-xs text-terminal-dim bg-terminal-titlebar/40">
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-red" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-yellow" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
        <span className="ml-3">interactive — type <span className="text-terminal-green">help</span></span>
      </div>

      <div
        ref={scrollRef}
        className="p-4 max-h-80 overflow-y-auto text-sm leading-relaxed font-mono no-scrollbar"
      >
        {lines.map((l, i) => {
          if (l.kind === "in") {
            return (
              <div key={i}>
                <span className="text-terminal-green">{profile.username}@{profile.host}</span>
                <span className="text-terminal-dim">:</span>
                <span className="text-terminal-blue">~</span>
                <span className="text-terminal-dim">$ </span>
                <span className="text-terminal-text">{l.text}</span>
              </div>
            );
          }
          return (
            <pre
              key={i}
              className={`whitespace-pre-wrap ${l.kind === "err" ? "text-terminal-red" : "text-terminal-text/90"}`}
            >
{l.text}
            </pre>
          );
        })}

        <form onSubmit={onSubmit} className="flex items-center gap-1 mt-1">
          <span className="text-terminal-green">{profile.username}@{profile.host}</span>
          <span className="text-terminal-dim">:</span>
          <span className="text-terminal-blue">~</span>
          <span className="text-terminal-dim">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="off"
            aria-label="Terminal input"
            className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-green pl-1"
          />
        </form>
      </div>
    </div>
  );
}
