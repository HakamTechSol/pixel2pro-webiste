import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, Building2, MessageCircleMore, Network, Search } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import ToolsCarousel from "@/components/ToolsCarousel";
import { Button } from "@/components/ui/button";
import { useWebsiteCourses } from "@/lib/useCourses";
import { useSiteSettings } from "@/lib/useSiteSettings";
import { courseSlug } from "@/lib/slug";

const VideoTestimonials = lazy(() => import("@/components/VideoTestimonials"));

const trustStats = [
  { icon: Building2, value: "100+", label: "Academic and industry learning partners" },
  { icon: BadgeCheck, value: "100%", label: "Verification-ready certificate mapping" },
  { icon: Network, value: "1000+", label: "Professional alumni and peer network" },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data: courses } = useWebsiteCourses();
  const { settings } = useSiteSettings();
  const {
    ai_banner_enabled: bannerEnabled,
    ai_banner_link: bannerLink,
    ai_banner_text: bannerText,
    ai_banner_subtext: bannerSubtext,
    hero_images: heroImages,
  } = settings;

  const heroMedia = Array.isArray(heroImages) && heroImages.length > 0 ? heroImages : [];
  const [heroIndex, setHeroIndex] = useState(0);

  const homeCourses = courses
    .filter((c) => c.showOnHome !== false)
    .sort((a, b) => (a.homeOrder ?? 999) - (b.homeOrder ?? 999));

  const getPerView = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  const [perView, setPerView] = useState<number>(getPerView);
  const [programIndex, setProgramIndex] = useState(0);

  useEffect(() => {
    const compute = () => setPerView(getPerView());
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, homeCourses.length - perView);

  useEffect(() => {
    setProgramIndex((i) => Math.min(i, maxIndex));
    if (homeCourses.length <= perView) {
      setProgramIndex(0);
      return;
    }
    const timer = setInterval(() => {
      setProgramIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [homeCourses.length, perView, maxIndex]);

  useEffect(() => {
    if (heroMedia.length <= 1) return;
    const timer = setInterval(() => setHeroIndex((i) => (i + 1) % heroMedia.length), 8000);
    return () => clearInterval(timer);
  }, [heroMedia.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
  } else {
    navigate("/courses");
  }
};

  const suggestions = searchQuery.trim()
    ? courses.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <Layout
      title="Best Online Courses & Educational Research in Pakistan"
      description="Pixel2Pro is a leading vocational training and educational research platform in Pakistan. Discover courses in Next-Gen Development, AI Foundation & Freelancing, Digital Marketing, and more."
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pixel2Pro - Online Courses in Pakistan",
          url: "https://pixel2pro.com/",
          description:
            "Pixel2Pro offers premium online courses in Pakistan: Next-Gen Development, AI Foundation & Freelancing, Digital Marketing, and Shopify.",
          isPartOf: { "@type": "WebSite", name: "Pixel2Pro", url: "https://pixel2pro.com" },
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Popular Pixel2Pro Courses",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Next-Gen Developer: AI Coding & Vibe Coding",
              url: "https://pixel2pro.com/courses/next-gen-developer-ai-coding-and-vibe-coding",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Digital Marketing Mastery Program",
              url: "https://pixel2pro.com/courses/digital-marketing",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "AI Foundation and Freelancing",
              url: "https://pixel2pro.com/courses/ai-foundation-and-freelancing",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Shopify Store Development & Management",
              url: "https://pixel2pro.com/courses/shopify-growth",
            },
          ],
        },
      ]}
    >
      <section className="relative overflow-visible border-b border-slate-200 bg-white">
        <div className="container grid grid-cols-1 items-center gap-8 pt-10 pb-6 md:min-h-[520px] md:grid-cols-[0.95fr_1.05fr] md:py-2">
          <div className="space-y-4">
            <div className="space-y-3">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl lg:text-7xl">
                Pixel Today Pro Tomorrow
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Pixel2Pro, powered by Hakamtechsol, turns focused learners into job-ready builders through cohort-based tracks, verified credentials, and portfolio-grade outcomes with guaranteed internship opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="h-[52px] w-full rounded-full px-6 sm:w-auto">
                  Explore Programs <ArrowRight size={17} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="h-[52px] w-full rounded-full border-slate-300 px-6 sm:w-auto">
                  Register Now
                </Button>
              </Link>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative max-w-xl z-30">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search tracks, tools, and learning paths..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="flex h-14 w-full items-center rounded-full border border-slate-200 bg-slate-50 pl-12 pr-28 text-sm font-medium text-slate-900 outline-none transition focus:border-black focus:bg-white placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-slate-800 transition z-10"
              >
                Search
              </button>

              {/* Autocomplete suggestions dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50">
                  {suggestions.map((course) => (
                    <button
                      key={course.id}
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); navigate(`/courses/${courseSlug(course)}`); }}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-slate-50 transition"
                    >
                      <div className="pr-4">
                        <p className="text-sm font-bold text-slate-900">{course.title}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[250px] sm:max-w-md">{course.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {course.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl md:block">
            <div className="relative h-[330px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-1.5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:h-[390px] sm:p-2 md:h-[480px]">
              <div className="relative h-full overflow-hidden rounded-[24px] bg-white">
                {heroMedia.length > 0 ? (
                  <>
                    {heroMedia.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Hero image ${i + 1}`}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
                      />
                    ))}
                    {heroMedia.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {heroMedia.map((_, i) => (
                          <button
                            key={i}
                            aria-label={`Show image ${i + 1}`}
                            onClick={() => setHeroIndex(i)}
                            className={`h-1.5 rounded-full transition-all ${i === heroIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToolsCarousel />

      <section className="border-b border-slate-200 bg-slate-50 py-8 md:py-12">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-5">
              <stat.icon size={22} />
              <p className="mt-5 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {bannerEnabled && (
        <section id="whatsapp-enroll" className="scroll-mt-24 border-b border-slate-200 bg-white py-10 md:py-14">
          <div className="container">
            <div className="rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-100 via-blue-50 to-white px-6 py-6 shadow-[0_18px_50px_rgba(37,99,235,0.12)] md:px-10 md:py-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
                    <MessageCircleMore size={30} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">Free AI Awareness Session</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                      {bannerText || "Join our free AI awareness session on WhatsApp."}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                      {bannerSubtext ||
                        "Get the AI awareness session schedule and joining link directly on WhatsApp. Tap the button to reserve your free spot."}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                  <a
                    href={bannerLink || "https://wa.me/923167853795?text=Hi%20Pixel2Pro%20I%20want%20to%20join%20the%20free%20AI%20awareness%20session"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1fbe59]"
                  >
                    <MessageCircleMore size={18} /> Join Session
                  </a>
                  <Link to="/join">
                    <Button variant="outline" className="h-12 whitespace-nowrap rounded-full border-slate-300 px-6 text-sm font-semibold text-slate-900">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-14 gap-12 md:py-20" id="tracks">
        <div className="container">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Learning Programs</p>
              <h2 className="mt-2 text-3xl font-bold md:text-5xl">Choose your next learning path.</h2>
            </div>
            <Link to="/courses" className="text-sm font-bold text-black underline underline-offset-4">
              View programs
            </Link>
          </div>
          <div className="relative -mx-2 sm:-mx-3">
            <div className="overflow-x-clip overflow-y-visible px-2 sm:px-3">
              <div
                className="flex items-stretch transition-transform duration-700 ease-out will-change-transform [backface-visibility:hidden]"
                style={{ transform: `translateX(-${(programIndex * 100) / perView}%)` }}
              >
                {homeCourses.map((course) => (
                  <div
                    key={course.id}
                    className="h-full shrink-0 px-2 sm:px-2.5"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {homeCourses.length > perView && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setProgramIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === programIndex ? "w-6 bg-black" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Suspense fallback={null}>
        <VideoTestimonials />
      </Suspense>
    </Layout>
  );
};

export default Index;
