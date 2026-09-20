-- Migration v11: Replace placeholder/fake instructor names with the real
-- Pixel2Pro faculty shown on the /faculty page. Run in Supabase SQL Editor.

UPDATE public.courses
SET instructor = 'Hunain Haider',
    instructor_role = 'Full-Stack Developer & AI Instructor'
WHERE id = 'next-gen-developer'
   OR (instructor = 'Hakamtechsol Technical Board' AND id LIKE '%next%');

UPDATE public.courses
SET instructor = 'M Junaid Shahid',
    instructor_role = 'Digital Marketing & AI Skills Trainer'
WHERE id = 'digital-marketing'
   OR instructor = 'Maha Siddiqui';

UPDATE public.courses
SET instructor = 'Arbaz Ali',
    instructor_role = 'Senior Software Developer & AI Foundation Mentor'
WHERE id = 'ai-freelancing'
   OR instructor = 'Zara Khan';

UPDATE public.courses
SET instructor = 'M. Ali',
    instructor_role = 'E-Commerce Growth Product Lead'
WHERE id = 'shopify-growth'
   OR instructor = 'Hakamtechsol E-Commerce Lead';