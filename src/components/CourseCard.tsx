import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Button } from "./ui/button";
import type { Course } from "@/data/courses";

const CourseCard = ({ course, compact = false }: { course: Course; compact?: boolean }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-slate-900/15 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] motion-safe:animate-[cardFloat_10s_ease-in-out_infinite]">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-900/20 to-transparent" />
    </div>

    <div className={`relative flex items-center justify-center overflow-hidden bg-white p-3 ${compact ? "aspect-[4/2.4]" : "aspect-[4/3]"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)]" />
      <img
        src={course.image}
        alt={course.title}
        className="relative z-10 h-full w-full object-contain grayscale transition duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent transition-opacity duration-500 group-hover:from-black/45" />
      <span className="absolute left-4 top-4 z-20 rounded-full bg-black px-3 py-1 text-xs font-bold text-white shadow-lg transition-transform duration-500 group-hover:translate-y-[-1px]">
        {course.number}
      </span>
      <span className="absolute bottom-4 left-4 right-4 z-20 text-xs font-semibold uppercase tracking-wider text-white/85">
        {course.track}
      </span>
    </div>

    <div className={`flex flex-1 flex-col ${compact ? "gap-2.5 p-4" : "gap-4 p-5"}`}>
      <div>
        <h3 className={`font-bold leading-tight transition-colors duration-300 group-hover:text-slate-900 ${compact ? "min-h-0 text-base" : "min-h-[4.75rem] text-xl"}`}>
          {course.programName}
        </h3>
        {!compact && <p className="mt-1 min-h-10 text-sm text-slate-500">{course.description}</p>}
      </div>
<div className="mt-auto grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
        <span className={`flex items-center gap-2 rounded-md border border-slate-200 px-2.5 transition-colors duration-300 group-hover:border-slate-300 ${compact ? "min-h-9" : "min-h-11"}`}>
          <Clock3 size={compact ? 13 : 15} className="shrink-0" /> {course.duration}
        </span>
        <span className={`flex items-center gap-2 rounded-md border border-slate-200 px-2.5 transition-colors duration-300 group-hover:border-slate-300 ${compact ? "min-h-9" : "min-h-11"}`}>
          <CalendarDays size={compact ? 13 : 15} className="shrink-0" /> {course.sessions}
        </span>
      </div>
      <Link to={`/courses/${course.id}`} className="block pt-2">
        <Button className={`w-full rounded-full transition-transform duration-300 group-hover:translate-y-[-1px] ${compact ? "h-10 text-sm" : "h-12"}`}>
          View Track <ArrowUpRight size={compact ? 14 : 16} />
        </Button>
      </Link>
    </div>
  </article>
);

export default CourseCard;

