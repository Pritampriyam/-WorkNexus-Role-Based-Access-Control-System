# 🎯 HIRENIXA Role-Based UI Comparison & Feature Guide

## Quick Visual Reference: What Each Role Sees

---

## 1️⃣ ADMIN USER 🔐

### Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│ ⚡ HIRENIXA │ Home │ Manage Jobs │ Manage Projects │ Manage      │
│ Placement │ Manage Services │ All Users Dashboard │ [Admin]     │
│ Dashboard │ Logout                                              │
└─────────────────────────────────────────────────────────────────┘
```

### Available Pages & Routes

| Route              | Purpose                 | CRUD Buttons             |
| ------------------ | ----------------------- | ------------------------ |
| `/`                | Home page               | View only                |
| `/jobs`            | Manage all job postings | ✏️ Edit ❌ Delete ➕ Add |
| `/projects`        | Manage all projects     | ✏️ Edit ❌ Delete ➕ Add |
| `/placement`       | Manage placements       | ✏️ Edit ❌ Delete ➕ Add |
| `/services`        | Manage all services     | ✏️ Edit ❌ Delete ➕ Add |
| `/admin`           | Main dashboard          | Full control             |
| `/admin/analytics` | Platform analytics      | View statistics          |

### Key Actions Available

**On Cards/List Items:**

```
┌─────────────────────────────────────┐
│  Job Title: "React Developer"       │
│  Company: TechCorp 🏢              │
│  Salary: ₹8-12 LPA                 │
│  [✏️ Edit]  [❌ Delete]  [Statistics] │
└─────────────────────────────────────┘
```

**In Inline Edit Mode:**

```
┌───────────────────────────────────────────┐
│ Edit Mode (Highlighted Border)            │
│                                           │
│ Job Title: [________________]             │
│ Company: [________________]               │
│ Salary: [________________]                │
│ Batch: [Select ▼]                        │
│ Tech Stack: [____________, _______]      │
│ Deadline: [Date Picker]                  │
│ Difficulty: [Select ▼]                   │
│                                           │
│ [✅ Save]  [❌ Cancel]                    │
└───────────────────────────────────────────┘
```

### Dashboard Elements (Admin Panel)

**Statistics Cards:**

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Total Users  │  │ Total Jobs   │  │ Total Revenue│
│    2,847     │  │     145      │  │   ₹54,320    │
│   (+12.5%)   │  │    (+8.2%)   │  │   (+5.1%)    │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Freelancers  │  │ Projects Sold│  │ Avg Rating   │
│     423      │  │     89       │  │   4.7 ⭐     │
│   (+6.3%)    │  │    (+12%)    │  │   (+0.2)     │
└──────────────┘  └──────────────┘  └──────────────┘
```

**User Management:**

```
┌────────────────────────────────────────────────────┐
│ Users List - Filter: [Role ▼] [Status ▼] [Search] │
├────────────────────────────────────────────────────┤
│ ✓ Rajesh Kumar          | Admin      | Active     │ ✏️ ❌
│ ✓ Priya Singh           | Freelancer | Active     │ ✏️ ❌
│ ✓ Amit Patel            | User       | Active     │ ✏️ ❌
│ ✓ Neha Sharma           | User       | Suspended  │ ✏️ ❌
└────────────────────────────────────────────────────┘
```

---

## 2️⃣ FREELANCER USER 💼

### Navigation Bar

```
┌─────────────────────────────────────────────────────────────┐
│ ⚡ HIRENIXA │ Home │ Find Jobs │ My Services │ Placement    │
│ Help │ Browse Services │ Freelancer Dashboard │            │
│ [💼 Freelancer]  Dashboard │ Logout                         │
└─────────────────────────────────────────────────────────────┘
```

### Available Pages & Routes

| Route                   | Purpose             | Can Perform              |
| ----------------------- | ------------------- | ------------------------ |
| `/`                     | Home page           | View                     |
| `/jobs`                 | Browse job postings | View & Apply             |
| `/services`             | Browse all services | View & Buy               |
| `/placement`            | View placement help | View & Download          |
| `/freelancer/dashboard` | Earnings & stats    | View                     |
| `/freelancer/services`  | Manage own services | ✏️ Edit ❌ Delete ➕ Add |

### Freelancer Dashboard (`/freelancer/dashboard`)

