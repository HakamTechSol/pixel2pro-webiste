export type FeePlanType = "monthly" | "lump-sum" | "installment";

export interface FeeInstallment {
  label: string;
  amount: number;
  note?: string;
}

export interface FeePlan {
  id: string;
  type: FeePlanType;
  title: string;
  totalFee: number;
  registrationFee: number;
  monthlyFee?: number;
  months?: number;
  installments?: FeeInstallment[];
  badge?: string;
  note?: string;
}

export const formatPKR = (n: number) => "PKR " + n.toLocaleString("en-PK");

export const formatPKRShort = (n: number) => {
  if (n >= 1000000) return `PKR ${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `PKR ${(n / 1000).toFixed(0)}K`;
  return `PKR ${n}`;
};

export function getFeePlans(course: { feePlans?: FeePlan[] }): FeePlan[] {
  return course.feePlans && course.feePlans.length ? course.feePlans : [];
}

export function getMonthlyPlan(plans: FeePlan[]): FeePlan | undefined {
  return plans.find((p) => p.type === "monthly");
}

export function getBestValuePlan(plans: FeePlan[]): FeePlan | undefined {
  return plans.find((p) => p.type === "lump-sum") ?? plans[0];
}

export function getLowestTotal(plans: FeePlan[]): number {
  return plans.reduce((min, p) => (p.totalFee < min ? p.totalFee : min), Number.MAX_SAFE_INTEGER);
}

export function savingsVsMonthly(plans: FeePlan[]): (plan: FeePlan) => number {
  const monthly = getMonthlyPlan(plans);
  return (plan: FeePlan) =>
    monthly && monthly.totalFee > plan.totalFee ? monthly.totalFee - plan.totalFee : 0;
}