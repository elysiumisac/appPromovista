# Promovista Backend

Simple Express server exposing minimal API endpoints:
- `/campaigns` – list campaigns from Supabase
- `/wallet/add` – add points to a user's wallet via a stored procedure
- `/validate-photo` – placeholder AI photo validation

Create a `.env` file based on `.env.example` with your Supabase credentials and run:
```bash
npm install
npm run dev
```
