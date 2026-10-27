"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/utils/animations";
import { profile } from "@/data/content";

type Props = {
  command: string;
  comment?: string;
  children: ReactNode;
  id?: string;
  pin?: boolean;
};

export default function CommandSection({ command, comment, children, id, pin = false }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cmdRef = useRef<HTMLSpanElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const { gsap, ScrollTrigger } = ensureGsap();

    let typingTimer: ReturnType<typeof setInterval> | null = null;

    const startTyping = () => {
      if (reduced) {
        setTyped(command);
        setDone(true);
        return;
      }
      let i = 0;
      typingTimer = setInterval(() => {
        i += 1;
        setTyped(command.slice(0, i));
        if (i >= command.length) {
          if (typingTimer) clearInterval(typingTimer);
          setDone(true);
        }
      }, 35);
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      once: true,
      onEnter: () => {
        startTyping();
        if (outputRef.current) {
          gsap.fromTo(
            outputRef.current.querySelectorAll("[data-anim]"),
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.06,
              delay: reduced ? 0 : Math.min(0.6, command.length * 0.035 + 0.1),
              ease: "power2.out",
            },
          );
        }
      },
    });

    return () => {
      if (typingTimer) clearInterval(typingTimer);
      trigger.kill();
    };
  }, [command]);

  return (
    <section
      id={id}
      ref={wrapRef}
      className="px-5 sm:px-8 md:px-12 py-12 sm:py-16 border-t border-white/5 first:border-t-0"
    >
      <div className="font-mono text-sm sm:text-base">
        <div className="flex items-baseline flex-wrap gap-x-2">
          <span className="text-terminal-green">{profile.username}@{profile.host}</span>
          <span className="text-terminal-dim">:</span>
          <span className="text-terminal-blue">~</span>
          <span className="text-terminal-dim">$</span>
          <span ref={cmdRef} className="text-terminal-text">
            {typed}
            {!done && <span className="cursor" />}
          </span>
          {done && comment && (
            <span className="text-terminal-comment text-xs sm:text-sm pl-2">
              # {comment}
            </span>
          )}
        </div>
        <div ref={outputRef} className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
