const getSupabaseConfig = () => ({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
});

export type NotificationType = "enrollment" | "contact" | "feedback";

export const notifySubmission = async (type: NotificationType, data: unknown) => {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase is not configured; email notification was skipped.");
    return;
  }
  const functionJwt = (import.meta.env.VITE_SUPABASE_FUNCTION_JWT as string | undefined) || supabaseAnonKey;
  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/functions/v1/notify-submission`, {
    method: "POST",
    headers: { apikey: supabaseAnonKey, Authorization: `Bearer ${functionJwt}`, "Content-Type": "application/json" },
    body: JSON.stringify({ type, data }),
  });
  if (!response.ok) throw new Error((await response.text()) || "The submission was saved, but the email notification failed.");
};

