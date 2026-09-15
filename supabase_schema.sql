-- Supabase Database Schema for Pixel2Pro
-- Copy and paste this script directly into the SQL Editor in your Supabase Dashboard to set up your tables.
-- Note: Row Level Security (RLS) is disabled by default below to allow direct public insertions from contact, feedback, and enrollment forms.

-- =========================================================================
-- 1. ENROLLMENTS TABLE
-- =========================================================================
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    full_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    city_country TEXT NOT NULL,
    current_professional_profile TEXT NOT NULL,
    exact_program TEXT NOT NULL,
    email TEXT NOT NULL,
    government_id TEXT,
    terms_privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    source_track_id TEXT NOT NULL
);

-- Disable RLS (Row Level Security) to allow public form registration submissions
ALTER TABLE enrollments DISABLE ROW LEVEL SECURITY;


-- =========================================================================
-- 2. CONTACTS TABLE
-- =========================================================================
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL
);

-- If the contacts table already exists, run this to add the new phone field safely.
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS phone TEXT;

-- Disable RLS to allow public form contact submissions
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;


-- =========================================================================
-- 3. FEEDBACKS TABLE (TESTIMONIALS)
-- =========================================================================
CREATE TABLE IF NOT EXISTS feedbacks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    track TEXT NOT NULL,
    story TEXT NOT NULL,
    approved BOOLEAN NOT NULL DEFAULT TRUE
);

-- Disable RLS to allow public submissions and reading of feedback testimonials
ALTER TABLE feedbacks DISABLE ROW LEVEL SECURITY;
