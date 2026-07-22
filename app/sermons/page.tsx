import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "말씀",
  description:
    "재건섬김교회 공식 유튜브의 주일오전예배, 주일오후예배, 수요예배 영상을 다시 봅니다.",
};

const SERMONS = [
  {
    title: "수요예배",
    date: "2026. 07. 15",
    type: "Wednesday Worship",
    href: "https://www.youtube.com/watch?v=KQ4_yaOIWwE",
    image: "https://i4.ytimg.com/vi/KQ4_yaOIWwE/hqdefault.jpg",
  },
  {
    title: "주일오전예배",
    date: "2026. 05. 10",
    type: "Sunday Morning",
    href: "https://www.youtube.com/watch?v=Us7hAWJSGxg",
    image: "https://i2.ytimg.com/vi/Us7hAWJSGxg/hqdefault.jpg",
  },
  {
    title: "주일오후예배",
    date: "2026. 05. 03",
    type: "Sunday Afternoon",
    href: "https://www.youtube.com/watch?v=LSquarAJhlE",
    image: "https://i1.ytimg.com/vi/LSquarAJhlE/hqdefault.jpg",
  },
] as const;

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title={
          <>
            다시 듣는 말씀,
            <br />
            다시 세우는 삶.
          </>
        }
        description="예배의 자리를 놓쳤거나 말씀을 다시 묵상하고 싶을 때, 공식 채널에서 함께하세요."
        tone="light"
        aside={
          <a
            className="hero-channel-card"
            href={SITE_INFO.youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Official Channel</span>
            <strong>YouTube</strong>
            <small>채널 바로가기 ↗</small>
          </a>
        }
      />

      <section className="section sermon-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Recent Worship</p>
              <h2>최근 예배 영상</h2>
            </div>
            <p>재건섬김교회 공식 유튜브에 공개된 예배 영상입니다.</p>
          </Reveal>

          <div className="sermon-feature-grid">
            {SERMONS.map((sermon, index) => (
              <Reveal key={sermon.href} delay={index * 80}>
                <a
                  className="sermon-card"
                  href={sermon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sermon-card__image">
                    <img src={sermon.image} alt="" />
                    <span className="sermon-card__play" aria-hidden="true">
                      ▶
                    </span>
                  </div>
                  <div className="sermon-card__content">
                    <span>{sermon.type}</span>
                    <h3>{sermon.title}</h3>
                    <p>{sermon.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="channel-cta" delay={100}>
            <div>
              <p className="eyebrow">Keep Listening</p>
              <h2>더 많은 말씀은 공식 채널에서</h2>
              <p>주일오전·주일오후·수요예배 영상을 계속 만나보세요.</p>
            </div>
            <a
              className="button button--white"
              href={SITE_INFO.youtubeUrl}
              target="_blank"
              rel="noreferrer"
            >
              유튜브 채널
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
