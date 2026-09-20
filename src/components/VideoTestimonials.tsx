import { useCallback, useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { fetchRecords } from "@/lib/supabaseClient";

type VideoTestimonial = {
  id: number;
  name: string;
  role: string;
  video: string;
  logo: string;
};

const LOGO = "/logo.png";

const VideoTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);

  useEffect(() => {
    let cancelled = false;
    const loadVideos = async () => {
      try {
        const records = (await fetchRecords("feedbacks")) as Array<
          Record<string, unknown>
        > | null;
        if (!records?.length) return;
        const approvedVideos = records
          .filter((r) => Boolean(r.approved) && Boolean(r.video_url))
          .slice(0, 8)
          .map((r, i) => ({
            id: i + 1,
            name: String(r.name ?? "Student"),
            role: String(r.track ?? "Pixel2Pro Graduate"),
            video: String(r.video_url),
            logo: LOGO,
          }));
        if (approvedVideos.length && !cancelled)
          setTestimonials(approvedVideos);
      } catch (e) {
        console.error("Error loading video testimonials:", e);
      }
    };
    loadVideos();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalSlides = Math.max(
    1,
    Math.ceil(testimonials.length / cardsPerView),
  );

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, totalSlides - 1)));
  }, [totalSlides]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = window.setInterval(goNext, 10000);
    return () => window.clearInterval(timer);
  }, [goNext]);

  const startIndex = activeIndex * cardsPerView;
  const visibleCards = testimonials.slice(
    startIndex,
    startIndex + cardsPerView,
  );

  const handlePlay = (videoUrl: string) => setCurrentVideo(videoUrl);
  const handleCloseModal = () => setCurrentVideo(null);

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="container">
        {/* Header */}
        <h2 className="mb-10 text-center text-3xl font-bold leading-tight md:text-4xl">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Future Leaders
          </span>
        </h2>

        {/* Staggered carousel */}
        {testimonials.length === 0 ? (
          <p className="text-center text-slate-400">
            Video testimonials coming soon. Stay tuned!
          </p>
        ) : (
          <div className="relative">
            <div className="flex items-start justify-center gap-4 sm:gap-6">
              {visibleCards.map((testimonial, index) => {
                const stagger =
                  activeIndex % 2 === 0
                    ? index % 2 === 0
                      ? "mt-6"
                      : "mt-0"
                    : index % 2 === 0
                      ? "mt-0"
                      : "mt-6";

                return (
                  <div
                    key={testimonial.id}
                    className={`group relative cursor-pointer shrink-0 transition-all duration-500 ${stagger}`}
                    onClick={() => handlePlay(testimonial.video)}
                  >
                    <div className="relative aspect-[3/4] w-44 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-md sm:w-60 md:w-64">
                      {/* Silently playing video */}
<video
                      src={testimonial.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={testimonial.name}
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      className="h-full w-full object-cover"
                    />

                      {/* Logo watermark */}
                 

                      {/* Fullscreen hint */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                          <Maximize2 size={13} />
                          Fullscreen
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Name badge */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                        <p className="text-sm font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all focus:outline-none ${
                    activeIndex === index
                      ? "w-7 bg-slate-900"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {currentVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute right-5 top-5 z-10 text-white transition hover:text-slate-300"
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <video
            src={currentVideo}
            controls
            autoPlay
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="h-auto max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
