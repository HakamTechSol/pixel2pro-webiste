-- Migration v6: Home Hero media fields
-- Run ONCE in Supabase Dashboard -> SQL Editor.
-- Idempotent: safe to run again.
-- Adds configurable media for the home hero section (uploaded images + optional video).

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS hero_images jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS hero_video text;