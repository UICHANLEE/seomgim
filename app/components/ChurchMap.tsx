"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_INFO } from "../data/site";

export function ChurchMap({ compact = false }: { compact?: boolean }) {
  const [interactive, setInteractive] = useState(false);
  const activateButtonRef = useRef<HTMLButtonElement>(null);

  const endMapInteraction = () => {
    setInteractive(false);
    requestAnimationFrame(() => activateButtonRef.current?.focus());
  };

  useEffect(() => {
    const closeMapInteraction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInteractive(false);
        requestAnimationFrame(() => activateButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", closeMapInteraction);
    return () => document.removeEventListener("keydown", closeMapInteraction);
  }, []);

  return (
    <div
      className={`church-map${compact ? " church-map--compact" : ""}${interactive ? " is-interactive" : ""}`}
    >
      <button
        ref={activateButtonRef}
        className="church-map__activate"
        type="button"
        aria-pressed={interactive}
        onClick={() => setInteractive((current) => !current)}
      >
        <span aria-hidden="true">{interactive ? "×" : "⌖"}</span>
        {interactive ? "지도 조작 종료" : "지도 조작하기"}
      </button>

      <iframe
        className="church-map__frame"
        src={SITE_INFO.mapEmbedUrl}
        title="재건섬김교회 주변 실제 지도"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        tabIndex={interactive ? 0 : -1}
      />

      <button
        className="sr-only church-map__focus-return"
        type="button"
        tabIndex={interactive ? 0 : -1}
        onFocus={endMapInteraction}
      >
        지도 조작을 마치고 페이지로 돌아가기
      </button>

      <div className="church-map__live" aria-hidden="true">
        <span />
        실제 지도
      </div>

      <div
        className="church-map__place"
        aria-hidden={interactive}
        inert={interactive ? true : undefined}
      >
        <span>Jaegun Seomgim Church</span>
        <strong>{SITE_INFO.name}</strong>
        <small>{SITE_INFO.shortAddress}</small>
        <a href={SITE_INFO.mapUrl} target="_blank" rel="noreferrer">
          네이버 지도에서 크게 보기 <span aria-hidden="true">↗</span>
        </a>
      </div>

      <p className="church-map__hint" aria-hidden="true">
        {interactive ? "지도를 움직일 수 있어요" : "드래그하여 주변 보기 · + / − 확대"}
      </p>
    </div>
  );
}
