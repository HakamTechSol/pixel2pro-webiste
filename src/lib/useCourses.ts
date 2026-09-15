import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecords } from "./supabaseClient";
import { courses, type Course } from "../data/courses";

export interface DbCourse {
  id: string;
  course_name: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  discount: number;
  status: string;
  description: string;
  thumbnail: string | null;
  completion_rate: number;
  students: number;
  revenue: number;
  created_at: string;
  classes_per_week: number;
  hours_per_class: number;
  admission_fee: number | null;
  monthly_fee: number;
  track: string;
  program_name: string | null;
  sessions: string;
  image_url: string | null;
  show_on_home: boolean | null;
  home_order: number | null;
  instructor: string;
  instructor_role: string;
  overview: string;
  outcomes: string[];
  tools: string[];
  curriculum: { week: string; title: string; lessons: string[] }[];
  industry_trends: string[];
  impact_headline: string;
  impact_metrics: { label: string; value: string }[];
}

const COURSES_PARAMS = "?select=*&status=eq.published&order=created_at.asc";

function mapDbCourse(c: DbCourse, index: number): Course {
  const normalized = (s: string) => s.toLowerCase().trim();
  const match =
    courses.find((s) => normalized(s.id) === normalized(c.id)) ||
    courses.find((s) => {
      const n = normalized(c.program_name || c.course_name);
      return n && (normalized(s.programName).includes(n) || n.includes(normalized(s.programName)));
    });

  const tools: string[] = Array.isArray(c.tools) && c.tools.length ? c.tools : match?.tools ?? [];
  const toolLogos = tools
    .map((t) => match?.toolLogos.find((l) => normalized(l.name) === normalized(t)))
    .filter(Boolean) as { name: string; image: string }[];

  return {
    id: c.id,
    number: c.home_order != null ? String(c.home_order).padStart(2, "0") : (match?.number ?? String(index + 1).padStart(2, "0")),
    track: c.track || c.category || match?.track || "Program",
    title: c.course_name || match?.title || "Program",
    programName: c.program_name || c.course_name || match?.programName || "Program",
    description: c.description || match?.description || "",
    category: c.category || match?.category || "General",
    duration: c.duration || match?.duration || "1 month",
    sessions: c.sessions || match?.sessions || `${c.classes_per_week || 2} Classes/Week`,
    level: c.level || match?.level || "Beginner",
    price: c.price || match?.price || 0,
    admissionFee: c.admission_fee != null ? c.admission_fee : match?.admissionFee,
    monthlyFee: c.monthly_fee || match?.monthlyFee,
    image: c.image_url || c.thumbnail || match?.image || "",
    showOnHome: c.show_on_home != null ? Boolean(c.show_on_home) : (match?.showOnHome ?? true),
    homeOrder: c.home_order ?? match?.homeOrder,
    instructor: c.instructor || match?.instructor || "",
    instructorRole: c.instructor_role || match?.instructorRole || "",
    overview: c.overview || match?.overview || c.description || "",
    outcomes: Array.isArray(c.outcomes) && c.outcomes.length ? c.outcomes : match?.outcomes ?? [],
    tools,
    toolLogos: toolLogos.length ? toolLogos : match?.toolLogos ?? [],
    curriculum: Array.isArray(c.curriculum) && c.curriculum.length ? c.curriculum : match?.curriculum ?? [],
    industryTrends: Array.isArray(c.industry_trends) && c.industry_trends.length ? c.industry_trends : match?.industryTrends ?? [],
    impactHeadline: c.impact_headline || match?.impactHeadline || "",
    impactMetrics: Array.isArray(c.impact_metrics) && c.impact_metrics.length ? c.impact_metrics : match?.impactMetrics ?? [],
    defaultProfile: c.level || match?.defaultProfile || "Beginner",
  };
}

export function useWebsiteCourses() {
  const { data: dbCourses, isLoading, isError } = useQuery<DbCourse[]>({
    queryKey: ["website-courses"],
    queryFn: () => fetchRecords<DbCourse[]>("courses", COURSES_PARAMS),
    staleTime: 1000 * 60 * 5,
  });

  const published = useMemo(() => {
    if (!dbCourses || !dbCourses.length) return null;
    return dbCourses.map((c, i) => mapDbCourse(c, i));
  }, [dbCourses]);

  const data = published ?? courses;
  const loading = isLoading && !published;

  return { data, loading, fromDatabase: !!published };
}

export function useCourseById(id: string | undefined) {
  const { data, loading, fromDatabase } = useWebsiteCourses();
  const course = useMemo(() => data.find((c) => c.id === id), [data, id]);
  return { course, loading, fromDatabase };
}