import type { Metadata } from "next";
import { ChurchMap } from "./components/ChurchMap";
import { Reveal } from "./components/Reveal";
import { TransitionLink } from "./components/TransitionLink";
import { SITE_INFO, VALUES } from "./data/site";

export const metadata: Metadata = {
  description:
    "부산 남구 문현동 재건섬김교회 홈페이지입니다. 교회 소개, 예배 안내, 말씀, 다음세대와 오시는 길을 확인하세요.",
};

const QUICK_LINKS = [
  {
    number: "01",
    title: "처음 오셨나요?",
    copy: "첫 방문 전에 필요한 정보를 한 번에 확인하세요.",
    href: "/visit",
  },
  {
    number: "02",
    title: "예배 안내",
    copy: "예배와 모임에 참여하는 방법을 안내합니다.",
    href: "/worship",
  },
  {
    number: "03",
    title: "교회 소개",
    copy: "재건섬김교회가 품은 마음을 소개합니다.",
    href: "/about",
  },
  {
    number: "04",
    title: "다음세대",
    copy: "아이와 청년이 믿음 안에서 자라도록 함께합니다.",
    href: "/next-generation",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img
          className="home-hero__image"
          src="/church-building.jpg"
          alt="부산 남구 문현동에 위치한 재건섬김교회 건물"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="page-width home-hero__content">
          <p className="home-hero__kicker">{SITE_INFO.denomination}</p>
          <h1>
            함께 예배하고,
            <br />
            서로를 섬기며,
            <br />
            <em>다시 세워지는 교회.</em>
          </h1>
          <p className="home-hero__lead">
            오늘의 삶에서 그리스도를 따르고,
            <br />
            이웃과 다음세대를 사랑으로 품습니다.
          </p>
          <div className="hero-actions">
            <TransitionLink className="button button--white" href="/visit">
              처음 오셨나요?
              <span aria-hidden="true">→</span>
            </TransitionLink>
            <TransitionLink className="text-link text-link--white" href="/about">
              교회 알아보기 <span aria-hidden="true">↗</span>
            </TransitionLink>
          </div>
        </div>
        <div className="home-hero__meta">
          <span>{SITE_INFO.shortAddress}</span>
          <span>{SITE_INFO.englishName}</span>
        </div>
        <a className="scroll-cue" href="#welcome" aria-label="아래로 이동">
          <span />
        </a>
      </section>

      <section className="welcome-section section" id="welcome">
        <div className="page-width">
          <Reveal className="welcome-grid">
            <p className="eyebrow">Welcome Home</p>
            <div className="welcome-copy">
              <h2>
                당신의 오늘이
                <br />
                은혜 안에서 다시 시작되도록.
              </h2>
              <p>
                재건섬김교회는 낯선 한 사람도 따뜻하게 맞이하고, 함께
                말씀을 배우며, 받은 사랑을 이웃에게 흘려보내는 교회를
                꿈꿉니다.
              </p>
            </div>
          </Reveal>

          <div className="quick-grid">
            {QUICK_LINKS.map((item, index) => (
              <Reveal key={item.href} delay={index * 70}>
                <TransitionLink className="quick-card" href={item.href}>
                  <span className="quick-card__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <span className="quick-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </TransitionLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Our Foundation</p>
              <h2>교회를 세우는 세 가지 마음</h2>
            </div>
            <p>
              복잡함을 덜어내고, 교회의 본질을 선명하게 붙듭니다.
            </p>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((value, index) => (
              <Reveal className="value-card" key={value.number} delay={index * 90}>
                <div className="value-card__top">
                  <span>{value.number}</span>
                  <span>{value.english}</span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="invitation-section section">
        <div className="page-width">
          <Reveal className="invitation-card">
            <div className="invitation-card__light" aria-hidden="true" />
            <p className="eyebrow">This Sunday</p>
            <h2>
              이번 주,
              <br />
              우리 함께 예배해요.
            </h2>
            <p>
              예배 시간과 처음 방문에 필요한 내용은 전화로 친절하게
              안내해 드립니다.
            </p>
            <div className="invitation-card__actions">
              <a className="button button--white" href={SITE_INFO.phoneHref}>
                {SITE_INFO.phone}
                <span aria-hidden="true">↗</span>
              </a>
              <TransitionLink className="text-link text-link--white" href="/worship">
                예배 안내 보기 <span aria-hidden="true">→</span>
              </TransitionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="location-preview section">
        <div className="page-width location-preview__grid">
          <Reveal>
            <p className="eyebrow">Find Us</p>
            <h2>이곳에서 만나요.</h2>
            <address>{SITE_INFO.address}</address>
            <p className="location-preview__phone">{SITE_INFO.phone}</p>
            <div className="location-preview__actions">
              <a
                className="button button--dark"
                href={SITE_INFO.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                네이버 지도 열기
                <span aria-hidden="true">↗</span>
              </a>
              <TransitionLink className="text-link" href="/visit">
                자세히 보기 <span aria-hidden="true">→</span>
              </TransitionLink>
            </div>
          </Reveal>
          <Reveal className="church-map-reveal" delay={100}>
            <ChurchMap compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
