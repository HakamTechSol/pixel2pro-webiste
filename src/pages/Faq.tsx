import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I enroll in a program?",
    answer:
      "Browse the Programs page, pick the track that fits your goal, and click 'Join Now' or 'View Track'. Fill in the enrollment form with your details, choose your program, and our admissions team will contact you to confirm payment and get you started.",
  },
  {
    question: "Do I need prior experience before enrolling?",
    answer:
      "Most of our programs are beginner-friendly and start from the fundamentals. Advanced tracks, such as the Next-Gen Developer program, may expect basic computer literacy. Each program page lists its recommended prerequisites in the course detail page.",
  },
  {
    question: "What do I need to attend the classes?",
    answer:
      "You will need a stable internet connection and a laptop or desktop computer. For AI and development tracks, a reasonably modern machine helps. Any specific software or tool requirements are shared before your cohort begins.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Classes are conducted live online through cohort-based sessions. Each program runs on a fixed schedule with live instruction, practical assignments, and recorded material you can review later.",
  },
  {
    question: "What does the program fee cover?",
    answer:
      "The fee covers your full course access, live instructor-led classes, learning materials and assignments, community support, and a certificate on successful completion. Additional services, if any, are clearly mentioned at the time of enrollment.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, refunds are handled on a case-by-case basis. Eligibility depends on the cohort start date, sessions already consumed, administrative processing, and your specific program. If you believe you qualify, contact our support team with your enrollment details and we will review your case.",
  },
  {
    question: "Will I get a certificate after completing the program?",
    answer:
      "Yes. Learners who meet the attendance and assignment requirements receive a Pixel2Pro certificate of completion, which adds verified, portfolio-grade credibility to your profile.",
  },
  {
    question: "Do you provide internship or job support?",
    answer:
      "Many of our programs include internship pathways and career guidance. We focus on building job-ready skills and portfolio outcomes, and our team shares relevant opportunities when available. We do not guarantee employment or specific income results.",
  },
  {
    question: "How long does each program take?",
    answer:
      "Program durations vary by track and are listed on each program page. Most cohorts run between one and four months, with live sessions spread across the week.",
  },
  {
    question: "Can I take a demo or trial class?",
    answer:
      "Yes, we regularly offer demo sessions for prospective learners. Contact our admissions team on WhatsApp or call us, and we will share the schedule of the next demo class for your preferred track.",
  },
  {
    question: "Can I switch to a different program after enrolling?",
    answer:
      "Program transfers are possible in limited cases, depending on seat availability and the gap between the programs. Contact our support team to check transfer eligibility for your enrollment.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us through the Contact page, email us at contact@pixel2pro.com, or call/WhatsApp us at +92 316 785 3795.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const Faq = () => (
  <Layout
    title="Frequently Asked Questions"
    description="Answers to the most common questions about Pixel2Pro programs, enrollment, fees, classes, certificates, refunds, and support."
    jsonLd={[faqJsonLd]}
  >
    <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
      <div className="container max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Support</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-slate-600">Everything you need to know about studying with Pixel2Pro. Have a different question? Reach out anytime.</p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-lg border border-slate-200 bg-white px-5">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-sm text-slate-500">
         Still have Questions? Reach out to us via <Link to="/contact" className="font-semibold text-black underline underline-offset-4">Contact Us</Link> page and our representative will answer you.
        </p>
      </div>
    </section>
  </Layout>
);

export default Faq;