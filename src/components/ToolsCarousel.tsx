import React from "react";
import aiWorkflowLogo from "@/assets/program-images/ai-workflow.png";
import amazonLogo from "@/assets/program-images/amazon.png";
import apiLogo from "@/assets/program-images/api.png";
import csharpLogo from "@/assets/program-images/c-sharp.png";
import dotnetLogo from "@/assets/program-images/dotnet.png";
import ecommerceLogo from "@/assets/program-images/ecommerce.png";
import expressLogo from "@/assets/program-images/express-js.png";
import googleAdsLogo from "@/assets/program-images/google-ads.png";
import graphicDesignLogo from "@/assets/program-images/graphic-design.png";
import htmlLogo from "@/assets/program-images/html-5.png";
import makeLogo from "@/assets/program-images/make.png";
import marketplaceLogo from "@/assets/program-images/marketplace.png";
import metaAdsLogo from "@/assets/program-images/meta-ads.png";
import mongoLogo from "@/assets/program-images/mongo-db.png";
import nodeLogo from "@/assets/program-images/node-js.png";
import promptLogo from "@/assets/program-images/prompt-engineering.png";
import pythonLogo from "@/assets/program-images/python.png";
import reactLogo from "@/assets/program-images/react-js.png";
import shopifyLogo from "@/assets/program-images/shopify.png";
import socialMarketingLogo from "@/assets/program-images/social-media-marketing.png";
import tiktokLogo from "@/assets/program-images/tiktok-ads.png";

const logos = [
  { name: "AI Workflow", src: aiWorkflowLogo },
  { name: "Amazon", src: amazonLogo },
  { name: "API", src: apiLogo },
  { name: "C#", src: csharpLogo },
  { name: "Dotnet", src: dotnetLogo },
  { name: "E‑Commerce", src: ecommerceLogo },
  { name: "Express", src: expressLogo },
  { name: "Google Ads", src: googleAdsLogo },
  { name: "Graphic Design", src: graphicDesignLogo },
  { name: "HTML", src: htmlLogo },
  { name: "Make", src: makeLogo },
  { name: "Marketplace", src: marketplaceLogo },
  { name: "Meta Ads", src: metaAdsLogo },
  { name: "MongoDB", src: mongoLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Prompt Engineering", src: promptLogo },
  { name: "Python", src: pythonLogo },
  { name: "React", src: reactLogo },
  { name: "Shopify", src: shopifyLogo },
  { name: "Social Marketing", src: socialMarketingLogo },
  { name: "TikTok", src: tiktokLogo }
];

export const ToolsCarousel: React.FC = () => {
  const renderLogos = (prefix: string) =>
    logos.map((logo) => (
      <div
        key={`${prefix}-${logo.name}`}
        className="flex h-20 w-24 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 p-3"
      >
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          className="max-h-12 max-w-[72px] object-contain"
        />
      </div>
    ));

  return (
    <section className="relative overflow-hidden bg-white py-8" aria-label="Tools & Platforms">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">Master the Tools the Industry Uses</h2>
      </div>
      <div className="w-full">
        <div className="tools-marquee-wrapper">
          <div className="tools-marquee-track">
            {renderLogos("a")}
            {renderLogos("b")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
