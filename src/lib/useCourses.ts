import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecords } from "./supabaseClient";
import { courses, type Course } from "../data/courses";
import type { FeePlan } from "./fee-plans";

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
  it_discount_monthly_fee: number | null;
  it_discount_registration_fee: number | null;
  fee_plans?: FeePlan[] | null;
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

function parseDbFeePlans(value: FeePlan[] | null | undefined): FeePlan[] | undefined {
  if (!Array.isArray(value) || value.length === 0) return undefined;
  const valid = value.filter(
    (p) =>
      typeof p?.type === "string" &&
      ["monthly", "lump-sum", "installment"].includes(p.type) &&
      typeof p?.totalFee === "number",
  );
  return valid.length ? valid : undefined;
}

function mapDbCourse(c: DbCourse, index: number): Course {
  const normalized = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/&/g, "and");
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

  const feePlans = parseDbFeePlans(c.fee_plans) ?? match?.feePlans ?? [];
  const monthlyPlan = feePlans.find((p) => p.type === "monthly");
  const monthlyFee = monthlyPlan?.monthlyFee ?? (c.monthly_fee || match?.monthlyFee);
  const admissionFee =
    monthlyPlan != null
      ? monthlyPlan.registrationFee
      : c.admission_fee != null
        ? c.admission_fee
        : match?.admissionFee;

  return {
    id: String(c.id),
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
    admissionFee,
    monthlyFee,
    itDiscountMonthlyFee:
      c.it_discount_monthly_fee ?? match?.itDiscountMonthlyFee,
    itDiscountRegistrationFee:
      c.it_discount_registration_fee ?? match?.itDiscountRegistrationFee,
    feePlans,
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
  const course = useMemo(() => {
    if (!id) return undefined;
    const normalized = (s: string) =>
      String(s)
        .toLowerCase()
        .trim()
        .replace(/&/g, "and");
    const direct = data.find((c) => normalized(c.id) === normalized(id));
    if (direct) return direct;
    const staticMatch = courses.find((s) => normalized(s.id) === normalized(id));
    if (!staticMatch) return undefined;
    return data.find(
      (c) =>
        normalized(c.programName).includes(normalized(staticMatch.programName)) ||
        normalized(staticMatch.programName).includes(normalized(c.programName)),
    );
  }, [data, id]);
  return { course, loading, fromDatabase };
}