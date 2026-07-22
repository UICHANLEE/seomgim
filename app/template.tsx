import type { ReactNode } from "react";
import { PageTransitionReset } from "./components/PageTransitionReset";

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransitionReset>{children}</PageTransitionReset>;
}
