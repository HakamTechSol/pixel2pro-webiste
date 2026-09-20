import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  {
    title: "1. Information We Collect",
    text: "We collect information you provide directly, such as your name, email address, phone number, selected learning track, and any details you share when you contact us, enroll in a program, or fill out a form on our website. We also collect limited technical data such as your browser type, device type, and pages you visit, to improve the performance and security of the platform.",
  },
  {
    title: "2. How We Use Your Information",
    text: "We use the information we collect to process admissions and enrollment, deliver live classes and course materials, communicate important updates about schedules and cohorts, respond to your support requests, send notifications you have opted in to, and improve our learning programs and website experience.",
  },
  {
    title: "3. Legal Basis for Processing",
    text: "Where applicable, we process personal data on the basis of your consent, the performance of a contract with you (for example, enrollment in a paid program), compliance with legal obligations, and our legitimate interest in operating and improving the Pixel2Pro platform.",
  },
  {
    title: "4. Data Protection and Security",
    text: "We use reasonable technical and organizational safeguards, including secure storage, access controls, and encrypted communication channels, to protect learner and visitor information from unauthorized access, misuse, alteration, or loss. While no method of transmission over the internet is fully secure, we work to keep your data safe.",
  },
  {
    title: "5. Third-Party Services and Sharing",
    text: "We do not sell, rent, or trade your personal information. We may share limited data with trusted service providers who help us operate the platform, such as payment processors, email and messaging providers, and hosting services, and only to the extent needed to provide our services to you.",
  },
  {
    title: "6. Communication",
    text: "Pixel2Pro may contact you by email, phone, or messaging apps about admissions, class schedules, fee reminders, support matters, and platform updates. You may opt out of non-essential communications at any time by replying to them or contacting us directly.",
  },
  {
    title: "7. Your Rights and Choices",
    text: "You may request access to, correction of, or deletion of the personal information we hold about you. You may also object to or restrict certain processing activities, withdraw consent at any time, and ask for a copy of your data. To exercise any of these rights, contact contact@pixel2pro.com and we will respond within a reasonable time.",
  },
  {
    title: "8. Data Retention",
    text: "We keep personal information only for as long as it is needed for the purposes described in this policy, including for admissions records, legal and accounting requirements, and resolving disputes. When data is no longer required, we delete or anonymize it.",
  },
  {
    title: "9. Cookies and Analytics",
    text: "Our website may use cookies and similar technologies to remember preferences, understand how visitors use the site, and improve functionality. You can control cookies through your browser settings. Disabling cookies may affect certain parts of the website experience.",
  },
  {
    title: "10. Children's Privacy",
    text: "Pixel2Pro's programs are intended for learners of working age and are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.",
  },
  {
    title: "11. Changes to This Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. When we make material changes, we will update the effective date below and, where appropriate, notify users. Continued use of the platform after changes are posted constitutes acceptance of the updated policy.",
  },
  {
    title: "12. Contact Us",
    text: "If you have any questions about this Privacy Policy or about how your data is handled, email us at contact@pixel2pro.com, call +92 316 785 3795, or write to us at UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan.",
  },
];

const Privacy = () => (
  <Layout
    title="Privacy Policy"
    description="Read the privacy policy of Pixel2Pro. Learn how we collect, use, protect, and manage the personal information of our learners and visitors."
  >
    <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
      <div className="container max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">Last updated: September 2026</p>
        <p className="mt-3 text-slate-600">This policy explains how Pixel2Pro collects, uses, protects, and manages the personal information of our learners and website visitors. Please read it carefully before enrolling in any program.</p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-lg border border-slate-200 bg-white px-5">
          {sections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-slate-600">
                {section.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
       
      </div>
    </section>
  </Layout>
);

export default Privacy;