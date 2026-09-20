import aiWorkflowLogo from "@/assets/program-images/Ai Workflow.png";
import amazonLogo from "@/assets/program-images/amazon-removebg-preview.png";
import apiLogo from "@/assets/program-images/API-removebg-preview.png";
import csharpLogo from "@/assets/program-images/c-sharp.png";
import dotnetLogo from "@/assets/program-images/dotnet-removebg-preview.png";
import ecommerceLogo from "@/assets/program-images/ecommers-removebg-preview.png";
import expressLogo from "@/assets/program-images/express_js-removebg-preview.png";
import googleAdsLogo from "@/assets/program-images/Google-AdWords-logo-rectangle.png";
import graphicDesignLogo from "@/assets/program-images/graphic-design-removebg-preview.png";
import htmlLogo from "@/assets/program-images/HTML-5-Badge-Logo.png";
import makeLogo from "@/assets/program-images/Make-No-Code-DataScientest-removebg-preview.png";
import metaAdsLogo from "@/assets/program-images/meta ad .png";
import mongoLogo from "@/assets/program-images/mongo-removebg-preview.png";
import nodeLogo from "@/assets/program-images/node_js-removebg-preview.png";
import promptLogo from "@/assets/program-images/prompt-engineering-logo.png";
import pythonLogo from "@/assets/program-images/python-removebg-preview.png";
import reactLogo from "@/assets/program-images/React-removebg-preview.png";
import shopifyLogo from "@/assets/program-images/shopify-removebg-preview.png";
import socialMarketingLogo from "@/assets/program-images/social-media-marketing-removebg-preview.png";
import tiktokLogo from "@/assets/program-images/tiktok-advertising.png";
import type { FeePlan } from "@/lib/fee-plans";

export interface Course {
  id: string;
  number: string;
  track: string;
  title: string;
  programName: string;
  description: string;
  category: string;
  duration: string;
  sessions: string;
  level: string;
  price: number;
  admissionFee?: number;
  monthlyFee?: number;
  itDiscountMonthlyFee?: number;
  itDiscountRegistrationFee?: number;
  feePlans: FeePlan[];
  showOnHome?: boolean;
  homeOrder?: number;
  image: string;
  instructor: string;
  instructorRole: string;
  overview: string;
  outcomes: string[];
  tools: string[];
  toolLogos: { name: string; image: string }[];
  curriculum: { week: string; title: string; lessons: string[] }[];
  industryTrends: string[];
  impactHeadline: string;
  impactMetrics: { label: string; value: string }[];
  defaultProfile: string;
}

export const professionalProfiles = [
  "Student (CS / IT / Engineering)",
  "Student (Non-Tech / Business / Arts)",
  "Working Professional (Developer / Marketer / Corporate Employee)",
  "Freelancer / Remote Operator",
  "Business Owner / Agency Founder",
  "Teacher / Educator / Academic Administrator",
  "Unemployed / Seeking Transition",
];

