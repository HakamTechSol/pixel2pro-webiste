import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

const copy = {
  "/refund-policy": {
    title: "Refund Policy",
    text: "Refund eligibility is reviewed against cohort start dates, consumed sessions, administrative processing, and program-specific admission conditions. Contact support for a formal review.",
  },
};

const Legal = () => {
  const { pathname } = useLocation();
  const page = copy[pathname as keyof typeof copy] || copy["/refund-policy"];

  return (
    <Layout
      title={page.title}
      description={`${page.title} for Pixel2Pro. Read our legal conditions, rules, and refund policies.`}
    >
      <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
        <div className="container max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">{page.title}</h1>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600 md:p-8">
            {page.text}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
