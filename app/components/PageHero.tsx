import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "light",
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  tone?: "light" | "blue" | "dark";
  aside?: ReactNode;
}) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-width page-hero__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </div>
      <div className="page-hero__orb" aria-hidden="true" />
    </section>
  );
}
