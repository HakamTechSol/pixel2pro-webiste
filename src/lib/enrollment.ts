import { insertRecord } from "./supabaseClient";

export interface EnrollmentPayload {
  full_name: string;
  whatsapp_number: string;
  city_country: string;
  current_professional_profile: string;
  exact_program: string;
  email: string;
  government_id: string;
  terms_privacy_accepted: boolean;
  source_track_id: string;
}

export const insertEnrollment = async (payload: EnrollmentPayload) => {
  const table = (import.meta.env.VITE_SUPABASE_ENROLLMENTS_TABLE as string | undefined) || "enrollments";
  return insertRecord(table, payload);
};
