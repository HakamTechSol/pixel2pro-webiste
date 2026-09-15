-- Migration v5: Rich course columns + backfill existing rows with static website content.
-- Run ONCE in Supabase Dashboard -> SQL Editor.
-- Idempotent: safe to run again.
-- NOTE: Only the 4 existing rows (matched by course_name) are UPDATED in place — no duplicates.

-- 1) Rich display/content columns (same as migration-v3, idempotent)
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

-- ============================================================
-- 2) Backfill: Next-Gen Developer
-- ============================================================
UPDATE public.courses SET
  program_name = 'Next-Gen Developer: AI Coding & Vibe Coding',
  category = 'Development',
  track = 'Development Track',
  duration = '4 Months',
  sessions = '2 Classes/Week | 2 hours/Day',
  level = 'Advanced',
  price = 1000, discount = 0, admission_fee = 1000, monthly_fee = 3000,
  classes_per_week = 2, hours_per_class = 2, status = 'published',
  description = '4-Month Full-Stack Development, AI Coding Workflow & Practical Project Building',
  overview = 'A hands-on 4-month cohort designed to turn learners into practical software builders. The program focuses on modern development workflows, AI-assisted coding, debugging, deployment, and real-world project shipping so students can learn, prompt, generate, understand, debug, improve, and deploy with confidence.',
  instructor = 'Hakamtechsol Technical Board',
  instructor_role = 'Enterprise Software Leads',
  outcomes = '[
    "Build responsive web interfaces with modern frontend workflows.",
    "Use AI tools to generate, explain, and improve production-ready code.",
    "Work confidently with JavaScript, React, Express, and APIs.",
    "Connect databases, authentication, and backend logic into real apps.",
    "Debug, refactor, deploy, and present portfolio-grade projects."
  ]'::jsonb,
  tools = '[
    "Frontend UI Systems",
    "API Architectures",
    "Database Engines",
    "AI Workflows",
    "Cloud Pipelines",
    "Version Control"
  ]'::jsonb,
  curriculum = '[
    { "week": "Module 01", "title": "Developer & AI Setup", "lessons": ["Modern Development", "VS Code & GitHub", "AI Development Workflow", "Developer Tools"] },
    { "week": "Module 02", "title": "Web Foundations", "lessons": ["HTML", "CSS", "Tailwind CSS", "Responsive UI", "Components & UI Structure"] },
    { "week": "Module 03", "title": "AI Coding & Vibe Coding", "lessons": ["What is Vibe Coding", "Prompt Engineering for Developers", "AI Coding Workflow", "Cursor AI", "GitHub Copilot", "OpenAI Codex", "Replit & AI IDEs", "Understanding AI-Generated Code"] },
    { "week": "Module 04", "title": "JavaScript Essentials", "lessons": ["JavaScript Basics", "Functions, Arrays & Objects", "JSON & Fetch API", "Async & Error Handling", "Using AI to Write & Explain Code"] },
    { "week": "Module 05", "title": "React + Backend", "lessons": ["React Components & State", "Routing", "Express.js", "REST APIs", "CRUD", "Frontend + Backend Integration", "Build with AI"] },
    { "week": "Module 06", "title": "Databases & Authentication", "lessons": ["SQL vs NoSQL", "MySQL Basics", "MongoDB Basics", "Supabase", "Authentication", "Database Integration with AI"] },
    { "week": "Module 07", "title": "Python for AI", "lessons": ["Python Fundamentals", "Functions, Lists & Dictionaries", "Reading AI/Python Code", "AI-Assisted Python Development", "APIs Introduction"] },
    { "week": "Module 08", "title": "AI Development Workflow", "lessons": ["AI Debugging", "Prompt-Based Debugging", "Refactoring with AI", "Browser DevTools", "Network & API Debugging", "Performance Optimization"] },
    { "week": "Module 09", "title": "Real-World Projects", "lessons": ["SaaS Dashboard", "Admin Panel", "Booking System", "AI-Powered Web App", "Portfolio Website"] },
    { "week": "Module 10", "title": "GitHub, Deployment & Portfolio", "lessons": ["Git & GitHub Workflow", "Vercel / Netlify", "Live Deployment", "GitHub Portfolio", "Professional Developer Portfolio"] }
  ]'::jsonb,
  industry_trends = '[
    "AI coding tools are now part of everyday developer workflows.",
    "Full-stack roles increasingly expect React, APIs, databases, and deployment fluency.",
    "Debugging and understanding AI-generated code are becoming must-have skills."
  ]'::jsonb,
  impact_headline = 'Learn, Prompt, Generate, Understand, Debug, Improve, and Deploy in 4 Months',
  impact_metrics = '[
    { "value": "4 Months", "label": "Cohort Duration" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "AI + Vibe", "label": "Core Focus" }
  ]'::jsonb
WHERE course_name = 'Next-Gen Developer: AI Coding & Vibe Coding';

