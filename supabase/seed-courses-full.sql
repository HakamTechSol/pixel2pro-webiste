-- Full seed data for ALL courses (from website courses.ts content).
-- Run migration-v3-courses.sql first, then run this file in Supabase SQL Editor.
-- This inserts 4 courses with status='published' so they appear on the website automatically.

-- ============================================================
-- 1. NEXT-GEN DEVELOPER
-- ============================================================
INSERT INTO public.courses (
  course_name, program_name, category, track, duration, sessions, level,
  price, discount, admission_fee, monthly_fee, classes_per_week, hours_per_class, status,
  description, overview, instructor, instructor_role,
  outcomes, tools, curriculum, industry_trends, impact_headline, impact_metrics
) VALUES (
  'Next-Gen Developer',
  'Next-Gen Developer: AI Coding & Vibe Coding',
  'Development',
  'Development Track',
  '4 Months',
  '2 Classes/Week | 2 hours/Day',
  'Advanced',
  1000, 0, 1000, 3000, 2, 2,
  'published',
  '4-Month Full-Stack Development, AI Coding Workflow & Practical Project Building',
  'A hands-on 4-month cohort designed to turn learners into practical software builders. The program focuses on modern development workflows, AI-assisted coding, debugging, deployment, and real-world project shipping so students can learn, prompt, generate, understand, debug, improve, and deploy with confidence.',
  'Hakamtechsol Technical Board',
  'Enterprise Software Leads',
  '[
    "Build responsive web interfaces with modern frontend workflows.",
    "Use AI tools to generate, explain, and improve production-ready code.",
    "Work confidently with JavaScript, React, Express, and APIs.",
    "Connect databases, authentication, and backend logic into real apps.",
    "Debug, refactor, deploy, and present portfolio-grade projects."
  ]',
  '[
    "Frontend UI Systems",
    "API Architectures",
    "Database Engines",
    "AI Workflows",
    "Cloud Pipelines",
    "Version Control"
  ]',
  '[
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
  ]',
  '[
    "AI coding tools are now part of everyday developer workflows.",
    "Full-stack roles increasingly expect React, APIs, databases, and deployment fluency.",
    "Debugging and understanding AI-generated code are becoming must-have skills."
  ]',
  'Learn, Prompt, Generate, Understand, Debug, Improve, and Deploy in 4 Months',
  '[
    { "value": "4 Months", "label": "Cohort Duration" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "AI + Vibe", "label": "Core Focus" }
  ]'
);

-- ============================================================
-- 2. DIGITAL MARKETING
-- ============================================================
INSERT INTO public.courses (
  course_name, program_name, category, track, duration, sessions, level,
  price, discount, admission_fee, monthly_fee, classes_per_week, hours_per_class, status,
  description, overview, instructor, instructor_role,
  outcomes, tools, curriculum, industry_trends, impact_headline, impact_metrics
) VALUES (
  'Digital Marketing',
  'Digital Marketing Mastery Program',
  'Marketing',
  'Marketing Track',
  '3 Months',
  '2 Classes/Week | 2 hours/Day',
  'Intermediate',
  1000, 0, 1000, 3000, 2, 2,
  'published',
  'Meta & Google Ads, Paid Media, Funnels & Performance Growth Strategy',
  'A growth-focused program covering paid media, analytics, content systems, funnels, and repeatable campaign optimization.',
  'Maha Siddiqui',
  'Performance Growth Strategist',
  '[
    "Launch performance campaigns across major channels",
    "Read analytics and improve conversion funnels",
    "Create content calendars and growth experiments",
    "Build a portfolio-ready marketing strategy"
  ]',
  '[
    "Meta Ads",
    "Google Ads",
    "GA4",
    "Canva",
    "Notion",
    "Looker"
  ]',
  '[
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
  ]',
  '[
    "Performance teams are blending creative testing with analytics rigor.",
    "First-party data and conversion tracking quality now define campaign scale.",
    "Growth roles increasingly require full-funnel strategic thinking."
  ]',
  'Turn Data, Creative, and Paid Media Into Measurable Growth',
  '[
    { "value": "3 Months", "label": "Program Length" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "2 Hours/Day", "label": "Class Duration" }
  ]'
);

