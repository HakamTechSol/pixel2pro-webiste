# Submission email notifications

Deploy from the project root:

```bash
supabase functions deploy notify-submission
```

Set these secrets in Supabase. Never put SMTP credentials in the Vite `.env` file:

```bash
supabase secrets set SMTP_HOST=smtp.example.com SMTP_PORT=587 SMTP_USER=your-smtp-user SMTP_PASSWORD=your-smtp-password SMTP_SECURE=false SMTP_FROM=info@pixel2pro.com NOTIFICATION_EMAIL=info@pixel2pro.com
```

Use `SMTP_SECURE=true` with port `465`; use `false` with port `587`.

The function requires JWT verification. If the project uses a `sb_publishable_...` key, also add the legacy anon JWT from Supabase API settings as `VITE_SUPABASE_FUNCTION_JWT` in the frontend environment.
