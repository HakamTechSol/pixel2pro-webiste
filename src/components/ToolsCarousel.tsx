import React from "react";
import aiWorkflowLogo from "@/assets/program-images/Ai Workflow.png";
import amazonLogo from "@/assets/program-images/amazon-removebg-preview.png";
import apiLogo from "@/assets/program-images/API-removebg-preview.png";
import csharpLogo from "@/assets/program-images/c-sharp.png";
import dotnetLogo from "@/assets/program-images/dotnet-removebg-preview.png";
import ecommerceLogo from "@/assets/program-images/ecommers-removebg-preview.png";
import expressLogo from "@/assets/program-images/express_js-removebg-preview.png";
import googleAdsLogo from "@/assets/program-images/Google-AdWords-logo-rectangle.png";
import graphicDesignLogo from "@/assets/program-images/graphic-design-removebg-preview.png";
import htmlLogo from "@/assets/program-images/HTML-5-Badge-Logo.png";
import makeLogo from "@/assets/program-images/Make-No-Code-DataScientest-removebg-preview.png";
import marketplaceLogo from "@/assets/program-images/marketplace-removebg-preview.png";
import metaAdsLogo from "@/assets/program-images/meta ad .png";
import mongoLogo from "@/assets/program-images/mongo-removebg-preview.png";
import nodeLogo from "@/assets/program-images/node_js-removebg-preview.png";
import promptLogo from "@/assets/program-images/prompt-engineering-logo.png";
import pythonLogo from "@/assets/program-images/python-removebg-preview.png";
import reactLogo from "@/assets/program-images/React-removebg-preview.png";
import shopifyLogo from "@/assets/program-images/shopify-removebg-preview.png";
import socialMarketingLogo from "@/assets/program-images/social-media-marketing-removebg-preview.png";
import tiktokLogo from "@/assets/program-images/tiktok-advertising.png";

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
          className="max-h-12 max-w-[72px] object-contain"
        />
      </div>
    ));

  return (
    <section className="relative overflow-hidden bg-white py-8" aria-label="Tools & Platforms">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">Tools & Platforms</h2>
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
