import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { TransitionLink } from "../components/TransitionLink";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "교회소식",
  description:
    "재건섬김교회의 홈페이지 개편, 예배 안내와 공식 온라인 채널 소식입니다.",
};

const NOTICES = [
  {
    category: "Notice",
    title: "재건섬김교회 새 홈페이지를 준비했습니다",
    copy: "교회 소개와 예배 영상, 오시는 길을 더 편하게 찾을 수 있도록 새롭게 구성했습니다.",
  },
  {
    category: "Worship",
    title: "예배 시간은 방문 전 전화로 확인해 주세요",
    copy: "예배와 모임 일정은 교회 사정에 따라 조정될 수 있어 대표전화로 안내해 드립니다.",
  },
  {
    category: "Online",
    title: "공식 유튜브에서 예배 영상을 만나보세요",
    copy: "주일오전예배, 주일오후예배와 수요예배 영상을 공식 채널에서 다시 볼 수 있습니다.",
  },
] as const;

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Church News"
        title={
          <>
            우리 교회의
            <br />
            이야기를 전합니다.
          </>
        }
        description="예배와 공동체의 중요한 안내를 한곳에서 확인하세요."
        tone="light"
      />

      <section className="section notices-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Latest Notice</p>
              <h2>알려드립니다</h2>
            </div>
            <p>현재 확인 가능한 공식 안내를 먼저 정리했습니다.</p>
          </Reveal>

          <div className="notice-list">
            {NOTICES.map((notice, index) => (
              <Reveal key={notice.title} delay={index * 70}>
                <article className="notice-row">
                  <span>{notice.category}</span>
                  <div>
                    <h3>{notice.title}</h3>
                    <p>{notice.copy}</p>
                  </div>
                  <span className="notice-row__index">0{index + 1}</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="news-links" delay={100}>
            <a
              href={SITE_INFO.youtubeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Official YouTube</span>
              <strong>예배 영상 보기</strong>
              <small>↗</small>
            </a>
            <TransitionLink href="/visit">
              <span>First Visit</span>
              <strong>처음 방문 안내</strong>
              <small>→</small>
            </TransitionLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
