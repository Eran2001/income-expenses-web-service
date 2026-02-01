
# FinFlow - Personal Finance Tracker

A professional-grade Personal Finance Tracker built with React 18, TypeScript, and Tailwind CSS.

## Features

- **Multi-language Support**: English, Sinhala, and Tamil.
- **Dynamic Dashboard**: Overview of income, expenses, and net balance with Recharts visualizations.
- **Transaction Ledger**: Filterable, paginated transaction history.
- **Budgeting**: Per-category monthly budget management.
- **CSV Import Wizard**: Step-by-step mapping of bank statements.
- **Responsive Shell**: Modern sidebar navigation that collapses on mobile.
- **Dark Mode**: High-contrast dark theme support.

## Tech Stack

- **React 18** (Vite)
- **TypeScript**
- **Tailwind CSS v4** (Utility-first styling)
- **TanStack Query** (Server state management)
- **React Hook Form + Zod** (Form validation)
- **React Router v6** (Navigation)
- **i18next** (Internationalization)
- **Recharts** (Data visualization)

## Setup

1. **Environment**: Ensure you have Node.js 18+ installed.
2. **Configuration**: The app connects to the backend defined in `VITE_API_URL` (inferred from environment).
3. **Mock Data**: For local testing without a real API, the frontend includes mock data simulations in its functional components.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## Security

The application uses an Access Token (stored in memory) and a Refresh Token (HTTP-only cookie) model for secure authentication. 401 errors automatically trigger a silent refresh or redirect to login.