-- ============================================================
-- 3) Backfill: AI Foundation and Freelancing
-- ============================================================
UPDATE public.courses SET
  program_name = 'AI Foundation and Freelancing',
  category = 'AI & Freelancing',
  track = 'AI Track',
  duration = '2 Months',
  sessions = '2 Classes/Week | 2 hours/Day',
  level = 'Beginner',
  price = 1000, discount = 0, admission_fee = 1000, monthly_fee = 3000,
  classes_per_week = 2, hours_per_class = 2, status = 'published',
  description = 'AI Tools for Study, Work & Daily Life with Online Earning Guidance',
  overview = 'A practical AI foundation course designed for everyone — students, job seekers, working professionals, women (housewives), and daily users. Learn the most popular AI tools for study, office work, content creation, and everyday productivity, with clear guidance on how to use these skills for career growth and online earning.',
  instructor = 'Zara Khan',
  instructor_role = 'AI Tools & Career Guidance Mentor',
  outcomes = '[
    "Use AI tools confidently in daily life, studies, and work",
    "Write effective prompts for ChatGPT and other AI tools",
    "Create images, videos, and written content with AI",
    "Automate repetitive tasks and save hours every week",
    "Get step-by-step guidance on freelancing and online earning"
  ]'::jsonb,
  tools = '[
    "ChatGPT",
    "AI Image Tools",
    "AI Video Tools",
    "Notion",
    "Canva",
    "Google Workspace"
  ]'::jsonb,
  curriculum = '[
    { "week": "Week 01", "title": "AI Foundations & Daily Use", "lessons": ["What is AI & how it helps you", "ChatGPT basics", "Prompt writing that works", "AI for daily tasks & studies"] },
    { "week": "Week 02", "title": "AI Tools Mastery", "lessons": ["AI image creation", "AI video & voice tools", "AI writing, translation & summaries", "AI for notes, email & documents"] },
    { "week": "Week 03", "title": "AI for Work & Career", "lessons": ["AI for job seekers: CV & interviews", "AI for office productivity", "AI automation workflows", "AI for students & housewives"] },
    { "week": "Week 04", "title": "Earning & Growth Guidance", "lessons": ["Freelancing & online earning overview", "Building skills with AI", "Secure online earning ideas", "Portfolio & certificate guidance"] }
  ]'::jsonb,
  industry_trends = '[
    "AI tools are now used everywhere — home, school, and office — and everyday users gain the most from mastering them.",
    "Students, job seekers, and housewives who know AI tools save hours daily and stand out in interviews.",
    "Practical guidance beats theory: learners need clear steps to turn AI skills into growth and earning."
  ]'::jsonb,
  impact_headline = 'Learn AI Tools That Fit Your Life — Study, Work, Create & Earn',
  impact_metrics = '[
    { "value": "2 Months", "label": "Program Length" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "2 Hours/Day", "label": "Class Duration" }
  ]'::jsonb
WHERE course_name = 'AI Foundation and Freelancing';

-- ============================================================
-- 4) Backfill: Digital Marketing
-- ============================================================
UPDATE public.courses SET
  program_name = 'Digital Marketing Mastery Program',
  category = 'Marketing',
  track = 'Marketing Track',
  duration = '3 Months',
  sessions = '2 Classes/Week | 2 hours/Day',
  level = 'Intermediate',
  price = 1000, discount = 0, admission_fee = 1000, monthly_fee = 3000,
  classes_per_week = 2, hours_per_class = 2, status = 'published',
  description = 'Meta & Google Ads, Paid Media, Funnels & Performance Growth Strategy',
  overview = 'A growth-focused program covering paid media, analytics, content systems, funnels, and repeatable campaign optimization.',
  instructor = 'Maha Siddiqui',
  instructor_role = 'Performance Growth Strategist',
  outcomes = '[
    "Launch performance campaigns across major channels",
    "Read analytics and improve conversion funnels",
    "Create content calendars and growth experiments",
    "Build a portfolio-ready marketing strategy"
  ]'::jsonb,
  tools = '[
    "Meta Ads",
    "Google Ads",
    "GA4",
    "Canva",
    "Notion",
    "Looker"
  ]'::jsonb,
  curriculum = '[
    { "week": "Module 1", "title": "Success Mindset in Digital Marketing", "lessons": ["Mindset Development", "Goal Setting", "Success Habits"] },
    { "week": "Module 2", "title": "Startup Planning & Business Strategy", "lessons": ["Business Planning", "Market Research", "Strategy Development"] },
    { "week": "Module 3", "title": "Digital Marketing Foundations", "lessons": ["Marketing Basics", "Customer Journey", "Brand Positioning"] },
    { "week": "Module 4", "title": "E-Commerce Mastery", "lessons": ["Online Store Setup", "Product Strategy", "Sales Optimization"] },
    { "week": "Module 5", "title": "Social Media Marketing Strategies", "lessons": ["Platform Strategy", "Content Creation", "Community Building"] },
    { "week": "Module 6", "title": "Meta Ads Mastery", "lessons": ["Campaign Setup", "Targeting", "Ad Creative", "Optimization"] },
    { "week": "Module 7", "title": "LinkedIn Marketing & Lead Generation", "lessons": ["Profile Optimization", "Content Strategy", "Lead Generation"] },
    { "week": "Module 8", "title": "Google Ads", "lessons": ["Search Ads", "Display Ads", "Performance Tracking"] },
    { "week": "Module 9", "title": "YouTube Ads", "lessons": ["Video Advertising", "Campaign Setup", "Analytics"] },
    { "week": "Module 10", "title": "Freelancing", "lessons": ["Freelance Platforms", "Service Packaging", "Client Management"] }
  ]'::jsonb,
  industry_trends = '[
    "Performance teams are blending creative testing with analytics rigor.",
    "First-party data and conversion tracking quality now define campaign scale.",
    "Growth roles increasingly require full-funnel strategic thinking."
  ]'::jsonb,
  impact_headline = 'Turn Data, Creative, and Paid Media Into Measurable Growth',
  impact_metrics = '[
    { "value": "3 Months", "label": "Program Length" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "2 Hours/Day", "label": "Class Duration" }
  ]'::jsonb
