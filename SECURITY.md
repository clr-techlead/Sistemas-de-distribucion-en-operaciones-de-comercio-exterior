# Security Policy
## Reporting a vulnerability
If you discover a security issue, please report it privately by email before opening a public issue:
- Email: camiloleonrubriche@outlook.com
Please include a clear description, reproduction steps, and the potential impact. Do not include API keys or other credentials in the report.
## API key handling
- Store `API_KEY` only in local environment files or Vercel environment variables.
- Never commit `.env.local`, API keys, or other secrets to the repository.
- If a key is exposed, revoke it immediately and create a replacement.
