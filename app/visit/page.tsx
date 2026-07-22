import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { VisitPlanner } from "../components/VisitPlanner";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `${SITE_INFO.address}, 재건섬김교회 오시는 길과 대표전화 안내입니다.`,
};

export default function VisitPage() {
  return (
    <>
      <div className="visit-hero">
        <PageHero
          eyebrow="Visit Us"
          title={
            <>
              반갑습니다.
              <br />
              이곳에서 만나요.
            </>
          }
          description="처음 방문하는 길이 어렵지 않도록 주소와 연락처를 정확히 안내해 드립니다."
          tone="blue"
          aside={
            <div className="hero-address">
              <span>Address</span>
              <strong>{SITE_INFO.address}</strong>
              <small>우편번호 {SITE_INFO.postalCode}</small>
              <div className="hero-address__actions">
                <a href="#visit-map">지도 보기 ↓</a>
                <a href={SITE_INFO.phoneHref}>전화하기 ↗</a>
              </div>
            </div>
          }
        />
      </div>

      <section className="section visit-map-section" id="visit-map">
        <div className="page-width">
          <Reveal>
            <VisitPlanner />
          </Reveal>
        </div>
      </section>

      <section className="section arrival-section">
        <div className="page-width arrival-grid">
          <Reveal className="arrival-landmark">
            <img
              src="/church-building.jpg"
              alt="재건섬김교회 건물과 입구 간판"
            />
            <div className="arrival-landmark__caption">
              <span>Look for this place</span>
              <strong>이 건물을 찾아오세요.</strong>
              <p>건물 입구의 재건섬김교회 간판을 확인해 주세요.</p>
            </div>
          </Reveal>

          <div className="arrival-guides">
            <Reveal>
              <p className="eyebrow">Before You Come</p>
              <h2>처음 오시는 길도<br />편안하도록.</h2>
              <p className="arrival-guides__lead">
                궁금한 항목을 눌러 방문 전에 필요한 내용을 확인하세요.
              </p>
            </Reveal>

            <div className="arrival-accordion">
              <Reveal delay={60}>
                <details open>
                  <summary>
                    <span>01</span>
                    <strong>처음 방문</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div>
                    <p>
                      정확한 예배 시작 시간은 출발 전 대표전화로 확인해
                      주세요. 길을 찾기 어려울 때도 친절하게 안내해 드립니다.
                    </p>
                    <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone} ↗</a>
                  </div>
                </details>
              </Reveal>
              <Reveal delay={100}>
                <details>
                  <summary>
                    <span>02</span>
                    <strong>대중교통</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div>
                    <p>
                      위 지도에서 ‘대중교통’을 선택하면 현재 위치를 기준으로
                      실시간 버스와 도보 경로를 확인할 수 있습니다.
                    </p>
                    <a
                      href={`${SITE_INFO.googleDirectionsUrl}&travelmode=transit`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      대중교통 경로 열기 ↗
                    </a>
                  </div>
                </details>
              </Reveal>
              <Reveal delay={140}>
                <details>
                  <summary>
                    <span>03</span>
                    <strong>자가용과 주차</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div>
                    <p>
                      내비게이션에서 ‘재건섬김교회’ 또는 도로명 주소를
                      검색해 주세요. 주차 공간 이용 가능 여부는 방문 전 전화로
                      확인해 주세요.
                    </p>
                    <a
                      href={SITE_INFO.kakaoDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      카카오맵 길찾기 ↗
                    </a>
                  </div>
                </details>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <nav className="visit-sticky-actions" aria-label="빠른 방문 안내">
        <a
          href={SITE_INFO.kakaoDirectionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          현재 위치에서 길찾기 <span aria-hidden="true">↗</span>
        </a>
        <a href={SITE_INFO.phoneHref} aria-label={`교회 전화 ${SITE_INFO.phone}`}>
          전화
        </a>
      </nav>
    </>
  );
}
