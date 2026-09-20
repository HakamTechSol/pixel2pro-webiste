import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TechBackground from "./TechBackground";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: object[];
}

const SITE_URL = "https://pixel2pro.com";
const LOGO_URL = `${SITE_URL}/logo.png`;

const defaultTitle =
  "Pixel2Pro - Best Online Courses in Pakistan | Next-Gen Development, AI Freelancing, Digital Marketing, Shopify";
const defaultDesc =
  "Pixel2Pro is a premium educational organization in Pakistan offering professional learning tracks in Next-Gen Development, AI Foundation & Freelancing, Digital Marketing, and Shopify.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const upsertMeta = (selector: string, attrs: Record<string, string>, content: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.content = content;
};

const upsertLink = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  } else {
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  }
};

const injectJsonLd = (blocks: object[] | undefined) => {
  document.head.querySelectorAll('script[data-seo="page"]').forEach((s) => s.remove());
  if (!blocks?.length) return;
  blocks.forEach((block) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "page");
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  });
};

const Layout = ({
  children,
  title,
  description,
  ogType = "website",
  ogImage,
  keywords,
  jsonLd,
}: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = title ? `${title} | Pixel2Pro` : defaultTitle;
    const pageDesc = description || defaultDesc;
    const pageUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: "description" }, pageDesc);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, keywords || defaultDesc);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, pageTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, pageDesc);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, ogType);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, pageUrl);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, ogImage || OG_IMAGE);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "Pixel2Pro");
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, pageTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, pageDesc);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage || OG_IMAGE);
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: pageUrl });

    injectJsonLd(jsonLd);
  }, [title, description, ogType, ogImage, keywords, jsonLd, pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-55">
        <div className="absolute -left-24 -top-20 h-[520px] w-[520px] rounded-full bg-slate-400/45 blur-[140px] animate-blob-slow sm:h-[720px] sm:w-[720px] sm:blur-[180px]" />
        <div className="absolute -right-24 top-16 h-[460px] w-[460px] rounded-full bg-slate-500/28 blur-[130px] animate-blob-reverse sm:h-[680px] sm:w-[680px] sm:blur-[170px]" />
        <div className="absolute bottom-0 left-1/4 h-[540px] w-[540px] rounded-full bg-slate-600/20 blur-[150px] animate-blob-slow sm:h-[760px] sm:w-[760px] sm:blur-[190px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_42%),radial-gradient(circle_at_center,rgba(148,163,184,0.12),transparent_62%),linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.9))]" />
      </div>

      <TechBackground />

      <div className="relative z-10 flex flex-1 flex-col">
        <Header />
        <main className="flex-1 pb-32 md:pb-0">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;