**Statistics:**

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ Total Earnings  │  │ Active Services │  │ Total Orders    │
│    ₹45,200      │  │        8        │  │      32         │
│ (₹1,200/day)    │  │  (2 Pending)    │  │  (+5 this week) │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────┐
│ Average Rating  │
│     4.8 ⭐      │
│ (142 reviews)   │
└─────────────────┘
```

**Services List:**

```
┌──────────────────────────────────────┐
│ "Web Development - MERN Stack"       │ [Edit] [Delete]
│ ₹5,000 | 7 days delivery             │
│ Status: [Active] | Sales: 12         │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│                                      │
│ "UI Design - Figma & Adobe XD"       │ [Edit] [Delete]
│ ₹3,000 | 5 days delivery             │
│ Status: [Pending Review] | Sales: 0  │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
└──────────────────────────────────────┘
```

### Freelancer Services Page (`/freelancer/services`) ✨ NEW

**Statistics at Top:**

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 💵 Total Earnings│  │ 📦 Active Servs  │  │ 🏷️ Total Sales  │
│    ₹45,200       │  │       8          │  │      32          │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Service Cards with Edit/Delete:**

```
┌─────────────────────────────────────────────────┐
│ 🟦 Full-Stack Web Development   [Edit] [Delete] │ (hover)
│                                                 │
│ Build modern web applications with React &     │
│ Node.js. Full-stack solution with database     │
│ design, deployment, and documentation.         │
│                                                 │
│ ₹5,000                           7 days        │
│ Status: [Active]                 Sales: 12     │
└─────────────────────────────────────────────────┘
```

**Edit Form (Inline):**

```
┌──────────────────────────────────────────────┐
│ ✏️ Editing Service            [Save] [Cancel] │
├──────────────────────────────────────────────┤
│ Service Title:                                │
│ [_____________________________________]       │
│                                              │
│ Description:                                 │
│ [__________________________________]         │
│ [__________________________________]         │
│                                              │
│ Price (₹): [_______]  Delivery: [7 days]    │
│                                              │
│ Category: [Web Development    ▼]            │
│ Status: [Active               ▼]            │
│                                              │
│          [✅ Save]  [❌ Cancel]              │
└──────────────────────────────────────────────┘
```

---

## 3️⃣ CUSTOMER/USER 🛍️

### Navigation Bar

```
┌─────────────────────────────────────────────────────────────┐
│ ⚡ HIRENIXA │ Home │ Apply Jobs │ Buy Projects │ Placement  │
│ Help │ Our Services │ User Dashboard │                      │
│ [🛍️ Customer]  Dashboard │ Logout                          │
└─────────────────────────────────────────────────────────────┘
```

### Available Pages & Routes

| Route             | Purpose        | Can Perform     |
| ----------------- | -------------- | --------------- |
| `/`               | Home page      | View            |
| `/jobs`           | Browse jobs    | View & Apply    |
| `/projects`       | Buy projects   | View & Purchase |
| `/placement`      | Placement help | View & Download |
| `/services`       | Buy services   | View & Purchase |
| `/user/dashboard` | Order history  | View Downloads  |

### User Dashboard (`/user/dashboard`)

**Statistics:**

```
┌───────────────────┐  ┌───────────────────┐
│ Total Orders      │  │ Completed Orders  │
│      8            │  │       7           │
│ (₹12,400 spent)   │  │ (Ready to download)
└───────────────────┘  └───────────────────┘

┌───────────────────┐  ┌───────────────────┐
│ Saved Jobs        │  │ Total Spent       │
│      5            │  │  ₹12,400          │
│ (Ready to apply)  │  │ (This month: ₹3,200)
└───────────────────┘  └───────────────────┘
```

**Quick Access Links:**

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ 🔍 Browse      │  │ 💼 Apply for   │  │ 🎓 Placement   │  │ 🛠️ Browse      │
│  Projects      │  │  Jobs          │  │  Help          │  │ Our Services   │
│ [Browse Now]   │  │ [View Jobs]    │  │ [Learn More]   │  │ [Shop Now]     │
└────────────────┘  └────────────────┘  └────────────────┘  └────────────────┘
```

**Recent Orders:**

```
┌───────────────────────────────────────────────────────────┐
│ Recent Orders                                             │
├───────────────────────────────────────────────────────────┤
│ ✓ "React - Complete Course" - ₹799                       │
│   Status: Downloaded ✅  | Date: 15 Feb 2026             │
│   [Download] [View Details]                              │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔          │
│                                                           │
│ ⏳ "Full-Stack Development" - ₹4,000                     │
│   Status: Pending 🔄  | Delivery: 22 Feb 2026           │
│   [Wait for Delivery]                                    │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔          │
│                                                           │
│ ✓ "Placement Course - Premium" - ₹2,999                 │
│   Status: Downloaded ✅  | Date: 8 Feb 2026             │
│   [Download] [View Details]                              │
└───────────────────────────────────────────────────────────┘
```

### Jobs Page (User View - No Edit/Delete)

```
┌──────────────────────────────────────┐
│ 🏢 "Senior Developer"                │
│ TechCorp 🏢 | ₹12-15 LPA             │
│ Bangalore | Full-time | 2024 batch   │
│ Tech: React, Node.js, PostgreSQL     │
│                                      │
│ Applications: 87 | Expires in 5 days │
│                                      │
│ [❤️ Save]  [📧 Apply]               │
└──────────────────────────────────────┘
```

---

## 4️⃣ GUEST USER 👤 (Not Logged In)

### Navigation Bar

```
┌──────────────────────────────────────────────────────────┐
│ ⚡ HIRENIXA │ Home │ Apply Jobs │ College Projects │      │
│ Placement Help │ Our Services │ Contact Us │ About Us   │
│ [Log In]  [Sign Up]                                   │
└──────────────────────────────────────────────────────────┘
```

### Available Pages & Routes

