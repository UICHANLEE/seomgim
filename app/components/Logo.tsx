import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-lockup${inverse ? " brand-lockup--inverse" : ""}`}
      aria-label="재건섬김교회 홈"
    >
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__arch" />
        <span className="brand-mark__pane brand-mark__pane--one" />
        <span className="brand-mark__pane brand-mark__pane--two" />
        <span className="brand-mark__pane brand-mark__pane--three" />
        <span className="brand-mark__pane brand-mark__pane--four" />
      </span>
      <span className="brand-copy">
        <span className="brand-denomination">대한예수교장로회 재건</span>
        <strong>재건섬김교회</strong>
      </span>
    </Link>
  );
}
