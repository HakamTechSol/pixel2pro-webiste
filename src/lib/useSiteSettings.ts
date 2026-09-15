import { useQuery } from "@tanstack/react-query";
import { fetchRecords } from "./supabaseClient";

export interface SiteSettings {
  id: string;
  ai_banner_enabled: boolean;
  ai_banner_link: string;
  ai_banner_text: string;
  ai_banner_subtext: string;
  hero_images: string[];
  hero_video: string;
}

const DEFAULT_SETTINGS: SiteSettings = {
  id: "default",
  ai_banner_enabled: true,
  ai_banner_link: "https://chat.whatsapp.com/Js9TVHNxeNCAEznLzzqjUy?s=sh&p=a&mlu=4&ilr=4",
  ai_banner_text: "Join our free AI awareness session on WhatsApp.",
  ai_banner_subtext:
    "Get the AI awareness session schedule and joining link directly on WhatsApp. Tap the button to reserve your free spot.",
  hero_images: [],
  hero_video: "",
};

export function useSiteSettings() {
  const { data, isLoading } = useQuery<SiteSettings[]>({
    queryKey: ["site-settings"],
    queryFn: () => fetchRecords<SiteSettings[]>("site_settings", "?select=*&limit=1"),
    staleTime: 1000 * 60 * 2,
  });

  const settings = data?.[0] ?? DEFAULT_SETTINGS;

  return { settings, loading: isLoading && !data };
}