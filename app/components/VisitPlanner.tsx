"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_INFO } from "../data/site";
import { ChurchMap } from "./ChurchMap";

type RouteMode = "transit" | "driving" | "walking";

const ROUTE_MODES: Array<{
  id: RouteMode;
  label: string;
  english: string;
  description: string;
}> = [
  {
    id: "transit",
    label: "대중교통",
    english: "Transit",
    description:
      "현재 위치에서 이용 가능한 버스와 도보 환승 경로를 지도 앱에서 확인합니다.",
  },
  {
    id: "driving",
    label: "자가용",
    english: "Drive",
    description:
      "교회 좌표를 목적지로 설정합니다. 주차 가능 여부는 출발 전 전화로 확인해 주세요.",
  },
  {
    id: "walking",
    label: "도보",
    english: "Walk",
    description:
      "가까운 위치에서 교회 입구까지 이어지는 도보 경로를 확인합니다.",
  },
];

export function VisitPlanner() {
  const [routeMode, setRouteMode] = useState<RouteMode>("transit");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const resetCopyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetCopyTimer.current) window.clearTimeout(resetCopyTimer.current);
    };
  }, []);

  const selectedRoute =
    ROUTE_MODES.find((mode) => mode.id === routeMode) ?? ROUTE_MODES[0];
  const directionsUrl = `${SITE_INFO.googleDirectionsUrl}&travelmode=${routeMode}`;

  const copyAddress = async () => {
    try {
      try {
        await navigator.clipboard.writeText(SITE_INFO.address);
      } catch {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = SITE_INFO.address;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        try {
          temporaryInput.select();
          const copied = document.execCommand("copy");
          if (!copied) throw new Error("Copy failed");
        } finally {
          temporaryInput.remove();
        }
      }
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    if (resetCopyTimer.current) window.clearTimeout(resetCopyTimer.current);
    resetCopyTimer.current = window.setTimeout(() => setCopyState("idle"), 2200);
  };

  return (
    <div className="visit-explorer">
      <ChurchMap />

      <aside className="visit-control-panel" aria-label="방문 경로 안내">
        <div>
          <p className="eyebrow">Plan Your Visit</p>
          <h2>재건섬김교회로<br />오시는 길</h2>
        </div>

        <div className="address-copy-card">
          <span>도로명 주소</span>
          <strong>{SITE_INFO.address}</strong>
          <small>
            지번 {SITE_INFO.lotAddress} · 우편번호 {SITE_INFO.postalCode}
          </small>
          <button type="button" onClick={copyAddress}>
            <span aria-hidden="true">{copyState === "copied" ? "✓" : "⧉"}</span>
            {copyState === "copied"
              ? "주소 복사됨"
              : copyState === "failed"
                ? "복사하지 못했어요"
                : "주소 복사"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copyState === "copied"
              ? "주소가 클립보드에 복사되었습니다."
              : copyState === "failed"
                ? "주소를 복사하지 못했습니다."
                : ""}
          </span>
        </div>

        <div className="route-mode-picker">
          <div className="route-mode-picker__label">
            <span>이동 방법</span>
            <small>{selectedRoute.english}</small>
          </div>
          <div
            className="route-mode-picker__buttons"
            role="group"
            aria-label="이동 방법 선택"
          >
            {ROUTE_MODES.map((mode) => (
              <button
                type="button"
                key={mode.id}
                aria-pressed={routeMode === mode.id}
                onClick={() => setRouteMode(mode.id)}
              >
                {mode.label}
              </button>
            ))}
          </div>
          <p role="status" aria-live="polite" aria-atomic="true">
            {selectedRoute.description}
          </p>
          <a
            className="route-primary-action"
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            현재 위치에서 길찾기
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className="map-provider-links" aria-label="지도 서비스 선택">
          <a href={SITE_INFO.mapUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">N</span>
            <div>
              <small>국내 장소 정보</small>
              <strong>네이버 지도</strong>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={SITE_INFO.kakaoDirectionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">K</span>
            <div>
              <small>현재 위치에서 출발</small>
              <strong>카카오맵 길찾기</strong>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={SITE_INFO.openStreetMapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">O</span>
            <div>
              <small>좌표로 크게 보기</small>
              <strong>OpenStreetMap</strong>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="visit-phone-link" href={SITE_INFO.phoneHref}>
          <span>길 안내가 필요하신가요?</span>
          <strong>{SITE_INFO.phone}</strong>
          <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </div>
  );
}
