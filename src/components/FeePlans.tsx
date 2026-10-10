import type { FeePlan } from "@/lib/fee-plans";
import {
  formatPKR,
  getInstallments,
  getMonthlyPlan,
  savingsVsMonthly,
} from "@/lib/fee-plans";
import { toTitleCasePhrase } from "@/lib/text-format";
import { BadgeCheck, CalendarClock, Banknote } from "lucide-react";

const typeIcon = {
  "lump-sum": Banknote,
  monthly: CalendarClock,
  installment: CalendarClock,
} as const;

const termsLabel = (label: string) => toTitleCasePhrase(label);

const REG_FEE_TERM = "Registration Fee to be Paid Before Course Start";

export const DEFAULT_FEE_FOOTER_NOTE =
  "Registration Fee is the one-time payment to enroll in the Pixel2Pro Platform. Returning students do not need to pay it again.";

type Props = {
  plans: FeePlan[];
  itDiscount?: { monthlyFee: number; registrationFee: number };
  footerNote?: string;
};

const PlanRow = ({
  label,
  value,
  note,
  strikeNote,
  highlight,
}: {
  label: string;
  value: string;
  note?: string;
  strikeNote?: string;
  highlight?: boolean;
}) => (
  <div className="flex items-start justify-between gap-3 px-3 py-2">
    <span className="font-semibold text-slate-500">{label}</span>
    <span className="flex flex-col items-end">
      <span
        className={`text-right font-bold ${
          highlight ? "text-emerald-700" : "text-slate-800"
        }`}
      >
        {value}
      </span>
      {note && <span className="text-right text-[10px] text-slate-400">{note}</span>}
      {strikeNote && (
        <span className="text-right text-[10px] text-slate-400 line-through">
          {strikeNote}
        </span>
      )}
    </span>
  </div>
);

