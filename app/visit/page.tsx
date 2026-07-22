import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SITE_INFO } from "../data/site";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `${SITE_INFO.address}, 재건섬김교회 오시는 길과 대표전화 안내입니다.`,
};

export default function VisitPage() {
  return (
    <>
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
          </div>
        }
      />

      <section className="section visit-map-section">
        <div className="page-width visit-map-grid">
          <Reveal className="visit-map-art">
            <div className="visit-map-art__mesh" aria-hidden="true" />
            <div className="visit-map-art__route" aria-hidden="true" />
            <div className="visit-map-art__pin">
              <span />
              <strong>재건섬김교회</strong>
              <small>{SITE_INFO.shortAddress}</small>
            </div>
            <p>35.1438° N · 129.0756° E</p>
          </Reveal>

          <Reveal className="visit-details" delay={90}>
            <p className="eyebrow">Contact & Location</p>
            <h2>재건섬김교회</h2>
            <dl>
              <div>
                <dt>주소</dt>
                <dd>{SITE_INFO.address}</dd>
              </div>
              <div>
                <dt>지번</dt>
                <dd>부산광역시 남구 문현동 100-19</dd>
              </div>
              <div>
                <dt>대표전화</dt>
                <dd>
                  <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone}</a>
                </dd>
              </div>
              <div>
                <dt>주차</dt>
                <dd>이용 가능 여부를 방문 전 전화로 확인해 주세요.</dd>
              </div>
            </dl>
            <div className="visit-details__actions">
              <a
                className="button button--dark"
                href={SITE_INFO.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                네이버 지도
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--outline" href={SITE_INFO.phoneHref}>
                전화하기
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wayfinding-section">
        <div className="page-width">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Before You Come</p>
              <h2>방문 전 확인해 주세요</h2>
            </div>
            <p>현재 위치에 맞는 가장 정확한 경로는 지도 앱에서 확인할 수 있습니다.</p>
          </Reveal>
          <div className="wayfinding-grid">
            <Reveal className="wayfinding-card">
              <span>Public Transit</span>
              <h3>대중교통</h3>
              <p>
                지도에서 출발 위치를 입력하면 실시간 버스·도보 경로를 확인할 수
                있습니다.
              </p>
            </Reveal>
            <Reveal className="wayfinding-card" delay={80}>
              <span>By Car</span>
              <h3>자가용</h3>
              <p>
                내비게이션에서 ‘재건섬김교회’ 또는 도로명 주소를 검색해 주세요.
              </p>
            </Reveal>
            <Reveal className="wayfinding-card" delay={160}>
              <span>Need Help?</span>
              <h3>길 안내 문의</h3>
              <p>길을 찾기 어려우시면 {SITE_INFO.phone}으로 연락해 주세요.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
