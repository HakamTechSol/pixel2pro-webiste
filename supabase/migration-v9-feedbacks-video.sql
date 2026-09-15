-- Migration v9: Video testimonials support for the feedbacks table.
-- Run in Supabase Dashboard -> SQL Editor.
-- Idempotent: safe to run again.

ALTER TABLE public.feedbacks
  ADD COLUMN IF NOT EXISTS video_url text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS thumbnail_url text DEFAULT NULL;