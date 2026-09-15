-- Seed example: How to enter a course with full details so the website renders it fully dynamic.
-- Run migration-v3-courses.sql first, then adapt this example for each course.
-- Format notes:
--   outcomes / tools / industry_trends => JSON array of strings  e.g. '["A","B"]'
--   curriculum => JSON array of objects { "week","title","lessons" }
--   impact_metrics => JSON array of objects { "label","value" }
-- Use single quotes around JSON and escape inner double quotes with "" if needed (standard SQL).

INSERT INTO public.courses (
  course_name,
  program_name,
  category,
  track,
  duration,
  sessions,
  level,
  price,
  discount,
  admission_fee,
  monthly_fee,
  classes_per_week,
  hours_per_class,
  status,
  description,
  overview,
  image_url,
  thumbnail,
  instructor,
  instructor_role,
  outcomes,
  tools,
  curriculum,
  industry_trends,
  impact_headline,
  impact_metrics
) VALUES (
  'Next-Gen Developer',                                  -- course_name (short, shown on card title)
  'Next-Gen Developer: AI Coding & Vibe Coding',        -- program_name (full display name)
  'Development',                                         -- category (filter group: Development / Marketing / E-Commerce / AI & Freelancing)
  'Development Track',                                   -- track (small label on cards)
  '4 Months',                                            -- duration
  '2 Classes/Week | 2 hours/Day',                        -- sessions
  'Advanced',                                            -- level
  1000,                                                  -- price
  0,                                                     -- discount (%)
  1000,                                                  -- admission_fee
  3000,                                                  -- monthly_fee
  2,                                                     -- classes_per_week
  2,                                                     -- hours_per_class
  'published',                                           -- status MUST be 'published' to show on website
  '4-Month Full-Stack Development, AI Coding Workflow & Practical Project Building', -- description (card)
  'A hands-on 4-month cohort designed to turn learners into practical software builders. The program focuses on AI-assisted coding, debugging, deployment, and shipping real projects.', -- overview (detail page)
  '',                                                    -- image_url (optional, fallback to local image)
  '',                                                    -- thumbnail (optional)
  'Hakamtechsol Technical Board',                        -- instructor
  'Enterprise Software Leads',                           -- instructor_role
  '[
    "Build responsive web interfaces with modern frontend workflows.",
    "Use AI tools to generate, explain, and improve production-ready code."
  ]',                                                    -- outcomes (JSON array of strings)
  '[
    "React",
    "API",
    "Database",
    "AI Workflow"
  ]',                                                    -- tools (JSON array of strings)
  '[
    { "week": "Module 01", "title": "Developer & AI Setup", "lessons": ["Modern Development", "GitHub", "AI Development Workflow"] },
    { "week": "Module 02", "title": "Web Foundations", "lessons": ["HTML", "CSS", "Tailwind CSS"] }
  ]',                                                    -- curriculum (JSON array of objects)
  '[
    "AI coding tools are now part of everyday developer workflows.",
    "Full-stack roles expect React, APIs, databases, and deployment fluency."
  ]',                                                    -- industry_trends (JSON array of strings)
  'Learn, Prompt, Generate, Understand, Debug, Improve, and Deploy in 4 Months', -- impact_headline
  '[
    { "value": "4 Months", "label": "Cohort Duration" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" }
  ]'                                                     -- impact_metrics (JSON array of objects)
);