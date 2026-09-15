-- Migration v8: Course home display order (unique sequence)
-- Run ONCE in Supabase Dashboard -> SQL Editor.
-- Idempotent: safe to run again.

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS home_order integer;

-- Unique partial index: no two courses on home page can share the same order number
CREATE UNIQUE INDEX IF NOT EXISTS idx_courses_home_order_unique
  ON public.courses (home_order)
  WHERE show_on_home = true AND home_order IS NOT NULL;