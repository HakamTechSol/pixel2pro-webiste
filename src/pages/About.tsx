import { Target, Eye, BookOpen, Users } from "lucide-react";
import Layout from "@/components/Layout";
import aboutHero from "@/assets/about-hero.jpg";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Sarah Chen", role: "Head of Curriculum", initials: "SC" },
  { name: "David Park", role: "Lead Instructor", initials: "DP" },
  { name: "Emily Zhang", role: "Marketing Director", initials: "EZ" },
];

const About = () => (
  <Layout
    title="About Us"
    description="Learn more about Pixel2Pro, powered by Hakamtechsol. Our mission is to provide quality IT education, professional training, and educational research pathways in Pakistan."
  >
    {/* Hero Banner */}
    <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
      <img src={aboutHero} alt="IT workspace" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Building Tech Talent for a Better Future</h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl">Equipping Aspiring Minds with Real-World IT Skills</p>
      </div>
    </section>

    {/* Our Story & Who We Are */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Our Story & Who We Are</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-8 space-y-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <BookOpen size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-lg">Our Story</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pixel2Pro, powered by Hakamtechsol, was founded with a vision to bridge the gap between traditional education and real-world IT skills. We recognized that many aspiring professionals lacked access to practical, career-focused learning.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our platform was built to provide hands-on training, real projects, and industry-relevant knowledge with guaranteed internship paths that prepare students for freelancing, jobs, and entrepreneurship.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Today, we continue to grow as a trusted learning ecosystem, helping individuals transform their skills into successful careers.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-8 space-y-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Users size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-lg">Who We Are</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are a passionate team of IT professionals, educators, and mentors driven by one mission: to make quality IT education accessible, affordable, and career-focused for students across Pakistan and beyond.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our platform is more than just an online learning space — it's a launchpad for future developers, designers, analysts, marketers, and tech leaders.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you're just starting your IT journey or aiming to upgrade your skills, we're here to guide you every step of the way — from foundational concepts to job readiness and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Our Mission & Vision</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-8 space-y-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Target size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-lg">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To provide practical, industry-relevant digital skills that empower individuals to build successful careers in technology and freelancing.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-8 space-y-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Eye size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-lg">Our Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become a leading platform for professional IT education, helping learners worldwide achieve financial independence and career growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Our Team</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((t) => (
            <div key={t.name} className="bg-card border rounded-lg p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
