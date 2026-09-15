const getSupabaseConfig = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  return { supabaseUrl, supabaseAnonKey };
};

export const insertRecord = async (table: string, payload: any) => {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(`Supabase is not configured. Saving payload locally in localStorage for table: "${table}".`);
    const localData = JSON.parse(localStorage.getItem(table) || "[]");
    const newRecord = {
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      ...payload,
    };
    localData.push(newRecord);
    localStorage.setItem(table, JSON.stringify(localData));
    
    // Simulate minor network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return newRecord;
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Failed to insert record into table ${table}`);
  }

  const result = await response.json();
  return Array.isArray(result) ? result[0] : result;
};

export const fetchRecords = async <T = unknown>(table: string, queryParams: string = "") => {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(`Supabase is not configured. Fetching local data for table: "${table}".`);
    const localData = JSON.parse(localStorage.getItem(table) || "[]");
    return localData as T;
  }

  const url = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${table}${queryParams}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Failed to fetch records from table ${table}`);
  }

  return (await response.json()) as T;
};
