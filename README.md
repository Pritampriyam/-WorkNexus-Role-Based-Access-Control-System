# HIRENIXA - Freelance & Digital Services Marketplace

AI-powered platform connecting students and professionals with freelancers, services, and career opportunities.
delpoyed url :   https://work-nexus-role-based-access-contro.vercel.app/
## 🚀 Features

- **Jobs Board** - Full-time roles, internships, and freelance opportunities
- **Services Marketplace** - Professional services (web dev, design, AI/ML, etc.)
- **Projects** - Ready-made college projects with full source code
- **Freelancers** - Browse and hire top-rated freelancers
- **Placement Assistance** - Company-wise preparation and mock interviews
- **Research Help** - Paper formatting, citations, and plagiarism detection
HIRENIXA is a full-featured frontend application built with React, TypeScript, Tailwind CSS, and Vite. It is designed to be a modern marketplace where students and professionals can discover freelancing services, browse job opportunities, find academic projects, and access placement and research support.

## 🌟 Project Overview

This project is a complete UI application for a digital services marketplace, including:
- Jobs board for full-time, internship, and freelance roles
- Service marketplace for hiring designers, developers, writers, and consultants
- Freelancer directory with profiles and service listings
- Project catalog for popular college and professional projects
- Placement assistance with company-specific preparation materials
- Research tools for paper formatting and citation support

## 🧱 Key Features

- Responsive landing page with animated sections and service highlights
- Route-based navigation using React Router v6
- Reusable and customizable UI components powered by shadcn/ui and Radix
- Interactive forms with validation using React Hook Form and Zod
- Client-side state and data fetching patterns with TanStack React Query
- Rich animation support using Framer Motion
- Tailwind CSS utility styling with custom theme and layout support
- Test-ready setup using Vitest and React Testing Library

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI primitives
- React Router v6
- TanStack React Query
- React Hook Form
- Zod schema validation
- Framer Motion
- Recharts for charts and analytics
- Vitest for testing

## 📦 Installation

### Prerequisites

- Node.js version 18 or higher
- npm (Node Package Manager) included with Node.js

### Setup Steps

From the project root directory:

```bash
cd E:/Development/Project/HIRENIXA-main/HIRENIXA-main
npm install
```

This command installs all required dependencies and devDependencies listed in `package.json`.

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the console to view the app in your browser.

### Build for production

```bash
npm run build
```

Build output is generated in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

## ⚙️ Available npm scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production-ready bundle
- `npm run build:dev` - Build with development mode settings
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint across the project
- `npm test` - Run tests once with Vitest
- `npm run test:watch` - Run Vitest in watch mode

## 📁 Project Structure

```
.
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Static image and icon assets
│   ├── components/          # Reusable components for the UI
│   │   ├── ui/              # shadcn/ui component wrappers
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── JobCard.tsx
│   │   └── ...
│   ├── contexts/            # React context providers
│   │   └── AuthContext.tsx
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Route page components
│   ├── App.tsx              # Application shell and router setup
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
├── .gitignore               # Files and folders excluded from Git
├── package.json             # Dependencies and scripts
├── package-lock.json        # Exact package versions installed
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript compiler config
├── vite.config.ts           # Vite configuration
└── vitest.config.ts         # Vitest configuration
```

## 🔧 Configuration Files

- `package.json` - Lists dependencies, devDependencies, and project scripts
- `vite.config.ts` - Vite application configuration
- `tailwind.config.ts` - Tailwind CSS theme and plugin settings
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` - TypeScript compiler options for app and tooling
- `eslint.config.js` - ESLint rules and plugin settings
- `postcss.config.js` - PostCSS plugins for Tailwind

## ✅ Git and Repository Notes

- `node_modules/` is excluded in `.gitignore`
- Avoid committing generated files from `dist/`
- If you are on Windows and see line ending warnings, Git is only informing you about `LF` ↔ `CRLF` normalization
- Use `npm install` from the repo root, not `npm install` inside subfolders

## 🧪 Testing

Run the unit test suite with:

```bash
npm test
```

Run tests in watch mode while editing code:

```bash
npm run test:watch
```

## 🚀 Deploying

This is a static frontend application and can be deployed to any static hosting provider, including:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 💡 Troubleshooting

If `npm run dev` reports that `vite` is not recognized, make sure dependencies are installed and run:

```bash
npm install
npm exec -- vite --version
```

If the dev server still fails, try removing local dependencies and reinstalling:

```bash
rm -r node_modules package-lock.json
npm install
```

## 🤝 Contribution

If you want to contribute:
- Fork the repository
- Create a feature branch
- Make changes and test locally
- Submit a pull request with a clear description of your work

## 📄 License

This project is released under the MIT License.
