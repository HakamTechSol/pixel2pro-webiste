-- Migration v4: Site settings table for dashboard-managed public content
-- Run in Supabase Dashboard -> SQL Editor
-- Stores the AI Awareness Session banner (show/hide + content) used on the website.

CREATE TABLE IF NOT EXISTS public.site_settings (
  id text PRIMARY KEY DEFAULT 'default',
  ai_banner_enabled boolean NOT NULL DEFAULT true,
  ai_banner_link text NOT NULL DEFAULT 'https://chat.whatsapp.com/Js9TVHNxeNCAEznLzzqjUy?s=sh&p=a&mlu=4&ilr=4',
  ai_banner_text text NOT NULL DEFAULT 'Join our free AI awareness session on WhatsApp.',
  ai_banner_subtext text NOT NULL DEFAULT 'Get the AI awareness session schedule and joining link directly on WhatsApp. Tap the button to reserve your free spot.',
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "site_settings_public_all" ON public.site_settings;
CREATE POLICY "site_settings_public_all"
  ON public.site_settings
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

INSERT INTO public.site_settings (id)
VALUES ('default')
ON CONFLICT (id) DO NOTHING;