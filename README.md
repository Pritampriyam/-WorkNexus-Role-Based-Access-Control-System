# HIRENIXA - Freelance & Digital Services Marketplace

AI-powered platform connecting students and professionals with freelancers, services, and career opportunities.

## 🚀 Features

- **Jobs Board** - Full-time roles, internships, and freelance opportunities
- **Services Marketplace** - Professional services (web dev, design, AI/ML, etc.)
- **Projects** - Ready-made college projects with full source code
- **Freelancers** - Browse and hire top-rated freelancers
- **Placement Assistance** - Company-wise preparation and mock interviews
- **Research Help** - Paper formatting, citations, and plagiarism detection

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **State Management**: TanStack React Query
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd Hirenixa

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── JobCard.tsx
├── pages/           # Page components
│   ├── Index.tsx
│   ├── Jobs.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Freelancers.tsx
│   ├── Placement.tsx
│   └── Research.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
└── main.tsx         # Entry point
```

## 🚀 Deployment

The project can be deployed to any static hosting platform:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository and auto-deploy
- **GitHub Pages**: Push to gh-pages branch

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📄 License

MIT
