import { NAV_ITEMS, SITE_INFO } from "../data/site";
import { Logo } from "./Logo";
import { TransitionLink } from "./TransitionLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>
            함께 예배하고, 서로를 섬기며,
            <br />
            그리스도 안에서 다시 세워지는 공동체.
          </p>
        </div>

        <div className="site-footer__nav">
          <p className="footer-label">Explore</p>
          {NAV_ITEMS.map((item) => (
            <TransitionLink href={item.href} key={item.href}>
              {item.label}
            </TransitionLink>
          ))}
        </div>

        <div className="site-footer__contact">
          <p className="footer-label">Contact</p>
          <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone}</a>
          <address>
            {SITE_INFO.address}
            <br />
            우편번호 {SITE_INFO.postalCode}
          </address>
          <a
            className="footer-map-link"
            href={SITE_INFO.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            지도에서 보기 ↗
          </a>
        </div>
      </div>
      <div className="site-footer__bottom page-width">
        <p>© {new Date().getFullYear()} Jaegun Seomgim Church</p>
        <p>대한예수교장로회 재건</p>
      </div>
    </footer>
  );
}