| Route        | Purpose                     |
| ------------ | --------------------------- |
| `/`          | Home page                   |
| `/jobs`      | View jobs (no apply)        |
| `/projects`  | View projects (no purchase) |
| `/placement` | View placement info         |
| `/services`  | View services (no purchase) |
| `/about`     | About company               |
| `/contact`   | Contact form                |

### Jobs Page (Guest View - Limited Access)

```
┌──────────────────────────────────────┐
│ 🏢 "Senior Developer"                │
│ TechCorp 🏢 | ₹12-15 LPA             │
│ Bangalore | Full-time | 2024 batch   │
│ Tech: React, Node.js, PostgreSQL     │
│                                      │
│ Applications: 87 | Expires in 5 days │
│                                      │
│ [📧 Login to Apply]                 │
└──────────────────────────────────────┘
```

---

## 🔄 PERMISSION MATRIX

### Feature Access by Role

| Feature              | Admin | Freelancer | User | Guest |
| -------------------- | ----- | ---------- | ---- | ----- |
| **Jobs Page**        |
| View Jobs            | ✅    | ✅         | ✅   | ✅    |
| Apply for Jobs       | ✅    | ✅         | ✅   | ❌    |
| Create Jobs          | ✅    | ❌         | ❌   | ❌    |
| Edit Jobs            | ✅    | ❌         | ❌   | ❌    |
| Delete Jobs          | ✅    | ❌         | ❌   | ❌    |
| **Projects Page**    |
| View Projects        | ✅    | ✅         | ✅   | ✅    |
| Buy Projects         | ✅    | ✅         | ✅   | ❌    |
| Create Projects      | ✅    | ❌         | ❌   | ❌    |
| Edit Projects        | ✅    | ❌         | ❌   | ❌    |
| Delete Projects      | ✅    | ❌         | ❌   | ❌    |
| **Services Page**    |
| View Services        | ✅    | ✅         | ✅   | ✅    |
| Buy Services         | ✅    | ✅         | ✅   | ❌    |
| Create Services      | ✅    | ✅         | ❌   | ❌    |
| Edit Services        | ✅    | ✅\*       | ❌   | ❌    |
| Delete Services      | ✅    | ✅\*       | ❌   | ❌    |
| **My Services**      |
| Access Page          | ❌    | ✅         | ❌   | ❌    |
| Manage Services      | ❌    | ✅         | ❌   | ❌    |
| View Earnings        | ❌    | ✅         | ❌   | ❌    |
| **Dashboards**       |
| Admin Dashboard      | ✅    | ❌         | ❌   | ❌    |
| Analytics Page       | ✅    | ❌         | ❌   | ❌    |
| Freelancer Dashboard | ❌    | ✅         | ❌   | ❌    |
| User Dashboard       | ❌    | ❌         | ✅   | ❌    |
| **Placement Page**   |
| View Materials       | ✅    | ✅         | ✅   | ✅    |
| Download Materials   | ✅    | ✅         | ✅   | ❌    |
| Manage Companies     | ✅    | ❌         | ❌   | ❌    |
| Manage Services      | ✅    | ❌         | ❌   | ❌    |

\*Freelancer can only edit own services

---

## 📊 ROLE BADGES (Navbar Display)

```
┌─────────────────────────────────────────────────────────────┐
│ User Name    [🔴 Admin]      or  [🟣 Freelancer]  or [🟢 Customer] │
└─────────────────────────────────────────────────────────────┘
```

**Badge Colors:**

- 🔴 **Admin** - Red (bg-red-500/20, text-red-600)
- 🟣 **Freelancer** - Purple/Blue (bg-blue-500/20, text-blue-600)
- 🟢 **Customer** - Green (bg-green-500/20, text-green-600)

---

## ⚡ LOGIN REDIRECTS

```
Admin logs in        → /admin            (Admin Dashboard)
Freelancer logs in   → /freelancer/dashboard  (Earnings Dashboard)
User logs in         → /user/dashboard   (Purchase Dashboard)
Guest visit          → /                 (Home Page)
```

---

## 🎨 UI COMPONENT VISIBILITY

### Navbar Components

```
Logo                  → All roles
Navigation Links      → Different per role ✅
User Name            → All logged-in users ✅
Role Badge           → All logged-in users ✅
Dashboard Button     → All logged-in users ✅
Logout Button        → All logged-in users ✅
Login/Sign Up        → Guests only ✅
```

### Page Buttons

```
Edit Button          → Admin & Freelancer (own content)
Delete Button        → Admin & Freelancer (own content)
Apply Button         → Freelancer & User
Save Button          → Appears in edit mode
Cancel Button        → Appears in edit mode
Add New              → Admin & Freelancer
Download            → User (for purchased items)
```

### Form Fields

```
Create Forms         → Admin & Freelancer
Edit Forms (Inline)  → Admin & Freelancer
Search Filters       → All users
Status Badges        → All users (different meaning per role)
```

---

This visual guide demonstrates how the Hirenixa platform provides a completely customized experience based on user role, from navigation to available features to specific UI elements. Each role sees only what's relevant to them, creating a focused and professional user experience.
