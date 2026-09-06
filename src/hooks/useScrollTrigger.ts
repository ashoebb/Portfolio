"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/utils/animations";

type Options = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  toggleActions?: string;
  markers?: boolean;
};

export function useScrollAnimation(
  setup: (gsap: any, scrollTrigger: any, el: HTMLElement) => (() => void) | void,
  deps: ReadonlyArray<unknown> = [],
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const cleanup = setup(gsap, ScrollTrigger, ref.current);
    return () => {
      if (typeof cleanup === "function") cleanup();
      ScrollTrigger.getAll().forEach((t: any) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export type { Options };
