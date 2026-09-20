-- Migration v12: Rename AI course to use "&" instead of "and"
-- Run in Supabase Dashboard -> SQL Editor.

UPDATE public.courses
SET course_name = 'AI Foundation & Freelancing',
    program_name = 'AI Foundation & Freelancing'
WHERE course_name = 'AI Foundation and Freelancing'
   OR program_name = 'AI Foundation and Freelancing';