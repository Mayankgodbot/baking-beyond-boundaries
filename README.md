# Baking Beyond Boundaries

Premium Bakery & Custom Cake Business Website

## Tech Stack

- **Frontend**: Next.js 14 (React) + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Sequelize ORM
- **Styling**: Tailwind CSS + Framer Motion

## Features

### Pages
- **Home** - Hero section, featured products, testimonials, CTA
- **Menu** - Product catalog with category filtering and search
- **About** - Company story, values, team members
- **Contact** - Contact form with FAQ section
- **Custom Order** - 5-step multi-step form for custom cake requests

### Functionality
- Product browsing with categories
- Custom cake order builder (size, flavors, design, delivery)
- Contact form submission
- Responsive design with animations

## Prerequisites

- Node.js 18+
- PostgreSQL 14+

## Quick Start

### 1. Database Setup

```sql
-- Create database
createdb baking_beyond_boundaries

-- Run schema
psql -d baking_beyond_boundaries -f database/schemas/schema.sql
```

### 2. Configure Environment

Create `backend/.env` based on `.env.example`:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=baking_beyond_boundaries
DB_USER=postgres
DB_PASSWORD=your_password
```

### 3. Install & Run

```bash
npm install
npm run ev
```

This starts both frontend (http://localhost:3000) and backend (http://localhost:5000) simultaneously.

### 4. Individual Services (Optional)

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## Available Scripts

- `npm run ev` - Start both frontend and backend development servers
- `npm run build` - Build frontend for production

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | Get all products |
| GET | `/api/products/category/:category` | Get products by category |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/custom-orders` | Submit custom order |
| GET | `/api/custom-orders` | Get all custom orders |
| PATCH | `/api/custom-orders/:id` | Update order status |
| POST | `/api/contacts` | Submit contact form |
| GET | `/api/contacts` | Get all contacts |

## Project Structure

```
├── frontend/                    # Next.js app
│   ├── src/
│   │   ├── app/                # App router pages
│   │   │   ├── page.tsx        # Home
│   │   │   ├── menu/           # Menu page
│   │   │   ├── about/          # About page
│   │   │   ├── contact/        # Contact page
│   │   │   └── custom-order/   # Custom order form
│   │   ├── components/        # UI components
│   │   ├── lib/               # API client
│   │   └── styles/            # Global styles
│   └── tailwind.config.js
├── backend/                    # Express API
│   ├── src/
│   │   ├── config/            # Database config
│   │   ├── controllers/       # Route handlers
│   │   ├── models/            # Sequelize models
│   │   └── routes/            # API routes
└── database/
    └── schemas/               # PostgreSQL schema
```