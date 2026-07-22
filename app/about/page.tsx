import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SITE_INFO, VALUES } from "../data/site";

export const metadata: Metadata = {
  title: "교회소개",
  description:
    "재건섬김교회의 소속 교단, 목회자와 교회가 소중히 여기는 예배·말씀·섬김의 가치를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            다시 세우고,
            <br />
            기쁨으로 섬깁니다.
          </>
        }
        description="그리스도의 복음 위에 삶을 다시 세우고, 교회와 이웃을 기쁨으로 섬기는 공동체입니다."
        tone="blue"
        aside={
          <div className="hero-fact">
            <span>Senior Pastor</span>
            <strong>{SITE_INFO.pastor}</strong>
            <small>
              {SITE_INFO.denomination} · {SITE_INFO.presbytery}
            </small>
          </div>
        }
      />

      <section className="section narrative-section">
        <div className="page-width narrative-grid">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2>
              교회는 건물이 아니라,
              <br />
              함께 살아가는 사람입니다.
            </h2>
          </Reveal>
          <Reveal className="narrative-copy" delay={80}>
            <p className="narrative-copy__lead">
              재건섬김교회는 부산 남구 문현동에서 하나님을 예배하고 서로의
              삶을 돌아보며 지역을 섬기는 교회입니다.
            </p>
            <p>
              우리는 완벽한 사람이 모이는 곳보다, 복음 안에서 매일 새로워지는
              사람이 함께 걷는 곳을 꿈꿉니다. 처음 교회를 찾는 분도, 오랜
              믿음의 길을 걸어온 분도 편안히 머물며 말씀을 듣고 삶을 나눌 수
              있도록 따뜻한 공동체를 세워갑니다.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-image-section">
        <div className="page-width">
          <Reveal className="about-image-frame">
            <img
              src="/church-building.jpg"
              alt="재건섬김교회 건물과 입구 간판"
            />
            <div className="about-image-frame__caption">
              <span>Since faith became a home</span>
              <span>{SITE_INFO.shortAddress}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section values-detail-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">What We Value</p>
              <h2>우리가 소중히 여기는 것</h2>
            </div>
            <p>예배에서 시작해 말씀으로 자라고, 섬김으로 열매 맺습니다.</p>
          </Reveal>

          <div className="values-detail-list">
            {VALUES.map((value, index) => (
              <Reveal key={value.number} delay={index * 70}>
                <article className="value-row">
                  <span>{value.number}</span>
                  <div>
                    <small>{value.english}</small>
                    <h3>{value.title}</h3>
                  </div>
                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section affiliation-section">
        <div className="page-width affiliation-grid">
          <Reveal>
            <p className="eyebrow">Affiliation</p>
            <h2>{SITE_INFO.denomination}</h2>
          </Reveal>
          <Reveal className="affiliation-card" delay={80}>
            <dl>
              <div>
                <dt>교단</dt>
                <dd>{SITE_INFO.denomination}</dd>
              </div>
              <div>
                <dt>노회</dt>
                <dd>{SITE_INFO.presbytery}</dd>
              </div>
              <div>
                <dt>담임목사</dt>
                <dd>{SITE_INFO.pastor}</dd>
              </div>
              <div>
                <dt>소재지</dt>
                <dd>{SITE_INFO.shortAddress}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
