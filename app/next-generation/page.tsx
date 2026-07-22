import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "다음세대",
  description:
    "아이와 청소년, 청년이 믿음 안에서 자라도록 함께하는 재건섬김교회의 다음세대 안내입니다.",
};

const GENERATIONS = [
  {
    age: "Kids",
    title: "어린이",
    copy: "하나님이 나를 사랑하신다는 사실을 즐겁게 배우고 경험하도록 돕습니다.",
    color: "yellow",
  },
  {
    age: "Youth",
    title: "청소년",
    copy: "질문을 환영하고, 말씀 안에서 건강한 정체성과 관계를 세워갑니다.",
    color: "blue",
  },
  {
    age: "Young Adult",
    title: "청년",
    copy: "삶과 신앙을 정직하게 나누며 세상 속 그리스도인으로 함께 성장합니다.",
    color: "green",
  },
] as const;

export default function NextGenerationPage() {
  return (
    <>
      <PageHero
        eyebrow="Next Generation"
        title={
          <>
            믿음의 다음을
            <br />
            함께 세웁니다.
          </>
        }
        description="한 사람의 가능성을 믿고, 각 세대가 자기 언어로 복음을 만나도록 곁에서 함께합니다."
        tone="blue"
        aside={
          <div className="hero-verse">
            <span>Psalm 78:6</span>
            <p>
              후대 곧 태어날 자손에게
              <br />
              이를 알게 하리니
            </p>
          </div>
        }
      />

      <section className="section generation-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Growing Together</p>
              <h2>세대마다, 눈높이마다</h2>
            </div>
            <p>
              부서 구성과 모임 시간은 교회 상황에 따라 달라질 수 있으니 방문
              전에 전화로 확인해 주세요.
            </p>
          </Reveal>

          <div className="generation-grid">
            {GENERATIONS.map((generation, index) => (
              <Reveal key={generation.age} delay={index * 80}>
                <article className={`generation-card generation-card--${generation.color}`}>
                  <span>{generation.age}</span>
                  <div className="generation-card__shape" aria-hidden="true" />
                  <div>
                    <h3>{generation.title}</h3>
                    <p>{generation.copy}</p>
                    <a href={SITE_INFO.phoneHref}>모임 문의 ↗</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-principles-section">
        <div className="page-width next-principles-grid">
          <Reveal>
            <p className="eyebrow">How We Care</p>
            <h2>
              가르치기 전에 듣고,
              <br />
              이끌기 전에 함께 걷습니다.
            </h2>
          </Reveal>
          <Reveal className="principle-list" delay={90}>
            <div>
              <span>01</span>
              <p>말씀을 삶의 언어로 배우기</p>
            </div>
            <div>
              <span>02</span>
              <p>안전하고 따뜻한 관계 만들기</p>
            </div>
            <div>
              <span>03</span>
              <p>가정과 교회가 함께 믿음 세우기</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
