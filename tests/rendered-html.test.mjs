import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished church homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /<title>재건섬김교회<\/title>/i);
  assert.match(html, /함께 예배하고/);
  assert.match(html, /051-632-5010/);
  assert.match(html, /고동골로78번길 74/);
  assert.match(html, /church-building\.jpg/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders key church routes", async () => {
  const routes = [
    ["/about", /이남열 목사/],
    ["/worship", /주일오전예배/],
    ["/sermons", /최근 예배 영상/],
    ["/next-generation", /믿음의 다음/],
    ["/news", /알려드립니다/],
    ["/visit", /문현동 100-19/],
  ];

  for (const [pathname, expectation] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expectation, pathname);
  }
});

test("renders the interactive visit map and route actions", async () => {
  const response = await render("/visit");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /openstreetmap\.org\/export\/embed\.html/);
  assert.match(html, /재건섬김교회 주변 실제 지도/);
  assert.match(html, /주소 복사/);
  assert.match(html, /카카오맵 길찾기/);
  assert.match(html, /현재 위치에서 길찾기/);
});

test("starter-only assets and metadata are removed", async () => {
  const [page, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /route-transition|page-enter/);
});
