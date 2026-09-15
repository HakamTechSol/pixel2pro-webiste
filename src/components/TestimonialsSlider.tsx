import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fetchRecords } from "@/lib/supabaseClient";

const defaultTestimonials = [
  {
    name: "Usman Rao",
    track: "Remote Front-End Developer",
    story: "The freelance coaching sessions changed everything for me. I now have clients from Canada and Australia, and I work from home on my own schedule. This is not just a course, it is a career launchpad.",
  },
  {
    name: "Ahmad Ziauddin",
    track: "Freelance Web Developer",
    story: "Before joining this platform, I only had basic HTML skills. Within 3 months, I built real websites, got my first freelance client from the UK, and now earn online confidently. The mentorship and support were beyond what I expected.",
  },
  {
    name: "Amina Farhan",
    track: "Junior UI Developer",
    story: "I always had a creative side but did not know how to enter the IT field. Their UI Development course helped me learn the tools, build a stunning portfolio, and get hired by a local agency as a junior developer.",
  },
];

const TestimonialsSlider = () => {
  const [testimonialsList, setTestimonialsList] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const records = await fetchRecords("feedbacks");
        if (records && records.length > 0) {
          const validRecords = records.filter((r: any) => r.name && r.track && r.story);
          setTestimonialsList(validRecords);
        } else {
          setTestimonialsList(defaultTestimonials);
        }
      } catch (e) {
        console.error("Error loading feedbacks from Supabase:", e);
        setTestimonialsList(defaultTestimonials);
      }
    };

    getFeedbacks();
  }, []);

  useEffect(() => {
    if (testimonialsList.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonialsList]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 290 : isTablet ? 340 : 390;
  const gap = isMobile ? 16 : 24;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (testimonialsList.length === 0) {
    return (
      <div className="flex justify-center py-6">
        <article
          style={{ width: `${cardWidth}px` }}
          className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
            <Quote size={18} />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            No testimonials submitted yet. Be the first to share your learning journey at Pixel2Pro.
          </p>
          <div className="mt-6 h-px w-full bg-slate-100" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Pixel2Pro Reviews
          </p>
        </article>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-8" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%)]" />
      <div className="pointer-events-none absolute -left-20 top-8 h-40 w-40 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />

      <div
        className="flex items-stretch transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(50vw - ${activeIndex * (cardWidth + gap) + cardWidth / 2}px))`,
          gap: `${gap}px`,
        }}
      >
        {testimonialsList.map((item, index) => {
          const isActive = index === activeIndex;
          const initials = item.name
            .split(" ")
            .map((n) => n[0])
            .join("");

          return (
            <article
              key={`${item.name}-${index}`}
              onClick={() => setActiveIndex(index)}
              style={{ width: `${cardWidth}px` }}
              className={`shrink-0 cursor-pointer overflow-hidden rounded-[28px] border bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 ${
                isActive
                  ? "scale-[1.03] border-slate-900/15 opacity-100 shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
                  : "scale-[0.96] border-slate-200 opacity-55 hover:opacity-80"
              }`}
            >
              <div className="flex h-full min-h-[320px] flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                    <Quote size={18} />
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Verified story
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600 md:text-[15px] md:leading-8 line-clamp-5 md:line-clamp-6">
                  {item.story}
                </p>

                <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold leading-tight text-slate-900 md:text-base">
                      {item.name}
                    </h3>
                    <p className="truncate text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {item.track}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous testimonial"
        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-black shadow-lg transition hover:bg-slate-50 lg:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        type="button"
        aria-label="Next testimonial"
        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-black shadow-lg transition hover:bg-slate-50 lg:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-8 flex justify-center gap-1.5">
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-black" : "w-1.5 bg-black/20"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
