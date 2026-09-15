import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo - Copy.png";

const RouteLoader = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 520);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-transparent backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-5 rounded-xl bg-black/80 px-8 py-7 shadow-2xl">
        <img src={logo} alt="Pixel2Pro" className="h-16 w-auto animate-loader-pulse object-contain md:h-20" />
        <div className="h-1 w-36 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-1/2 animate-loader-bar rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default RouteLoader;
