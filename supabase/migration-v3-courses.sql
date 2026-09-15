-- Migration v3: Rich course content columns for dynamic website
-- Run in Supabase Dashboard -> SQL Editor
-- This adds display & content fields to courses so the website is fully dynamic.

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS track text NOT NULL DEFAULT 'General',
  ADD COLUMN IF NOT EXISTS program_name text,
  ADD COLUMN IF NOT EXISTS sessions text NOT NULL DEFAULT '2 Classes/Week',
  ADD COLUMN IF NOT EXISTS image_url text,
  ADD COLUMN IF NOT EXISTS instructor text DEFAULT '',
  ADD COLUMN IF NOT EXISTS instructor_role text DEFAULT '',
  ADD COLUMN IF NOT EXISTS overview text DEFAULT '',
  ADD COLUMN IF NOT EXISTS outcomes jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS tools jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS curriculum jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS industry_trends jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS impact_headline text DEFAULT '',
  ADD COLUMN IF NOT EXISTS impact_metrics jsonb NOT NULL DEFAULT '[]'::jsonb;
