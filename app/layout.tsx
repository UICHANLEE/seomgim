import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "재건섬김교회",
      template: "%s | 재건섬김교회",
    },
    description:
      "부산 남구 문현동 재건섬김교회. 함께 예배하고 서로를 섬기며 그리스도 안에서 다시 세워지는 공동체입니다.",
    keywords: ["재건섬김교회", "부산교회", "문현동교회", "예장재건"],
    openGraph: {
      title: "재건섬김교회",
      description:
        "함께 예배하고, 서로를 섬기며, 그리스도 안에서 다시 세워지는 공동체.",
      type: "website",
      locale: "ko_KR",
      siteName: "재건섬김교회",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "재건섬김교회 — 함께 예배하고 서로를 섬기며 다시 세워지는 교회",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "재건섬김교회",
      description: "함께 예배하고 서로를 섬기며 다시 세워지는 공동체.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">
          본문으로 바로가기
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
