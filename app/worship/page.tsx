import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { TransitionLink } from "../components/TransitionLink";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "예배안내",
  description:
    "재건섬김교회의 주일오전예배, 주일오후예배, 수요예배와 처음 방문 안내입니다.",
};

const WORSHIP_GATHERINGS = [
  {
    number: "01",
    title: "주일오전예배",
    english: "Sunday Morning Worship",
    copy: "한 주의 첫날, 온 성도가 함께 하나님을 예배합니다.",
  },
  {
    number: "02",
    title: "주일오후예배",
    english: "Sunday Afternoon Worship",
    copy: "말씀과 기도로 믿음을 더 깊이 세워가는 예배입니다.",
  },
  {
    number: "03",
    title: "수요예배",
    english: "Wednesday Worship",
    copy: "한 주의 중심에서 다시 말씀 앞에 서는 예배입니다.",
  },
] as const;

const FIRST_VISIT = [
  {
    title: "오기 전",
    copy: "대표전화로 예배 시작 시간과 교회 이용 정보를 확인해 주세요.",
  },
  {
    title: "도착하면",
    copy: "교회 입구에서 안내를 요청하시면 예배 자리까지 도와드립니다.",
  },
  {
    title: "예배 후",
    copy: "서두르지 않으셔도 괜찮습니다. 편안히 인사하고 교회를 알아가세요.",
  },
] as const;

export default function WorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Worship"
        title={
          <>
            우리의 한 주는
            <br />
            예배에서 시작됩니다.
          </>
        }
        description="하나님의 말씀을 듣고 함께 기도하며, 삶의 방향을 다시 맞추는 시간입니다."
        tone="dark"
        aside={
          <a className="hero-call-card" href={SITE_INFO.phoneHref}>
            <span>정확한 예배 시간 문의</span>
            <strong>{SITE_INFO.phone}</strong>
            <small>전화 연결 ↗</small>
          </a>
        }
      />

      <section className="section gatherings-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Weekly Gathering</p>
              <h2>함께 드리는 예배</h2>
            </div>
            <p>
              공개된 공식 예배 영상 기준으로 예배 종류를 안내합니다. 정확한
              시작 시간은 방문 전 전화로 확인해 주세요.
            </p>
          </Reveal>

          <div className="gathering-list">
            {WORSHIP_GATHERINGS.map((gathering, index) => (
              <Reveal key={gathering.number} delay={index * 70}>
                <article className="gathering-row">
                  <span>{gathering.number}</span>
                  <div>
                    <h3>{gathering.title}</h3>
                    <small>{gathering.english}</small>
                  </div>
                  <p>{gathering.copy}</p>
                  <a href={SITE_INFO.phoneHref} aria-label={`${gathering.title} 문의`}>
                    문의 ↗
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section visit-flow-section">
        <div className="page-width">
          <Reveal>
            <p className="eyebrow">Your First Visit</p>
            <h2>
              처음이어도
              <br />
              편안할 수 있도록.
            </h2>
          </Reveal>
          <div className="visit-flow-grid">
            {FIRST_VISIT.map((step, index) => (
              <Reveal className="visit-flow-card" key={step.title} delay={index * 90}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="simple-cta" delay={110}>
            <div>
              <span>Need directions?</span>
              <h3>오시는 길을 미리 확인하세요.</h3>
            </div>
            <TransitionLink className="button button--dark" href="/visit">
              오시는 길
              <span aria-hidden="true">→</span>
            </TransitionLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
