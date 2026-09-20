import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertRecord } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { notifySubmission } from "@/lib/notifications";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    setLoading(true);
    try {
      await insertRecord("contacts", {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
      await notifySubmission("contact", { name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() });
      toast.success("Message sent. Our support team will reply soon.");
      formEl.reset();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the Pixel2Pro support team. Send your queries regarding admissions, courses, or educational collaboration to contact@pixel2pro.com or call +92 316 785 3795."
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Pixel2Pro",
          url: "https://pixel2pro.com/contact",
          description:
            "Contact Pixel2Pro for admissions, course queries, and educational collaboration.",
          isPartOf: { "@type": "WebSite", name: "Pixel2Pro", url: "https://pixel2pro.com" },
          mainEntity: {
            "@type": "Organization",
            name: "Pixel2Pro",
            url: "https://pixel2pro.com",
            email: "contact@pixel2pro.com",
            telephone: "+92 316 785 3795",
            address: {
              "@type": "PostalAddress",
              streetAddress: "UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road",
              addressLocality: "Karachi",
              addressRegion: "Sindh",
              addressCountry: "Pakistan",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+92-316-7853795",
                contactType: "customer service",
                email: "contact@pixel2pro.com",
              },
              {
                "@type": "ContactPoint",
                telephone: "+92-316-7853795",
                contactType: "sales",
              },
            ],
          },
        },
      ]}
    >
      <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Support</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Contact Pixel2Pro.</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Questions about tracks, cohorts, fees, or admissions? Send a note and we will help.</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl md:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <div className="mt-6 grid gap-5">
              <label className="floating-field">
                <Input required name="name" placeholder=" " />
                <span>Name</span>
              </label>
              <label className="floating-field">
                <Input required name="email" type="email" placeholder=" " />
                <span>Email</span>
              </label>
              <label className="floating-field">
                <Input required name="phone" type="tel" placeholder=" " />
                <span>Phone</span>
              </label>
              <label className="floating-field">
                <Textarea required name="message" placeholder=" " rows={6} />
                <span>Message</span>
              </label>
              <Button type="submit" disabled={loading} className="h-12 rounded-full">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email", text: "contact@pixel2pro.com", href: "mailto:contact@pixel2pro.com" },
              { icon: MapPin, title: "Location", text: "UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <item.icon size={22} />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="mt-1 block text-sm text-slate-600 underline underline-offset-4">
                    {item.text}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                )}
              </div>
            ))}

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <Phone size={22} />
              <h3 className="mt-4 font-bold">Admissions & Queries</h3>
              <div className="mt-3 space-y-2.5">
                <a
                  href="tel:+923167853795"
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-black"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-black hover:text-black">
                    <Phone size={17} />
                  </span>
                  +92 316 785 3795
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <MessageCircle size={22} />
              <h3 className="mt-4 font-bold">Response Time</h3>
              <p className="mt-1 text-sm text-slate-600">Usually within one business day</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


