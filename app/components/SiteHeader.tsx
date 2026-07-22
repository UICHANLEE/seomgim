"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE_INFO } from "../data/site";
import { Logo } from "./Logo";
import { TransitionLink } from "./TransitionLink";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo />

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </TransitionLink>
            );
          })}
        </nav>

        <a className="header-call" href={SITE_INFO.phoneHref}>
          <span>전화 문의</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav aria-label="모바일 메뉴">
          {NAV_ITEMS.map((item, index) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
              onClick={() => setMenuPath(null)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </TransitionLink>
          ))}
        </nav>
        <div className="mobile-menu__contact">
          <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone}</a>
          <p>{SITE_INFO.address}</p>
        </div>
      </div>
    </header>
  );
}