-- ============================================================
-- 3. AI FOUNDATION AND FREELANCING
-- ============================================================
INSERT INTO public.courses (
  course_name, program_name, category, track, duration, sessions, level,
  price, discount, admission_fee, monthly_fee, classes_per_week, hours_per_class, status,
  description, overview, instructor, instructor_role,
  outcomes, tools, curriculum, industry_trends, impact_headline, impact_metrics
) VALUES (
  'AI Foundation and Freelancing',
  'AI Foundation and Freelancing',
  'AI & Freelancing',
  'AI Track',
  '2 Months',
  '2 Classes/Week | 2 hours/Day',
  'Beginner',
  1000, 0, 1000, 3000, 2, 2,
  'published',
  'AI Tools for Study, Work & Daily Life with Online Earning Guidance',
  'A practical AI foundation course designed for everyone — students, job seekers, working professionals, women (housewives), and daily users. Learn the most popular AI tools for study, office work, content creation, and everyday productivity, with clear guidance on how to use these skills for career growth and online earning.',
  'Zara Khan',
  'AI Tools & Career Guidance Mentor',
  '[
    "Use AI tools confidently in daily life, studies, and work",
    "Write effective prompts for ChatGPT and other AI tools",
    "Create images, videos, and written content with AI",
    "Automate repetitive tasks and save hours every week",
    "Get step-by-step guidance on freelancing and online earning"
  ]',
  '[
    "ChatGPT",
    "AI Image Tools",
    "AI Video Tools",
    "Notion",
    "Canva",
    "Google Workspace"
  ]',
  '[
    { "week": "Week 01", "title": "AI Foundations & Daily Use", "lessons": ["What is AI & how it helps you", "ChatGPT basics", "Prompt writing that works", "AI for daily tasks & studies"] },
    { "week": "Week 02", "title": "AI Tools Mastery", "lessons": ["AI image creation", "AI video & voice tools", "AI writing, translation & summaries", "AI for notes, email & documents"] },
    { "week": "Week 03", "title": "AI for Work & Career", "lessons": ["AI for job seekers: CV & interviews", "AI for office productivity", "AI automation workflows", "AI for students & housewives"] },
    { "week": "Week 04", "title": "Earning & Growth Guidance", "lessons": ["Freelancing & online earning overview", "Building skills with AI", "Secure online earning ideas", "Portfolio & certificate guidance"] }
  ]',
  '[
    "AI tools are now used everywhere — home, school, and office — and everyday users gain the most from mastering them.",
    "Students, job seekers, and housewives who know AI tools save hours daily and stand out in interviews.",
    "Practical guidance beats theory: learners need clear steps to turn AI skills into growth and earning."
  ]',
  'Learn AI Tools That Fit Your Life — Study, Work, Create & Earn',
  '[
    { "value": "2 Months", "label": "Program Length" },
    { "value": "2 Classes/Wk", "label": "Interactive Sessions" },
    { "value": "2 Hours/Day", "label": "Class Duration" }
  ]'
);

-- ============================================================
-- 4. SHOPIFY STORE DEVELOPMENT
-- ============================================================
INSERT INTO public.courses (
  course_name, program_name, category, track, duration, sessions, level,
  price, discount, admission_fee, monthly_fee, classes_per_week, hours_per_class, status,
  description, overview, instructor, instructor_role,
  outcomes, tools, curriculum, industry_trends, impact_headline, impact_metrics
) VALUES (
  'Shopify Store Development',
  'Shopify Store Development & Management',
  'E-Commerce',
  'E-Commerce Track',
  '2 Months',
  '2 Classes/Week',
  'Beginner',
  1000, 0, 1000, 3000, 2, 2,
  'published',
  'E-Commerce Operations, Theme Customization & Guaranteed Internship',
  'The Shopify Store Development & Management Course is a comprehensive training program designed to equip students with the knowledge and practical skills required to build, customize, manage, optimize and launch professional Shopify e-commerce stores. Throughout this two-month course, students will learn every stage of Shopify store development from creating a Shopify account to designing a fully functional online store, integrating payment gateways, optimizing for search engines, implementing marketing strategies, understanding Shopify development basics using Liquid, and preparing a store for launch.',
  'Hakamtechsol E-Commerce Lead',
  'E-Commerce Product Lead',
  '[
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
  ]',
  '[
    "Storefront Architecture",
    "Theme Customization",
    "App Utilities Integration",
    "Payment & Shipping Gates",
    "SEO Metadata Rules",
    "Custom Section Templating"
  ]',
  '[
    { "week": "Module 1", "title": "Shopify Fundamentals", "lessons": ["Introduction to E-commerce & Shopify", "Shopify Account Setup & Dashboard Navigation"] },
    { "week": "Module 2", "title": "Store Setup", "lessons": ["Products & Collections Management", "Navigation & Store Structure"] },
    { "week": "Module 3", "title": "Theme Customization", "lessons": ["Shopify Themes & Branding", "Homepage Design & Mobile Optimization"] },
    { "week": "Module 4", "title": "Apps & Store Functionality", "lessons": ["Shopify Apps Installation", "Payments & Shipping Configuration"] },
    { "week": "Module 5", "title": "Marketing & SEO", "lessons": ["Shopify SEO Optimization", "Marketing Integrations (Facebook, Instagram, Google)"] },
    { "week": "Module 6", "title": "Shopify Development Basics", "lessons": ["Shopify Theme Development Introduction", "Liquid Coding Basics"] },
    { "week": "Module 7", "title": "Store Optimization", "lessons": ["Conversion Optimization", "Analytics & Reporting"] },
    { "week": "Module 8", "title": "Final Project", "lessons": ["Complete Store Build Workshop", "Store Audit & Launch"] }
  ]',
  '[
    "Independent e-commerce storefronts dominate high-margin online brands.",
    "Store performance speed and checkout optimizations directly determine sales yield.",
    "Understanding theme custom adjustments is highly demanded by digital marketing agencies."
  ]',
  'Master Shopify Store Development & Launch Your E-Commerce Career',
  '[
    { "value": "2 Months", "label": "Cohort Duration" },
    { "value": "16 Classes", "label": "Total Interactive Labs" },
    { "value": "Internship", "label": "Hakamtechsol Project" }
  ]'
);