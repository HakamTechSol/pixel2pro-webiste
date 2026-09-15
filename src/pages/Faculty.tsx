import { Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import hunainHaiderImg from "@/assets/hunain-haider-optimized.png";
import arbazImg from "@/assets/team-arbaz-optimized.jpg";
import junaidShahidImg from "@/assets/M Junaid Shahid.png";
import maliImg from "@/assets/MAli.jpeg";

type FacultyMember = {
  name: string;
  specialty: string;
  background: string;
  image?: string;
  linkedin?: string;
};

const faculty: FacultyMember[] = [
  {
    name: "Arbaz Ali",
    specialty: "AI Foundation and Freelancing",
    background:
      "Senior Software Developer with 7+ years of experience spanning United Bank Limited (Senior Java Software Engineer), HakamTechSol (Founder & Senior Software Developer), BariTechSol, and TRAFiX LLC, now teaching practical software development at Pixel2Pro.",
    image: arbazImg,
    linkedin: "https://www.linkedin.com/in/arbaz-ali-7746a0404/",
  },
  {
    name: "Hunain Haider",
    specialty: "Next Gen Developer",
    background:
      "Full-Stack Developer with hands-on MERN stack and .NET experience at HakamTechSol, and AI & Full-Stack Development Instructor at Pixel2Pro teaching the Next-Gen Developer Program, training students in full-stack development and Generative AI.",
    image: hunainHaiderImg,
    linkedin: "https://www.linkedin.com/in/hunain-haider-658956257",
  },
  {
    name: "M Junaid Shahid",
    specialty: "Digital Marketing High Level Performance Ads",
    background:
      "Technology and AI educator with experience as AI & Digital Skills Trainer at Pixel2Pro and digital marketing lead at Weblinx Solution, TheTechCreators, Optimizers Pakistan, and Bsoft Technologies, bridging technical concepts with practical skill-based learning.",
    image: junaidShahidImg,
    linkedin: "https://www.linkedin.com/in/m-junaid-shahid-407199280/",
  },
  {
    name: "M.Ali",
    specialty: "Shopify and E-Commerce Growth",
    background:
      "E-commerce operator and business owner with hands-on experience running and scaling a real online brand. Focused on conversion systems, retention flows, product strategy, and building profitable store operations that grow sustainably.",
    image: maliImg,
    linkedin: "https://www.linkedin.com/in/muhammad-ali-co-founder-of-e-commerce-engine-43a71b399?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const Faculty = () => (
  <Layout
    title="Our Faculty & Mentors"
    description="Meet Pixel2Pro's industry expert mentors and faculty members specializing in AI, E-Commerce, Development, Performance Ads, Creative Media, and Amazon PL."
  >
    {/* Header Section */}
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="mx-auto w-full max-w-[95rem] px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Our Faculty / Instructors</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Industry mentors with operating depth.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Pixel2Pro instructors are selected for practical teaching ability, real-world exposure, and portfolio-first mentorship.
        </p>
      </div>
    </section>

    {/* Faculty Grid Section */}
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[95rem] px-6 md:px-12">
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {faculty.map((mentor, index) => (
            <article
              key={mentor.name}
              style={{ animationDelay: `${index * 90}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg lg:flex-row lg:h-[300px]"
            >
              {/* Image Side - Responsive */}
              <div className="h-64 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-72 lg:h-auto lg:w-[30%]">
                {mentor.image ? (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    loading="lazy"
                    decoding="async"
                    width={392}
                    height={524}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-xl font-bold text-slate-400">
                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">{mentor.specialty}</p>
                    {mentor.linkedin && (
                      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-indigo-600">
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{mentor.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{mentor.background}</p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Pixel2Pro Mentor</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;