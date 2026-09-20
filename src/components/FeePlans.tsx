import type { FeePlan } from "@/lib/fee-plans";
import { formatPKR, getMonthlyPlan, savingsVsMonthly } from "@/lib/fee-plans";
import { BadgeCheck, CalendarClock, Banknote } from "lucide-react";

const typeIcon = {
  "lump-sum": Banknote,
  monthly: CalendarClock,
  installment: CalendarClock,
} as const;

export const FeePlansPanel = ({ plans }: { plans: FeePlan[] }) => {
  if (!plans.length) return null;
  const monthly = getMonthlyPlan(plans);
  const savings = savingsVsMonthly(plans);

  return (
    <div className="mt-4 space-y-3">
      <p className="font-semibold text-slate-700">Fee &amp; Payment Options</p>
      {plans.map((plan) => {
        const Icon = typeIcon[plan.type] ?? Banknote;
        const saving = monthly ? savings(plan) : 0;
        return (
          <div
            key={plan.id}
            className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                <Icon size={15} className="shrink-0 text-slate-500" />
                {plan.title}
              </p>
              <div className="flex items-center gap-1.5">
                {saving > 0 && (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    Save {formatPKR(saving)}
                  </span>
                )}
                {plan.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      plan.badge === "Best Value"
                        ? "bg-black text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">
                {formatPKR(plan.totalFee)}
              </span>
              {plan.type === "monthly" && plan.months && (
                <span className="text-xs font-medium text-slate-500">
                  total for {plan.months} month{plan.months > 1 ? "s" : ""}
                </span>
              )}
              {plan.type === "installment" && (plan.installments?.length ?? 0) > 0 && (
                <span className="text-xs font-medium text-slate-500">
                  total for {plan.installments!.length} installment
                  {(plan.installments?.length ?? 0) > 1 ? "s" : ""}
                </span>
              )}
            </div>

            <div className="mt-3 space-y-2 text-xs text-slate-600">
              {plan.type === "monthly" && plan.monthlyFee && (
                <>
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>Monthly fee ({plan.months} × {formatPKR(plan.monthlyFee)})</span>
                    <span className="font-bold text-slate-800">
                      {formatPKR((plan.monthlyFee ?? 0) * (plan.months ?? 1))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>Registration fee</span>
                    <span className="font-bold text-slate-800">
                      {plan.registrationFee > 0
                        ? formatPKR(plan.registrationFee)
                        : "Free"}
                    </span>
                  </div>
                </>
              )}

              {plan.type === "lump-sum" && (
                <>
                  <p className="flex items-start gap-1.5 text-[11px] leading-4 text-slate-500">
                    <BadgeCheck size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                    Pay the full course fee in one single payment — no monthly installments.
                    {plan.note ? ` ${plan.note}.` : ""}
                  </p>
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>One-time payment (lump sum)</span>
                    <span className="font-bold text-slate-800">{formatPKR(plan.totalFee)}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                    <span>Registration fee</span>
                    <span className="font-bold text-slate-800">
                      {plan.registrationFee > 0
                        ? formatPKR(plan.registrationFee)
                        : "Free"}
                    </span>
                  </div>
                  {monthly && saving > 0 && (
                    <div className="flex items-center justify-between rounded-md bg-emerald-50 px-3 py-2 font-semibold text-emerald-800">
                      <span>Save vs monthly plan</span>
                      <span className="font-bold">{formatPKR(saving)}</span>
                    </div>
                  )}
                </>
              )}

              {plan.type === "installment" && (
                <>
                  <p className="text-[11px] leading-4 text-slate-500">
                    Pay in {(plan.installments?.length ?? 2)} fixed installments instead of paying
                    monthly.
                  </p>
                  {(plan.installments ?? []).map((inst, i) => (
                    <div
                      key={`${inst.label}-${i}`}
                      className="rounded-md bg-slate-50 px-3 py-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700">
                          <span className="mr-1 rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {i + 1}
                          </span>
                          {inst.label}
                        </span>
                        <span className="font-bold text-slate-800">
                          {formatPKR(inst.amount)}
                        </span>
                      </div>
                      {inst.note && (
                        <p className="mt-0.5 text-[11px] text-slate-500">{inst.note}</p>
                      )}
                    </div>
                  ))}
                  {plan.registrationFee > 0 && (
                    <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                      <span>Registration fee (included)</span>
                      <span className="font-bold text-slate-800">
                        {formatPKR(plan.registrationFee)}
                      </span>
                    </div>
                  )}
                  {monthly && saving > 0 && (
                    <div className="flex items-center justify-between rounded-md bg-emerald-50 px-3 py-2 font-semibold text-emerald-800">
                      <span>Save vs monthly plan</span>
                      <span className="font-bold">{formatPKR(saving)}</span>
                    </div>
                  )}
                </>
              )}

              {plan.note && plan.type !== "lump-sum" && plan.type !== "installment" && (
                <p className="text-[11px] text-slate-500">{plan.note}</p>
              )}
            </div>
          </div>
        );
      })}
      <p className="text-xs text-slate-500">
        Returning students after completing a course don&apos;t pay the registration fee again.
      </p>
    </div>
  );
};