export const FeePlansPanel = ({ plans, itDiscount, footerNote }: Props) => {
  if (!plans.length) return null;
  const monthly = getMonthlyPlan(plans);
  const months = monthly?.months ?? 1;
  const monthlyTotal = monthly?.totalFee ?? 0;
  const baseMonthlyRate = monthly?.monthlyFee ?? 0;
  const baseRegistrationRate = monthly?.registrationFee ?? 0;
  const savings = savingsVsMonthly(plans);

  const itMonthly = itDiscount?.monthlyFee;
  const itReg = itDiscount?.registrationFee;
  const showIt = itMonthly != null && itReg != null && itMonthly > 0 && itReg > 0;
  const itTotal = showIt
    ? (itDiscount?.monthlyFee ?? 0) * months + (itDiscount?.registrationFee ?? 0)
    : 0;
  const itSavings = showIt && monthlyTotal > itTotal ? monthlyTotal - itTotal : 0;

  const effMonthly = (plan: FeePlan) =>
    plan.type === "monthly" ? plan.monthlyFee ?? 0 : Math.round(plan.totalFee / months);

  const strikeInsteadOf = (value: number) =>
    baseMonthlyRate > 0 && value !== baseMonthlyRate
      ? `Instead of ${formatPKR(baseMonthlyRate)}`
      : undefined;

  const totalLabel = (plan: FeePlan) => {
    if (plan.type === "monthly" && plan.months) {
      return `Total for ${plan.months} Month${plan.months > 1 ? "s" : ""}`;
    }
    if (plan.type === "installment") {
      const count = plan.installments?.length ?? 2;
      return `Total for ${count} Installment${count > 1 ? "s" : ""}`;
    }
    return "One-Time Payment";
  };

  const monthlyNote = (plan: FeePlan) => {
    if (plan.type === "monthly") return `Per Month × ${plan.months ?? months}`;
    if (plan.type === "lump-sum")
      return `${formatPKR(effMonthly(plan))} Per Month × ${months}`;
    return "Effective Per Month";
  };

  const termsFor = (plan: FeePlan) => {
    if (plan.type === "monthly") {
      return (
        <>
          {plan.registrationFee > 0 && <p>{REG_FEE_TERM}</p>}
          <p>
            {formatPKR(plan.monthlyFee ?? 0)} Per Month × {plan.months ?? months}
          </p>
        </>
      );
    }
    if (plan.type === "lump-sum") {
      return (
        <p>{formatPKR(plan.totalFee)} to be Paid Before Course Start (One-Time)</p>
      );
    }
    const installments = getInstallments(plan);
    return (
      <div className="space-y-1.5">
        {plan.registrationFee > 0 && <p>{REG_FEE_TERM}</p>}
        {installments.map((inst, i) => (
          <p key={`${plan.id}-${i}`} className="flex items-start gap-1.5">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
              {i + 1}
            </span>
            <span>
              {formatPKR(inst.amount)} — {termsLabel(inst.label)}
            </span>
          </p>
        ))}
      </div>
    );
  };

  const th =
    "border-b border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500";
  const td = "border-b border-slate-200 px-3 py-2.5 align-top";

  return (
    <div className="mt-4">
      <p className="mb-3 font-semibold text-slate-700">
        Fee &amp; Payment Options — Compare All Options
      </p>

      {/* ===== Mobile: stacked cards ===== */}
      <div className="space-y-3 md:hidden">
        {plans.map((plan) => {
          const Icon = typeIcon[plan.type] ?? Banknote;
          const saving = monthly ? savings(plan) : 0;
          return (
            <div
              key={`m-${plan.id}`}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                  <Icon size={15} className="shrink-0 text-slate-500" />
                  {plan.title}
                </p>
                <div className="flex items-center gap-1">
                  {saving > 0 && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      Save {formatPKR(saving)}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Total Fee
              </p>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="text-xl font-black text-slate-900">
                  {formatPKR(plan.totalFee)}
                </span>
                <span className="text-[11px] text-slate-500">{totalLabel(plan)}</span>
              </div>

              <div className="mt-3 divide-y divide-slate-100 rounded-lg border border-slate-100 text-xs">
                <PlanRow
                  label="Registration Fee"
                  value={
                    plan.type === "lump-sum" || plan.registrationFee <= 0
                      ? "Free"
                      : formatPKR(plan.registrationFee)
                  }
                  note={plan.type === "lump-sum" ? "No Registration Fee" : undefined}
                  strikeNote={
                    baseRegistrationRate > 0 &&
                    baseRegistrationRate !== plan.registrationFee
                      ? `Instead of ${formatPKR(baseRegistrationRate)}`
                      : undefined
                  }
                />
                <PlanRow
                  label="Monthly Fee"
                  value={formatPKR(effMonthly(plan))}
                  note={monthlyNote(plan)}
                />
                <div className="flex items-start justify-between gap-3 px-3 py-2">
                  <span className="font-semibold text-slate-500">Payment Terms</span>
                  <div className="flex-1 text-right leading-5 text-slate-700">
                    {termsFor(plan)}
                  </div>
                </div>
                <PlanRow
                  label="Discount"
                  value={saving > 0 ? `Save ${formatPKR(saving)}` : "—"}
                  highlight={saving > 0}
                />
              </div>
            </div>
          );
        })}

        {showIt && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="flex items-center gap-1.5 text-sm font-bold text-emerald-800">
              <BadgeCheck size={15} className="shrink-0 text-emerald-600" />
              For IT Students &amp; Professionals
            </p>

            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
              Total Fee
            </p>
            <div className="mt-0.5 flex items-baseline gap-2">
              <span className="text-xl font-black text-emerald-700">
                {formatPKR(itTotal)}
              </span>
              <span className="text-[11px] text-emerald-700">
                Total for {months} Month{months > 1 ? "s" : ""}
              </span>
            </div>

            <div className="mt-3 divide-y divide-emerald-100 rounded-lg border border-emerald-100 bg-white text-xs">
              <PlanRow
                label="Registration Fee"
                value={formatPKR(itDiscount!.registrationFee)}
                strikeNote={
                  baseRegistrationRate > 0 &&
                  baseRegistrationRate !== itDiscount!.registrationFee
                    ? `Instead of ${formatPKR(baseRegistrationRate)}`
                    : undefined
                }
              />
              <PlanRow
                label="Monthly Fee"
                value={formatPKR(itDiscount!.monthlyFee)}
                strikeNote={strikeInsteadOf(itDiscount!.monthlyFee)}
              />
              <div className="flex items-start justify-between gap-3 px-3 py-2">
                <span className="font-semibold text-slate-500">Payment Terms</span>
                <div className="flex-1 text-right leading-5 text-slate-700">
                  <p>{REG_FEE_TERM}</p>
                  <p>
                    {formatPKR(itDiscount!.monthlyFee)} Per Month × {months}
                  </p>
                </div>
              </div>
              <PlanRow
                label="Discount"
                value={itSavings > 0 ? `Save ${formatPKR(itSavings)}` : "—"}
                highlight={itSavings > 0}
              />
            </div>
          </div>
        )}
      </div>

      {/* ===== Desktop / tablet: comparison table ===== */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white md:block">
        <table className="w-full min-w-[700px] border-collapse text-xs">
          <thead>
            <tr>
              <th className={`${th} w-[150px] rounded-tl-xl`}>Plan</th>
              <th className={th}>Registration Fee</th>
              <th className={th}>Monthly Fee</th>
              <th className={th}>Payment Terms</th>
              <th className={`${th} rounded-tr-xl`}>Discount</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => {
              const Icon = typeIcon[plan.type] ?? Banknote;
              const saving = monthly ? savings(plan) : 0;
              return (
                <tr key={`row-${plan.id}`} className="align-top">
                  <td className={td}>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                      <Icon size={15} className="shrink-0 text-slate-500" />
                      {plan.title}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-900">
                      Total Fee: {formatPKR(plan.totalFee)}{" "}
                      <span className="font-normal text-slate-400">
                        ({totalLabel(plan)})
                      </span>
                    </p>
                  </td>

                  <td className={td}>
                    <p className="font-bold text-slate-800">
                      {plan.type === "lump-sum" || plan.registrationFee <= 0
                        ? "Free"
                        : formatPKR(plan.registrationFee)}
                    </p>
                    {plan.type === "lump-sum" && (
                      <p className="text-[11px] text-slate-400">No Registration Fee</p>
                    )}
                    {baseRegistrationRate > 0 &&
                      baseRegistrationRate !== plan.registrationFee && (
                        <p className="text-[11px] text-slate-400 line-through">
                          Instead of {formatPKR(baseRegistrationRate)}
                        </p>
                      )}
                  </td>

                  <td className={td}>
                    <p className="font-bold text-slate-800">{formatPKR(effMonthly(plan))}</p>
                    <p className="text-[11px] text-slate-400">{monthlyNote(plan)}</p>
                  </td>

                  <td className={`${td} max-w-[210px] leading-5 text-slate-600`}>
                    {termsFor(plan)}
                  </td>

                  <td className={td}>
                    {saving > 0 ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700">
                        <BadgeCheck size={11} /> Save {formatPKR(saving)}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}

            {showIt && (
              <tr className="align-top bg-emerald-50/60">
                <td className="border-b border-emerald-100 px-3 py-2.5 align-top">
                  <p className="flex items-center gap-1.5 text-sm font-bold text-emerald-800">
                    <BadgeCheck size={15} className="shrink-0 text-emerald-600" />
                    For IT Students &amp; Professionals
                  </p>
                  {itDiscount && showIt && (
                    <p className="mt-0.5 text-[11px] font-semibold text-emerald-700">
                      Total Fee: {formatPKR(itTotal)}{" "}
                      <span className="font-normal text-emerald-600/80">
                        (Total for {months} Month{months > 1 ? "s" : ""})
                      </span>
                    </p>
                  )}
                </td>

                <td className="border-b border-emerald-100 px-3 py-2.5 align-top">
                  <p className="font-bold text-emerald-700">
                    {formatPKR(itDiscount!.registrationFee)}
                  </p>
                  {baseRegistrationRate > 0 &&
                    baseRegistrationRate !== itDiscount!.registrationFee && (
                      <p className="text-[11px] text-slate-400 line-through">
                        Instead of {formatPKR(baseRegistrationRate)}
                      </p>
                    )}
                </td>

                <td className="border-b border-emerald-100 px-3 py-2.5 align-top">
                  <p className="font-bold text-emerald-700">
                    {formatPKR(itDiscount!.monthlyFee)}
                  </p>
                  {strikeInsteadOf(itDiscount!.monthlyFee) ? (
                    <p className="text-[11px] text-slate-400 line-through">
                      {strikeInsteadOf(itDiscount!.monthlyFee)}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400">Per Month × {months}</p>
                  )}
                </td>

                <td className="border-b border-emerald-100 px-3 py-2.5 align-top leading-5 text-slate-600">
                  {itDiscount && showIt && (
                    <>
                      <p>{REG_FEE_TERM}</p>
                      <p>
                        {formatPKR(itDiscount.monthlyFee)} Per Month × {months}
                      </p>
                    </>
                  )}
                </td>

                <td className="border-b border-emerald-100 px-3 py-2.5 align-top">
                  {itSavings > 0 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700">
                      <BadgeCheck size={11} /> Save {formatPKR(itSavings)}
                    </span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {footerNote ?? DEFAULT_FEE_FOOTER_NOTE}
      </p>
    </div>
  );
};