WHERE course_name = 'Digital Marketing Mastery Program';

-- ============================================================
-- 5) Backfill: Shopify Store Development
-- ============================================================
UPDATE public.courses SET
  program_name = 'Shopify Store Development & Management',
  category = 'E-Commerce',
  track = 'E-Commerce Track',
  duration = '2 Months',
  sessions = '2 Classes/Week',
  level = 'Beginner',
  price = 1000, discount = 0, admission_fee = 1000, monthly_fee = 3000,
  classes_per_week = 2, hours_per_class = 2, status = 'published',
  description = 'E-Commerce Operations, Theme Customization & Guaranteed Internship',
  overview = 'The Shopify Store Development & Management Course is a comprehensive training program designed to equip students with the knowledge and practical skills required to build, customize, manage, optimize and launch professional Shopify e-commerce stores. Throughout this two-month course, students will learn every stage of Shopify store development from creating a Shopify account to designing a fully functional online store, integrating payment gateways, optimizing for search engines, implementing marketing strategies, understanding Shopify development basics using Liquid, and preparing a store for launch.',
  instructor = 'Hakamtechsol E-Commerce Lead',
  instructor_role = 'E-Commerce Product Lead',
  outcomes = '[
    "Understand the fundamentals of e-commerce and online business.",
    "Create and configure a Shopify store from scratch.",
    "Add and organize products efficiently.",
    "Design professional and responsive Shopify stores.",
    "Customize Shopify themes without affecting performance.",
    "Install and configure essential Shopify applications.",
    "Configure payment gateways and shipping settings.",
    "Optimize Shopify stores for search engines (SEO).",
    "Integrate marketing platforms such as Facebook, Instagram, and Google Merchant Center.",
    "Understand Shopify theme architecture and basic Liquid programming.",
    "Analyze store performance using Shopify and Google Analytics.",
    "Optimize stores for higher conversion rates.",
    "Launch a fully functional Shopify store.",
    "Build a professional portfolio suitable for freelancing or employment."
  ]'::jsonb,
  tools = '[
    "Storefront Architecture",
    "Theme Customization",
    "App Utilities Integration",
    "Payment & Shipping Gates",
    "SEO Metadata Rules",
    "Custom Section Templating"
  ]'::jsonb,
  curriculum = '[
    { "week": "Module 1", "title": "Shopify Fundamentals", "lessons": ["Introduction to E-commerce & Shopify", "Shopify Account Setup & Dashboard Navigation"] },
    { "week": "Module 2", "title": "Store Setup", "lessons": ["Products & Collections Management", "Navigation & Store Structure"] },
    { "week": "Module 3", "title": "Theme Customization", "lessons": ["Shopify Themes & Branding", "Homepage Design & Mobile Optimization"] },
    { "week": "Module 4", "title": "Apps & Store Functionality", "lessons": ["Shopify Apps Installation", "Payments & Shipping Configuration"] },
    { "week": "Module 5", "title": "Marketing & SEO", "lessons": ["Shopify SEO Optimization", "Marketing Integrations (Facebook, Instagram, Google)"] },
    { "week": "Module 6", "title": "Shopify Development Basics", "lessons": ["Shopify Theme Development Introduction", "Liquid Coding Basics"] },
    { "week": "Module 7", "title": "Store Optimization", "lessons": ["Conversion Optimization", "Analytics & Reporting"] },
    { "week": "Module 8", "title": "Final Project", "lessons": ["Complete Store Build Workshop", "Store Audit & Launch"] }
  ]'::jsonb,
  industry_trends = '[
    "Independent e-commerce storefronts dominate high-margin online brands.",
    "Store performance speed and checkout optimizations directly determine sales yield.",
    "Understanding theme custom adjustments is highly demanded by digital marketing agencies."
  ]'::jsonb,
  impact_headline = 'Master Shopify Store Development & Launch Your E-Commerce Career',
  impact_metrics = '[
    { "value": "2 Months", "label": "Cohort Duration" },
    { "value": "16 Classes", "label": "Total Interactive Labs" },
    { "value": "Internship", "label": "Hakamtechsol Project" }
  ]'::jsonb
WHERE course_name = 'Shopify Store Development & Management';