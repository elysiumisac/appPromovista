# Promovista

Promovista is a mobile platform for independent shop owners in Romania. It rewards stores for promoting niche brands and allows them to reinvest those points into useful services.

## Components
- **frontend/**: React Native (Expo) client
- **backend/**: Node.js/Express API with Supabase integration

## Quick Start

### Requirements
- Node.js 18+
- npm or yarn
- Expo CLI (for the mobile app)

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
expo start
```

Both components expect Supabase credentials and other secrets stored in environment variables (see `.env.example` files in each folder).
