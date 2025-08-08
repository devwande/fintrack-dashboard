# FinTrack Dashboard

A modern, responsive dashboard to view a simple wallet ledger with summary cards and a searchable, sortable transactions table. Built with Next.js App Router, Tailwind CSS, and lightweight components.

We keep the App Router structure with `/app`, `/components`, and `/public`, which aligns with recommended Next.js file organization. This project includes a README as recommended for clarity and onboarding.

## Features

- Wallet header with status and share controls
- Team avatar group
- Overview tab with animated skeletons while loading
- Summary cards (Total Balance, Credits, Debits, Transactions)
- Transactions tab with:
  - Search across remark, type, currency, date, and amount
  - Desktop table with sortable columns
  - Mobile-friendly card list with a sort selector
  - Empty state for no results
- Responsive layout with sticky sidebar behavior on larger screens

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Next/Image for assets

## Getting Started

Prerequisites:
- Node.js 18+

Install dependencies and run:

```bash
npm install
npm run dev
