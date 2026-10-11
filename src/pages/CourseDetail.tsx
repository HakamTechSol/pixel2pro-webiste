import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarDays, Check, Clock3, PlayCircle, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FeePlansPanel } from "@/components/FeePlans";
import { useCourseById } from "@/lib/useCourses";
import { getFeePlans } from "@/lib/fee-plans";
import { toTitleCase } from "@/lib/text-format";
import { courseSlug } from "@/lib/slug";

const CourseDetail = () => {
  const { id } = useParams();
  const { course, loading } = useCourseById(id);
  const [showFees, setShowFees] = useState(false);

  if (loading) {
    return (
      <Layout>
        <div className="container py-20">
          <div className="h-[420px] animate-pulse rounded-[24px] border border-slate-200 bg-slate-100" />
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold">Track Not Found</h1>
          <Link to="/courses" className="font-semibold underline underline-offset-4">Back to programs</Link>
        </div>
      </Layout>
    );
  }

  const plans = getFeePlans(course);
  const itDiscountMonthlyFee = course.itDiscountMonthlyFee ?? 4500;
  const itDiscountRegistrationFee = course.itDiscountRegistrationFee ?? 3000;
  const showItDiscount = itDiscountMonthlyFee > 0 && itDiscountRegistrationFee > 0;
  const sessionLines = course.sessions.split("|").map((s) => s.trim()).filter(Boolean);
  const isShopifyCourse = course.programName.toLowerCase().includes("shopify store development");
  const shopifyHighlights = [
    { value: "2 Months", label: "Cohort Duration" },
    { value: "2 Classes/Week", label: "Interactive Sessions" },
    { value: "2 Hours/Day", label: "Class Duration" },
  ];
  const shopifyHeroHighlights = isShopifyCourse ? shopifyHighlights : null;
  const impactMetrics = isShopifyCourse ? shopifyHighlights : course.impactMetrics;

  const sessionLabel = sessionLines.map(toTitleCase).join(" · ");
  const feeModalSubtitle = sessionLabel
    ? `${toTitleCase(course.duration)} with ${sessionLabel} — Choose a payment option below.`
    : `${toTitleCase(course.duration)} — Choose a payment option below.`;

return (
    <Layout
      title={`${course.programName} Course`}
      description={`Master ${course.programName} with Pixel2Pro's premium cohort-based learning track. ${course.description} Duration: ${course.duration}.`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": course.programName,
            "description": `${course.overview} ${course.description} Duration: ${course.duration}.`,
            "provider": {
              "@type": "Organization",
              "name": "Pixel2Pro",
              "url": "https://pixel2pro.com"
            },
            "inLanguage": "en",
            "courseMode": "Online",
            "image": course.image.startsWith("http")
              ? course.image
              : `https://pixel2pro.com${course.image}`,
            "offers": {
              "@type": "Offer",
              "price": course.price || 0,
              "priceCurrency": "PKR",
              "availability": "https://schema.org/InStock",
              "url": `https://pixel2pro.com/courses/${courseSlug(course)}`
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "courseWorkload": course.duration,
              "instructor": {
                "@type": "Person",
                "name": course.instructor,
                "jobTitle": course.instructorRole,
                "worksFor": { "@type": "Organization", "name": "Pixel2Pro" }
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pixel2pro.com/" },
              { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://pixel2pro.com/courses" },
              { "@type": "ListItem", "position": 3, "name": course.programName, "item": `https://pixel2pro.com/courses/${courseSlug(course)}` }
            ]
          })}
        </script>
      </Helmet>
      <section className="border-b border-slate-200 bg-black text-white">
        <div className="container grid gap-8 py-8 md:grid-cols-[1fr_0.85fr] md:py-14">
          <div className="space-y-6">
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
              <ArrowLeft size={16} /> Programs
            </Link>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {course.number} {course.track}
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{course.programName}</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">{course.description}</p>
            </div>
            <div className="flex max-w-3xl flex-wrap gap-3">
              {shopifyHeroHighlights ? (
                shopifyHeroHighlights.map((highlight) => (
                  <span
                    key={highlight.label}
                    className="inline-flex min-h-14 flex-col justify-center rounded-xl border border-white/15 px-5 py-3"
                  >
                    <strong className="text-sm font-bold text-white md:text-base">{highlight.value}</strong>
                    <span className="mt-0.5 text-xs font-medium text-slate-300">{highlight.label}</span>
                  </span>
                ))
              ) : (
                [
                  { icon: Clock3, label: course.duration },
                  ...sessionLines.map((line) => ({
                    icon: line.toLowerCase().includes("classes") ? CalendarDays : Clock3,
                    label: line,
                  })),
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold md:text-base"
                  >
                    <item.icon size={18} className="shrink-0 text-slate-300" />
                    {item.label}
                  </span>
                ))
              )}
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white p-1 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="flex aspect-[4/3] items-center justify-center bg-white p-2">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.programName}
                  className="h-full w-full object-contain object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-100 text-2xl font-bold text-slate-400">
                  {course.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container">
          {/* Added flex, justify-center, and text-center to the container */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-black p-5 text-center text-white md:p-12">
            {/* Removed max-w-3xl restrictions or combined it with mx-auto if you still want a max-width limit */}
            <h2 className="max-w-3xl text-2xl font-bold md:text-4xl mx-auto">
              {course.impactHeadline}
            </h2>
          </div>
        </div>
      </section>


      <section className="py-10 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_340px]">
          <Tabs defaultValue="description" className="min-w-0">
            <TabsList className="mb-6 flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {["description", "curriculum", "industry", "outcomes"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="h-11 rounded-full border border-slate-200 bg-white px-4 capitalize data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {tab === "industry" ? "Industry Trends" : tab === "outcomes" ? "Learning Outcomes" : tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="description" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{course.overview}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold">Tools You'll Master</h3>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {course.tools.map((tool) => (
                    <div key={tool} className="flex min-h-24 flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-xs font-bold text-white">
                        {tool.slice(0, 2).toUpperCase()}
                      </span>
                      <p className="text-sm font-bold">{tool}</p>
                    </div>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="curriculum">
              <h2 className="text-2xl font-bold">Curriculum</h2>
              <Accordion type="single" collapsible className="mt-5 rounded-lg border border-slate-200 px-4">
                {course.curriculum.map((week, index) => (
                  <AccordionItem key={`${week.week}-${week.title}`} value={`week-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{week.week}</span>
                        <span className="block text-base font-bold">{week.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {week.lessons.map((lesson) => (
                          <p key={lesson} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600">
                            {lesson}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="industry">
              <h2 className="text-2xl font-bold">Industry Trends</h2>
              <div className="mt-5 grid gap-3">
                {course.industryTrends.map((trend) => (
                  <div key={trend} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
                    <TrendingUp className="mt-1 shrink-0" size={18} />
                    <p className="text-sm leading-6 text-slate-700">{trend}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="outcomes">
              <h2 className="text-2xl font-bold">Learning Outcomes</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <div key={outcome} className="flex min-h-16 items-start gap-3 rounded-lg border border-slate-200 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check size={14} />
                    </span>
                    <p className="text-sm font-medium leading-6 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <PlayCircle size={24} />
              <h2 className="mt-4 text-2xl font-bold">Enroll in {course.title}</h2>
              <p className="mt-2 text-sm text-slate-500 whitespace-pre-line">
                {course.duration}
                {"\n"}
                {sessionLines.join("\n")}
              </p>
              <Button onClick={() => setShowFees(true)} className="mt-5 h-12 w-full rounded-full">Enroll Now</Button>
            </div>
          </aside>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-[78px] z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-xl md:bottom-0 lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">{course.title}</p>
            <p className="text-xs text-slate-500">{course.duration}</p>
          </div>
          <Button onClick={() => setShowFees(true)} className="rounded-full px-5">Enroll Now</Button>
        </div>
      </div>

      <Dialog open={showFees} onOpenChange={setShowFees}>
        <DialogContent className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-md overflow-y-auto rounded-xl p-4 sm:max-w-4xl sm:p-6 lg:max-w-5xl">
          <DialogHeader>
            <div className="flex flex-col gap-3 pr-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:pr-10">
              <div className="min-w-0 space-y-1.5 text-left">
                <DialogTitle className="text-base leading-tight sm:text-lg">{course.title}</DialogTitle>
                <DialogDescription className="text-xs leading-5 sm:text-sm">{feeModalSubtitle}</DialogDescription>
              </div>
              <Link
                to={`/join?track=${course.id}`}
                onClick={() => setShowFees(false)}
                className="w-full shrink-0 sm:w-auto"
              >
                <Button className="h-11 w-full rounded-full px-5 sm:w-auto sm:px-6">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </DialogHeader>
          <FeePlansPanel
            plans={plans}
            itDiscount={
              showItDiscount
                ? {
                    monthlyFee: itDiscountMonthlyFee,
                    registrationFee: itDiscountRegistrationFee,
                  }
                : undefined
            }
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CourseDetail;