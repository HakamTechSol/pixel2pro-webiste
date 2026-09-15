import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, Home, Menu, MessageCircle, Search, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useSiteSettings } from "@/lib/useSiteSettings";

const desktopLinks = [
  { label: "Home", path: "/" },
  { label: "Programs", path: "/courses" },
  { label: "Faculty", path: "/faculty" },
  { label: "Contact", path: "/contact" },
];

const bottomLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Programs", path: "/courses", icon: Search },
  { label: "Register", path: "/join", icon: BookOpen },
  { label: "Faculty", path: "/faculty", icon: GraduationCap },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const { settings } = useSiteSettings();
  const { ai_banner_enabled: bannerEnabled, ai_banner_link: bannerLink, ai_banner_text: bannerText } = settings;

  const isActive = (path: string) => pathname === path || (path === "/courses" && pathname.startsWith("/courses"));

  return (
    <>
      {bannerEnabled && (
        <a
          href={bannerLink || "https://wa.me/923092271214?text=Hi%20Pixel2Pro%20I%20want%20to%20join%20the%20free%20AI%20awareness%20session"}
          target="_blank"
          rel="noreferrer"
          className="flex h-9 items-center justify-center gap-1.5 overflow-hidden bg-black px-4 text-center text-xs font-bold text-white shadow-sm transition hover:brightness-105"
        >
          <MessageCircle size={14} className="shrink-0" />
          <span className="animate-demo-announcement block max-w-[92vw] truncate">{bannerText || "Free AI Awareness Session on WhatsApp - Join Now"}</span>
        </a>
      )}
      <header className="sticky top-0 z-50 hidden border-b border-slate-200 bg-white/90 backdrop-blur-xl md:block">
        <div className="container flex h-16 items-center justify-between">
          <Logo size="small" />

          <nav className="hidden items-center gap-2 md:flex">
            {desktopLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-pill ${isActive(link.path) ? "bg-black text-white hover:bg-black hover:text-white" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/join">
              <Button size="sm" className="rounded-full px-5">
                Enroll
              </Button>
            </Link>
          </nav>

          <button className="hidden" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-dvh w-[86vw] max-w-sm border-l border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo size="small" />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <div className="space-y-2">
          {[...bottomLinks, { label: "Contact", path: "/contact", icon: BookOpen }].map((item) => (
            <Link
              key={`${item.path}-${item.label}`}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                isActive(item.path) ? "bg-black text-white" : "bg-slate-50 text-slate-700"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-3 border-t border-slate-200 pt-5 text-sm font-medium text-slate-500">
          <Link to="/privacy" onClick={() => setDrawerOpen(false)}>Privacy Policy</Link>
          <Link to="/refund-policy" onClick={() => setDrawerOpen(false)}>Refund Policy</Link>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {bottomLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-semibold transition-all active:scale-95 ${
                isActive(item.path) ? "bg-black text-white" : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;





