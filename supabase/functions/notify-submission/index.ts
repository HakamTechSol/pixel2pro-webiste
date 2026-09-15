import nodemailer from "npm:nodemailer@6.9.16";

const corsHeaders = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
type SubmissionType = "enrollment" | "contact" | "feedback";
const escapeHtml = (value: unknown) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const labels: Record<string, string> = { full_name: "Full name", whatsapp_number: "WhatsApp number", city_country: "City / country", current_professional_profile: "Professional profile", exact_program: "Program", email: "Email", government_id: "CNIC / passport", name: "Name", phone: "Phone", message: "Message", track: "Track", story: "Feedback" };
const subjectFor = (type: SubmissionType, data: Record<string, unknown>) => type === "enrollment" ? `New enrollment: ${data.exact_program || "Pixel2Pro course"}` : type === "contact" ? `New contact message from ${data.name || "website visitor"}` : `New student feedback from ${data.name || "student"}`;
const renderRows = (data: Record<string, unknown>) => Object.entries(data).filter(([key]) => key !== "terms_privacy_accepted" && key !== "approved").map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">${escapeHtml(labels[key] || key)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(value)}</td></tr>`).join("");

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const { type, data } = await request.json() as { type?: SubmissionType; data?: Record<string, unknown> };
    if (!type || !["enrollment", "contact", "feedback"].includes(type) || !data) return new Response(JSON.stringify({ error: "Invalid submission payload" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD"];
    const missing = required.filter((key) => !Deno.env.get(key));
    if (missing.length) throw new Error(`Missing SMTP secret(s): ${missing.join(", ")}`);
    const transporter = nodemailer.createTransport({ host: Deno.env.get("SMTP_HOST"), port: Number(Deno.env.get("SMTP_PORT")), secure: Deno.env.get("SMTP_SECURE") === "true", auth: { user: Deno.env.get("SMTP_USER"), pass: Deno.env.get("SMTP_PASSWORD") } });
    const subject = subjectFor(type, data);
    await transporter.sendMail({ from: Deno.env.get("SMTP_FROM") || Deno.env.get("SMTP_USER"), to: Deno.env.get("NOTIFICATION_EMAIL") || "info@pixel2pro.com", replyTo: typeof data.email === "string" ? data.email : undefined, subject, html: `<div style="font-family:Arial,sans-serif;color:#0f172a"><h2>${escapeHtml(subject)}</h2><table style="border-collapse:collapse;width:100%;max-width:720px">${renderRows(data)}</table></div>` });
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Notification email failed", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Email notification failed" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
