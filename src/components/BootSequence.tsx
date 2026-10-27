"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const BOOT_LINES = [
  { text: "[    0.000000] BIOS-provided physical RAM map:", delay: 90 },
  { text: "[    0.001234] Booting AbduOS 24.04 LTS (kernel 6.8.0-aws)", delay: 100 },
  { text: "[    0.245102] systemd[1]: Started DevOps Toolchain.", delay: 80 },
  { text: "[    0.412503] cloud-init[522]: ci-info: ++ AWS metadata fetched ++", delay: 90 },
  { text: "[    0.612001] dockerd: API listen on /var/run/docker.sock", delay: 80 },
  { text: "[    0.781004] kubelet: node abdu-prod is Ready", delay: 80 },
  { text: "[    0.882011] terraform: state lock acquired", delay: 70 },
  { text: "[    0.991020] gha-runner: registered with github.com/ashoebb", delay: 60 },
  { text: "[    1.102004] prometheus: scraping 14 targets", delay: 60 },
  { text: "[    1.203100] ✔ all systems operational", delay: 90 },
];

const ASCII_ART = `
   █████╗ ██████╗ ██████╗ ██╗   ██╗
  ██╔══██╗██╔══██╗██╔══██╗██║   ██║
  ███████║██████╔╝██║  ██║██║   ██║
  ██╔══██║██╔══██╗██║  ██║██║   ██║
  ██║  ██║██████╔╝██████╔╝╚██████╔╝
  ╚═╝  ╚═╝╚═════╝ ╚═════╝  ╚═════╝ `;

type Props = { onDone: () => void };

export default function BootSequence({ onDone }: Props) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [showArt, setShowArt] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setVisibleLines(BOOT_LINES.map((l) => l.text));
      setShowArt(true);
      const t = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onDone, 250);
      }, 400);
      return () => clearTimeout(t);
    }

    let i = 0;
    const next = () => {
      if (cancelled) return;
      const entry = BOOT_LINES[i];
      if (!entry) {
        setShowArt(true);
        setTimeout(() => {
          if (cancelled) return;
          setFadeOut(true);
          setTimeout(onDone, 450);
        }, 900);
        return;
      }
      setVisibleLines((prev) => [...prev, entry.text]);
      i += 1;
      setTimeout(next, entry.delay);
    };
    const start = setTimeout(next, 200);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-black text-terminal-green font-mono p-6 sm:p-10 overflow-hidden transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      <div className="max-w-3xl text-[12px] sm:text-sm leading-relaxed">
        {visibleLines.map((line, idx) => (
          <div key={idx} className="text-terminal-text/80">
            {line}
          </div>
        ))}
        {showArt && (
          <pre className="mt-6 text-terminal-green glow-green whitespace-pre text-[10px] sm:text-xs">
{ASCII_ART}
          </pre>
        )}
        {showArt && (
          <div className="mt-4 text-terminal-text">
            Welcome, {profile.nickname}.{" "}
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