export const courses: Course[] = [
  {
    id: "next-gen-developer",
    number: "01",
    track: "Development Track",
    title: "Next-Gen Developer",
    programName: "Next-Gen Developer: AI Coding & Vibe Coding",
    description: "4-Month Full-Stack Development, AI Coding Workflow & Practical Project Building",
    category: "Development",
    duration: "4 Months",
    sessions: "2 Classes/Week | 2 hours/Day",
    level: "Advanced",
    price: 25000,
    feePlans: [
      {
        id: "monthly",
        type: "monthly",
        title: "Monthly Fee",
        totalFee: 25000,
        registrationFee: 5000,
        monthlyFee: 5000,
        months: 4,
      },
      {
        id: "lump-sum",
        type: "lump-sum",
        title: "One-Time Payment",
        totalFee: 16000,
        registrationFee: 0,
        badge: "Best Value",
        note: "No registration fee",
      },
      {
        id: "installment",
        type: "installment",
        title: "2 Installments",
        totalFee: 18000,
        registrationFee: 2000,
        badge: "Flexible",
        installments: [
          { label: "Before course starts", amount: 10000, note: "Course fee 8,000 + registration 2,000" },
          { label: "Start of 2nd month", amount: 8000 },
        ],
      },
    ],
    image: "/p2p/nextGen.jpeg",
    instructor: "Hunain Haider",
    instructorRole: "Full-Stack Developer & AI Instructor",
    overview:
      "A hands-on 4-month cohort designed to turn learners into practical software builders. The program focuses on modern development workflows, AI-assisted coding, debugging, deployment, and real-world project shipping so students can learn, prompt, generate, understand, debug, improve, and deploy with confidence.",
    outcomes: [
      "Build responsive web interfaces with modern frontend workflows.",
      "Use AI tools to generate, explain, and improve production-ready code.",
      "Work confidently with JavaScript, React, Express, and APIs.",
      "Connect databases, authentication, and backend logic into real apps.",
      "Debug, refactor, deploy, and present portfolio-grade projects."
    ],
    tools: [
      "Frontend UI Systems",
      "API Architectures",
      "Database Engines",
      "AI Workflows",
      "Cloud Pipelines",
      "Version Control"
    ],
    toolLogos: [
      { name: "Frontend UI", image: reactLogo },
      { name: "API", image: apiLogo },
      { name: "Database", image: mongoLogo },
      { name: "AI Workflow", image: aiWorkflowLogo },
      { name: "Cloud Pipelines", image: makeLogo },
    ],
    curriculum: [
      {
        week: "Module 01",
        title: "Developer & AI Setup",
        lessons: [
          "Modern Development",
          "VS Code & GitHub",
          "AI Development Workflow",
          "Developer Tools"
        ]
      },
      {
        week: "Module 02",
        title: "Web Foundations",
        lessons: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Responsive UI",
          "Components & UI Structure"
        ]
      },
      {
        week: "Module 03",
        title: "AI Coding & Vibe Coding",
        lessons: [
          "What is Vibe Coding",
          "Prompt Engineering for Developers",
          "AI Coding Workflow",
          "Cursor AI",
          "GitHub Copilot",
          "OpenAI Codex",
          "Replit & AI IDEs",
          "Understanding AI-Generated Code"
        ]
      },
      {
        week: "Module 04",
        title: "JavaScript Essentials",
        lessons: [
          "JavaScript Basics",
          "Functions, Arrays & Objects",
          "JSON & Fetch API",
          "Async & Error Handling",
          "Using AI to Write & Explain Code"
        ]
      },
      {
        week: "Module 05",
        title: "React + Backend",
        lessons: [
          "React Components & State",
          "Routing",
          "Express.js",
          "REST APIs",
          "CRUD",
          "Frontend + Backend Integration",
          "Build with AI"
        ]
      },
      {
        week: "Module 06",
        title: "Databases & Authentication",
        lessons: [
          "SQL vs NoSQL",
          "MySQL Basics",
          "MongoDB Basics",
          "Supabase",
          "Authentication",
          "Database Integration with AI"
        ]
      },
      {
        week: "Module 07",
        title: "Python for AI",
        lessons: [
          "Python Fundamentals",
          "Functions, Lists & Dictionaries",
          "Reading AI/Python Code",
          "AI-Assisted Python Development",
          "APIs Introduction"
        ]
      },
      {
        week: "Module 08",
        title: "AI Development Workflow",
        lessons: [
          "AI Debugging",
          "Prompt-Based Debugging",
          "Refactoring with AI",
          "Browser DevTools",
          "Network & API Debugging",
          "Performance Optimization"
        ]
      },
      {
        week: "Module 09",
        title: "Real-World Projects",
        lessons: [
          "SaaS Dashboard",
          "Admin Panel",
          "Booking System",
          "AI-Powered Web App",
          "Portfolio Website"
        ]
      },
      {
        week: "Module 10",
        title: "GitHub, Deployment & Portfolio",
        lessons: [
          "Git & GitHub Workflow",
          "Vercel / Netlify",
          "Live Deployment",
          "GitHub Portfolio",
          "Professional Developer Portfolio"
        ]
      }
    ],
    industryTrends: [
      "AI coding tools are now part of everyday developer workflows.",
      "Full-stack roles increasingly expect React, APIs, databases, and deployment fluency.",
      "Debugging and understanding AI-generated code are becoming must-have skills."
    ],
    impactHeadline: "Learn, Prompt, Generate, Understand, Debug, Improve, and Deploy in 4 Months",
    impactMetrics: [
      { value: "4 Months", label: "Cohort Duration" },
      { value: "2 Classes/Wk", label: "Interactive Sessions" },
      { value: "AI + Vibe", label: "Core Focus" }
    ],
    defaultProfile: "Student (CS / IT / Engineering)"
  },
  {
    id: "digital-marketing",
    number: "02",
    track: "Marketing Track",
    title: "Digital Marketing",
    programName: "Digital Marketing Mastery Program",
    description: "Meta & Google Ads, Paid Media, Funnels & Performance Growth Strategy",
    category: "Marketing",
    duration: "3 Months",
    sessions: "2 Classes/Week | 2 hours/Day",
    level: "Intermediate",
    price: 20000,
    feePlans: [
      {
        id: "monthly",
        type: "monthly",
        title: "Monthly Fee",
        totalFee: 20000,
        registrationFee: 5000,
        monthlyFee: 5000,
        months: 3,
      },
      {
        id: "lump-sum",
        type: "lump-sum",
        title: "One-Time Payment",
        totalFee: 12000,
        registrationFee: 0 ,
        badge: "Best Value",
        note: "No registration fee",
      },
      {
        id: "installment",
        type: "installment",
        title: "2 Installments",
        totalFee: 16000,
        registrationFee: 2000,
        badge: "Flexible",
        installments: [
          { label: "Before course starts", amount: 9000 },
          { label: "Start of 2nd month", amount: 7000 },
        ],
      },
    ],
    image: "/p2p/digitalmarketing.jpeg",
    instructor: "M Junaid Shahid",
    instructorRole: "Digital Marketing & AI Skills Trainer",
    overview:
      "A growth-focused program covering paid media, analytics, content systems, funnels, and repeatable campaign optimization.",
    outcomes: [
      "Launch performance campaigns across major channels",
      "Read analytics and improve conversion funnels",
      "Create content calendars and growth experiments",
      "Build a portfolio-ready marketing strategy",
    ],
    tools: ["Meta Ads", "Google Ads", "GA4", "Canva", "Notion", "Looker"],
    toolLogos: [
      { name: "Meta Ads", image: metaAdsLogo },
      { name: "Google Ads", image: googleAdsLogo },
      { name: "Social Marketing", image: socialMarketingLogo },
      { name: "TikTok Ads", image: tiktokLogo },
      { name: "Make", image: makeLogo },
    ],
    curriculum: [
      { week: "Module 1", title: "Success Mindset in Digital Marketing", lessons: ["Mindset Development", "Goal Setting", "Success Habits"] },
      { week: "Module 2", title: "Startup Planning & Business Strategy", lessons: ["Business Planning", "Market Research", "Strategy Development"] },
      { week: "Module 3", title: "Digital Marketing Foundations", lessons: ["Marketing Basics", "Customer Journey", "Brand Positioning"] },
      { week: "Module 4", title: "E-Commerce Mastery", lessons: ["Online Store Setup", "Product Strategy", "Sales Optimization"] },
      { week: "Module 5", title: "Social Media Marketing Strategies", lessons: ["Platform Strategy", "Content Creation", "Community Building"] },
      { week: "Module 6", title: "Meta Ads Mastery (Facebook & Instagram Advertising)", lessons: ["Campaign Setup", "Targeting", "Ad Creative", "Optimization"] },
      { week: "Module 7", title: "LinkedIn Marketing & Lead Generation", lessons: ["Profile Optimization", "Content Strategy", "Lead Generation"] },
      { week: "Module 8", title: "Google Ads", lessons: ["Search Ads", "Display Ads", "Performance Tracking"] },
      { week: "Module 9", title: "YouTube Ads", lessons: ["Video Advertising", "Campaign Setup", "Analytics"] },
      { week: "Module 10", title: "Freelancing", lessons: ["Freelance Platforms", "Service Packaging", "Client Management"] },
      { week: "Module 11", title: "Client Acquisition & Personal Branding System", lessons: ["Personal Branding", "Outreach Strategy", "Client Acquisition"] },
    ],
    industryTrends: [
      "Performance teams are blending creative testing with analytics rigor.",
      "First-party data and conversion tracking quality now define campaign scale.",
      "Growth roles increasingly require full-funnel strategic thinking.",
    ],
    impactHeadline: "Turn Data, Creative, and Paid Media Into Measurable Growth",
    impactMetrics: [
      { value: "3 Months", label: "Program Length" },
      { value: "2 Classes/Wk", label: "Interactive Sessions" },
      { value: "2 Hours/Day", label: "Class Duration" },
    ],
    defaultProfile: "Working Professional (Developer / Marketer / Corporate Employee)"
  },
  {
    id: "ai-freelancing",
    number: "03",
    track: "AI Track",
    title: "AI Foundation & Freelancing",
    programName: "AI Foundation & Freelancing",
    description: "AI Tools for Study, Work & Daily Life with Online Earning Guidance",
    category: "AI & Freelancing",
    duration: "2 Months",
    sessions: "2 Classes/Week | 2 hours/Day",
    level: "Beginner",
    price: 15000,
    feePlans: [
      {
        id: "monthly",
        type: "monthly",
        title: "Monthly Fee",
        totalFee: 15000,
        registrationFee: 5000,
        monthlyFee: 5000,
        months: 2,
      },
      {
        id: "lump-sum",
        type: "lump-sum",
        title: "One-Time Payment",
        totalFee: 8000,
        registrationFee: 0,
        badge: "Best Value",
        note: "No registration fee",
      },
    ],
    image: "/p2p/AIfrelancing.jpeg",
    instructor: "Arbaz Ali",
    instructorRole: "Senior Software Developer & AI Foundation Mentor",
    overview:
      "A practical AI foundation course designed for everyone — students, job seekers, working professionals, women (housewives), and daily users. Learn the most popular AI tools for study, office work, content creation, and everyday productivity, with clear guidance on how to use these skills for career growth and online earning.",
    outcomes: [
      "Use AI tools confidently in daily life, studies, and work",
      "Write effective prompts for ChatGPT and other AI tools",
      "Create images, videos, and written content with AI",
      "Automate repetitive tasks and save hours every week",
      "Get step-by-step guidance on freelancing and online earning",
    ],
    tools: ["ChatGPT", "AI Image Tools", "AI Video Tools", "Notion", "Canva", "Google Workspace"],
    toolLogos: [
      { name: "AI Workflow", image: aiWorkflowLogo },
      { name: "Prompt Engineering", image: promptLogo },
      { name: "Python", image: pythonLogo },
      { name: "No-Code Automation", image: makeLogo },
    ],
    curriculum: [
      { week: "Week 01", title: "AI Foundations & Daily Use", lessons: ["What is AI & how it helps you", "ChatGPT basics", "Prompt writing that works", "AI for daily tasks & studies"] },
      { week: "Week 02", title: "AI Tools Mastery", lessons: ["AI image creation", "AI video & voice tools", "AI writing, translation & summaries", "AI for notes, email & documents"] },
      { week: "Week 03", title: "AI for Work & Career", lessons: ["AI for job seekers: CV & interviews", "AI for office productivity", "AI automation workflows", "AI for students & housewives"] },
      { week: "Week 04", title: "Earning & Growth Guidance", lessons: ["Freelancing & online earning overview", "Building skills with AI", "Secure online earning ideas", "Portfolio & certificate guidance"] },
    ],
    industryTrends: [
      "AI tools are now used everywhere — home, school, and office — and everyday users gain the most from mastering them.",
      "Students, job seekers, and housewives who know AI tools save hours daily and stand out in interviews.",
      "Practical guidance beats theory: learners need clear steps to turn AI skills into growth and earning.",
    ],
    impactHeadline: "Learn AI Tools That Fit Your Life — Study, Work, Create & Earn",
    impactMetrics: [
      { value: "2 Months", label: "Program Length" },
      { value: "2 Classes/Wk", label: "Interactive Sessions" },
      { value: "2 Hours/Day", label: "Class Duration" },
    ],
    defaultProfile: "Student / Job Seeker / Daily User"
  },
  {
    id: "shopify-growth",
    number: "04",
    track: "E-Commerce Track",
    title: "Shopify Store Development",
    programName: "Shopify Store Development & Management",
    description: "E-Commerce Operations, Theme Customization & Guaranteed Internship",
    category: "E-Commerce",
    duration: "2 Months",
    sessions: "2 Classes/Week",
    level: "Beginner",
    price: 15000,
    feePlans: [
      {
        id: "monthly",
        type: "monthly",
        title: "Monthly Fee",
        totalFee: 15000,
        registrationFee: 5000,
        monthlyFee: 5000,
        months: 2,
      },
      {
        id: "lump-sum",
        type: "lump-sum",
        title: "One-Time Payment",
        totalFee: 8000,
        registrationFee: 0,
        badge: "Best Value",
        note: "No registration fee",
      },
    ],
    image: "/p2p/shopify.jpeg",
    instructor: "M. Ali",
    instructorRole: "E-Commerce Growth Product Lead",
    overview:
      "The Shopify Store Development & Management Course is a comprehensive training program designed to equip students with the knowledge and practical skills required to build, customize, manage, optimize and launch professional Shopify e-commerce stores. Throughout this two-month course, students will learn every stage of Shopify store development from creating a Shopify account to designing a fully functional online store, integrating payment gateways, optimizing for search engines, implementing marketing strategies, understanding Shopify development basics using Liquid, and preparing a store for launch.",
    outcomes: [
      "Understand the fundamentals of e-commerce and online business.",
      "Create and configure a Shopify store from scratch.",
      "Add and organize products efficiently.",
      "Design professional and responsive Shopify stores.",
      "Customize Shopify themes without affecting performance.",
      "Install and configure essential Shopify applications.",
      "Configure payment gateways and shipping settings.",
      "Optimize Shopify stores for search engines (SEO).",
      "Integrate marketing platforms such as Facebook, Instagram, Google Merchant Center, and email marketing tools.",
      "Understand Shopify theme architecture and basic Liquid programming.",
      "Analyze store performance using Shopify Analytics and Google Analytics.",
      "Optimize stores for higher conversion rates.",
      "Launch a fully functional Shopify store.",
      "Build a professional portfolio suitable for freelancing or employment."
    ],
    tools: [
      "Storefront Architecture",
      "Theme Customization",
      "App Utilities Integration",
      "Payment & Shipping Gates",
      "SEO Metadata Rules",
      "Custom Section Templating"
    ],
    toolLogos: [
      { name: "Shopify", image: shopifyLogo },
      { name: "Make", image: makeLogo }
    ],
    curriculum: [
      {
        week: "Module 1",
        title: "Shopify Fundamentals",
        lessons: [
          "Introduction to E-commerce & Shopify",
          "Shopify Account Setup & Dashboard Navigation"
        ]
      },
      {
        week: "Module 2",
        title: "Store Setup",
        lessons: [
          "Products & Collections Management",
          "Navigation & Store Structure"
        ]
      },
      {
        week: "Module 3",
        title: "Theme Customization",
        lessons: [
          "Shopify Themes & Branding",
          "Homepage Design & Mobile Optimization"
        ]
      },
      {
        week: "Module 4",
        title: "Apps & Store Functionality",
        lessons: [
          "Shopify Apps Installation",
          "Payments & Shipping Configuration"
        ]
      },
      {
        week: "Module 5",
        title: "Marketing & SEO",
        lessons: [
          "Shopify SEO Optimization",
          "Marketing Integrations (Facebook, Instagram, Google)"
        ]
      },
      {
        week: "Module 6",
        title: "Shopify Development Basics",
        lessons: [
          "Shopify Theme Development Introduction",
          "Liquid Coding Basics"
        ]
      },
      {
        week: "Module 7",
        title: "Store Optimization",
        lessons: [
          "Conversion Optimization",
          "Analytics & Reporting"
        ]
      },
      {
        week: "Module 8",
        title: "Final Project",
        lessons: [
          "Complete Store Build Workshop",
          "Store Audit & Launch"
        ]
      }
    ],
    industryTrends: [
      "Independent e-commerce storefronts dominate high-margin online brands.",
      "Store performance speed and checkout optimizations directly determine sales yield.",
      "Understanding theme custom adjustments is highly demanded by digital marketing agencies."
    ],
    impactHeadline: "Master Shopify Store Development & Launch Your E-Commerce Career",
    impactMetrics: [
      { value: "2 Months", label: "Cohort Duration" },
      { value: "16 Classes", label: "Total Interactive Labs" },
      { value: "Internship", label: "Hakamtechsol Project" }
    ],
    defaultProfile: "Freelancer / Remote Operator"
  },
  ];

export const categories = ["All", "Development", "Marketing", "E-Commerce", "AI & Freelancing"];

