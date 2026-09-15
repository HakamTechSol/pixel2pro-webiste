import { TouchEvent, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const banners = [
  "/p2p/nextGen.jpeg",
  "/p2p/digitalmarketing.jpeg",
  "/p2p/shopify.jpeg",
  "/p2p/AIfrelancing.jpeg",
  "/amazon.png",
];

const HeroCarousel = ({ className = "" }: { className?: string }) => {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + banners.length) % banners.length);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const distance = touchStart - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
    setTouchStart(null);
  };

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-[28px] border border-slate-200 bg-white p-1.5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:p-2 ${className}`}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
      aria-label="Pixel2Pro highlight carousel"
    >
      <div className="relative h-full overflow-hidden rounded-[24px] bg-white">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner} className="relative min-w-full">
              <div className="flex h-full min-h-[280px] items-center justify-center p-2 sm:min-h-[340px] sm:p-3 md:min-h-[420px] md:p-4 lg:p-5">
                <img
                  src={banner}
                  alt="Pixel2Pro learning banner"
                  className="h-full w-full max-h-[100%] max-w-[100%] object-contain object-center"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-4 sm:bottom-4 sm:left-4 sm:right-4">
        <div className="flex gap-1.5">
          {banners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-slate-900" : "w-2 bg-slate-400/40"}`}
              aria-label={`Show banner ${index + 1}`}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full border border-slate-200 bg-white text-black shadow-sm opacity-0 transition group-hover:opacity-100 hover:bg-slate-100"
            onClick={() => move(-1)}
            aria-label="Previous banner"
          >
            <ChevronLeft size={17} />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full border border-slate-200 bg-white text-black shadow-sm opacity-0 transition group-hover:opacity-100 hover:bg-slate-100"
            onClick={() => move(1)}
            aria-label="Next banner"
          >
            <ChevronRight size={17} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
