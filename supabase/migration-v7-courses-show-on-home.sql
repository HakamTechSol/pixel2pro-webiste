-- Migration v7: Course "Show on Home" flag
-- Run ONCE in Supabase Dashboard -> SQL Editor.
-- Idempotent: safe to run again.
-- When true, the course appears in the "Choose your next learning path" section on the website home page.

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS show_on_home boolean NOT NULL DEFAULT true;