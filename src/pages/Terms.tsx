import Layout from "@/components/Layout";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing the Pixel2Pro website or enrolling in any of our programs, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the platform or enroll in a program.",
  },
  {
    title: "2. Enrollment and Eligibility",
    body: "Enrollment in any Pixel2Pro program requires you to provide accurate, complete information during registration. Programs are open to learners who are at least 13 years of age; some tracks may require prior knowledge or tools which will be communicated at the time of enrollment.",
  },
  {
    title: "3. Fees and Payments",
    body: "All program fees are displayed before enrollment. Fees must be paid in full or according to the agreed installment plan before you are granted access to the program. Pixel2Pro reserves the right to update pricing for future cohorts without affecting already-confirmed enrollments.",
  },
  {
    title: "4. Refund Policy",
    body: "Refund requests are reviewed on a case-by-case basis against cohort start dates, sessions already consumed, administrative processing, and program-specific admission conditions. Contact our support team with your enrollment details to begin a refund review.",
  },
  {
    title: "5. Course Access and Cohort Participation",
    body: "When you enroll, you receive a personal, non-transferable license to access the course materials, live classes, and community resources for the duration of your program. Sharing your account, recordings, or materials with others is not permitted.",
  },
  {
    title: "6. Code of Conduct",
    body: "All learners are expected to behave respectfully toward instructors, mentors, and fellow students. Harassment, discrimination, spam, and disruptive behavior in classes, groups, or community channels may result in removal from the program without a refund.",
  },
  {
    title: "7. Intellectual Property",
    body: "All course content, videos, assignments, documents, logos, and website materials are the property of Pixel2Pro or its licensors and are protected by applicable intellectual property laws. You may not reproduce, redistribute, resell, or use this content for commercial purposes without prior written permission.",
  },
  {
    title: "8. Certificates and Outcomes",
    body: "Some programs issue certificates upon successful completion. Eligibility for certificates, internship pathways, and other outcomes depends on attendance, assignment completion, and the specific requirements of each program. While we prepare learners for job-ready skills, we do not guarantee employment, internships, or specific income results.",
  },
  {
    title: "9. Disclaimer of Warranties",
    body: "The Pixel2Pro platform and its content are provided on an 'as is' and 'as available' basis. While we strive for accuracy and reliability, we make no guarantees that the platform will be uninterrupted, error-free, or that the results of any program will match individual expectations.",
  },
  {
    title: "10. Limitation of Liability",
    body: "To the maximum extent permitted by law, Pixel2Pro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or participation in a program, including loss of data, earnings, or opportunities.",
  },
  {
    title: "11. Termination",
    body: "We may suspend or terminate access to the platform or a program for violations of these terms, non-payment of fees, or conduct that is harmful to other learners. Upon termination, you must stop using the materials; in limited cases, partial refunds may apply per our refund terms.",
  },
  {
    title: "12. Governing Law",
    body: "These Terms & Conditions are governed by the laws of the Islamic Republic of Pakistan. Any disputes arising out of these terms shall be subject to the jurisdiction of the courts of Karachi, Sindh, Pakistan.",
  },
  {
    title: "13. Changes to These Terms",
    body: "We may revise these Terms & Conditions at any time. Material changes will be reflected on this page with an updated effective date. Continued use of the platform after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "14. Contact",
    body: "If you have questions about these Terms & Conditions, email contact@pixel2pro.com, call +92 316 785 3795, or visit our Contact page.",
  },
];

const Terms = () => (
  <Layout
    title="Terms & Conditions"
    description="Read the Terms & Conditions of Pixel2Pro. Understand the rules and conditions that apply to enrollment, payments, course access, and use of our platform."
  >
    <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
      <div className="container max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-slate-600">Last updated: September 2026</p>
        <p className="mt-3 text-slate-600">These terms govern your use of the Pixel2Pro website and participation in its learning programs.</p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 md:p-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              <p className="mt-2 leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;