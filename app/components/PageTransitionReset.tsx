"use client";

import { useEffect, type ReactNode } from "react";

export function PageTransitionReset({ children }: { children: ReactNode }) {
  useEffect(() => {
    delete document.body.dataset.routeTransition;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return <main className="page-shell">{children}</main>;
}
