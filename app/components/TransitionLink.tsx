"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export function TransitionLink({
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const target = typeof href === "string" ? href : href.pathname ?? "/";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target.startsWith("#") ||
      target === pathname
    ) {
      return;
    }

    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      router.push(target);
      return;
    }

    document.body.dataset.routeTransition = "out";
    window.setTimeout(() => router.push(target), 170);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
