import Layout from "@/components/Layout";
import { Facebook, Instagram, Linkedin, Mail, Phone, User } from "lucide-react";
import arbazImg from "@/assets/team-arbaz.png";
import talhaImg from "@/assets/team-talha.png";
import hunainImg from "@/assets/team-hunain.png";
import farhanImg from "@/assets/team-farhan.png";
import ghazanfarImg from "@/assets/team-ghazanfar.png";

type Social = {
  type: "facebook" | "instagram" | "linkedin" | "behance";
  url: string;
};

type TeamMember = {
  name: string;
  role: string;
  phone: string;
  email: string;
  image?: string;
  socials: Social[];
};

const team: TeamMember[] = [
  {
    name: "Arbaz Ali",
    role: "Senior Software Developer",
    phone: "+92 320 123 5249",
    email: "arbu1499@gmail.com",
    image: arbazImg,
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
  {
    name: "Talha Khan",
    role: "Wordpress Developer & Marketing Executive",
    phone: "+92 316 297 5195",
    email: "talhaxyz0@gmail.com",
    image: talhaImg,
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
  {
    name: "Syed Hunain Haider Zaidi",
    role: "Senior Dotnet Developer",
    phone: "+92 316 785 3795",
    email: "hunainhaider811@gmail.com",
    image: hunainImg,
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
  {
    name: "Muhammad Farhan",
    role: "Senior Full Stack Developer",
    phone: "+92 316 285 9445",
    email: "farhanteacher990@gmail.com",
    image: farhanImg,
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
  {
    name: "Ghazanfar Ali",
    role: "2D Animator & Video Editor",
    phone: "+92 313 295 5983",
    email: "anusumer96@gmail.com",
    image: ghazanfarImg,
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
      { type: "behance", url: "#" },
    ],
  },
  {
    name: "Sarosh Ahmed",
    role: "Senior Software Developer",
    phone: "+92 309 229 3987",
    email: "saroshahmed622@gmail.com",
    socials: [
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
];

const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.103.9.273 1.252.507.349.235.62.547.813.938.193.39.29.876.29 1.456 0 .626-.142 1.146-.428 1.563-.286.418-.71.762-1.27 1.028.769.221 1.342.608 1.72 1.163.379.555.566 1.226.566 2.012 0 .633-.123 1.183-.367 1.65a3.205 3.205 0 0 1-1.014 1.182 4.45 4.45 0 0 1-1.473.679c-.553.146-1.124.218-1.715.218H0V5.698h7.799zm-.486 5.255c.484 0 .883-.115 1.197-.345.314-.23.471-.604.471-1.123 0-.288-.052-.524-.155-.708a1.118 1.118 0 0 0-.426-.434 1.785 1.785 0 0 0-.616-.214 4.83 4.83 0 0 0-.706-.05H3.985v2.874h3.328zm.183 5.508c.265 0 .518-.025.758-.077.241-.052.452-.137.634-.255a1.32 1.32 0 0 0 .435-.498c.108-.213.162-.485.162-.815 0-.648-.182-1.111-.547-1.392-.365-.28-.847-.42-1.446-.42H3.985v3.457h3.511zM17.45 16.521c.526.39 1.293.586 2.297.586.701 0 1.302-.169 1.798-.508.499-.339.804-.697.913-1.078h2.797c-.448 1.385-1.135 2.376-2.061 2.974-.926.598-2.046.897-3.358.897-.928 0-1.764-.149-2.51-.443-.745-.295-1.378-.717-1.897-1.27a5.633 5.633 0 0 1-1.197-1.967 7.21 7.21 0 0 1-.422-2.512c0-.886.144-1.711.435-2.473.29-.762.696-1.421 1.222-1.978a5.71 5.71 0 0 1 1.897-1.317c.738-.32 1.553-.48 2.448-.48.999 0 1.871.193 2.616.578a5.343 5.343 0 0 1 1.844 1.547 6.34 6.34 0 0 1 1.061 2.225c.214.832.292 1.703.232 2.616h-8.327c0 .917.318 1.793.844 2.183zm4.108-5.973c-.418-.458-1.124-.708-1.943-.708-.531 0-.972.09-1.323.272a2.69 2.69 0 0 0-.853.667 2.398 2.398 0 0 0-.445.864c-.075.292-.121.553-.131.78h5.158c-.075-.802-.347-1.418-.463-1.875zM15.078 6.224h6.49v1.578h-6.49V6.224z" />
  </svg>
);

const socialIcon = (type: Social["type"]) => {
  switch (type) {
    case "facebook":
      return <Facebook size={16} />;
    case "instagram":
      return <Instagram size={16} />;
    case "linkedin":
      return <Linkedin size={16} />;
    case "behance":
      return <BehanceIcon size={16} />;
  }
};

const socialLabel = (type: Social["type"]) =>
  type.charAt(0).toUpperCase() + type.slice(1);

const OurTeam = () => (
  <Layout
    title="Our Team"
    description="Meet the core engineering, development, and marketing team behind Pixel2Pro who are building the premier cohort-based learning platform."
  >
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
            Meet Our Team
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            The passionate people behind Pixel2Pro, dedicated to helping you upgrade your skills to pro level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="group bg-card border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 aspect-square sm:aspect-auto bg-muted flex items-center justify-center overflow-hidden shrink-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-background border flex items-center justify-center">
                    <User size={48} strokeWidth={1.25} className="text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="flex-1 p-5 md:p-6 flex flex-col gap-3">
                <div>
                  <h3 className="font-heading font-semibold text-lg md:text-xl leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-highlight uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors break-all"
                  >
                    <Phone size={14} className="shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors break-all"
                  >
                    <Mail size={14} className="shrink-0" />
                    <span>{member.email}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-2 mt-auto">
                  {member.socials.map((s) => (
                    <a
                      key={s.type}
                      href={s.url}
                      aria-label={`${member.name} on ${socialLabel(s.type)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {socialIcon(s.type)}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OurTeam;
