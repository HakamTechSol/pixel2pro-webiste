import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { courses } from "@/data/courses";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-zinc-900 bg-black text-slate-400 select-none">
      <div className="mx-auto container px-4 pt-8 pb-16 md:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 sm:col-span-2 lg:col-span-4">
            <Link to="/" className="block shrink-0">
              <img
                src="/logo.png"
                alt="Pixel2Pro"
                className="h-16 w-auto object-contain md:h-20"
              />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Pixel2Pro turns focused learners into job-ready builders through cohort-based tracks, verified credentials, and portfolio-grade outcomes with internship pathways.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a
                href="https://www.facebook.com/profile.php?id=61577664824357"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pixel2pro_/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/pixel2pro"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Pixel2Proo"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-5 sm:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="transition-colors hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="transition-colors hover:text-white">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5 sm:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Learning Tracks</h4>
            <ul className="space-y-3 text-sm">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="block max-w-xs truncate transition-colors hover:text-white"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-slate-500" />
                <a href="mailto:contact@pixel2pro.com" className="transition-colors hover:text-white">
                  contact@pixel2pro.com 
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-slate-500" />
                <a href="tel:+923092271214" className="transition-colors hover:text-white">
                  +92 309 227 1214
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-slate-500" />
                <a href="tel:+923182484396" className="transition-colors hover:text-white">
                  +92 318 248 4396
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-slate-500" />
                <span>
                  UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-slate-900" />

        <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; {currentYear} Pixel2Pro. All rights reserved.</div>
          <div>
            Powered by{" "}
            <a
              href="https://hakamtechsol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              HakamTechSol
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;