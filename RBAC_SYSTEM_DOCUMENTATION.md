## HIRENIXA - Role-Based Access Control (RBAC) System Documentation

### Overview

Hirenixa implements a comprehensive, enterprise-standard role-based access control system with three main user roles: **Admin**, **Freelancer**, and **User/Customer**. Each role has distinct UI, navigation, pages, and features.

---

## 1. ROLE HIERARCHY & PERMISSIONS

### **Admin Role** 🔐

**Purpose:** Complete platform management and control
**Access Level:** Unrestricted (can access all admin features)

**Key Permissions:**

- ✅ Create, read, update, delete all content (jobs, projects, services, placements)
- ✅ User account management and moderation
- ✅ View platform analytics and reporting
- ✅ Content moderation and approval
- ✅ Revenue and transaction tracking
- ✅ System configuration and settings
- ✅ All admin-only pages and dashboards

### **Freelancer Role** 💼

**Purpose:** Service providers offering skills and expertise
**Access Level:** Limited to own profile and specified pages

**Key Permissions:**

- ✅ Create and manage own service offerings
- ✅ Browse available job postings
- ✅ Track personal earnings and sales analytics
- ✅ Manage service reviews and ratings
- ✅ View placement opportunities and training materials
- ✅ Customize profile and portfolio
- ❌ Cannot access admin features
- ❌ Cannot manage other users' content

### **User/Customer Role** 🛍️

**Purpose:** Product consumers and service buyers
**Access Level:** Limited to browsing and purchasing

**Key Permissions:**

- ✅ Browse and apply for job postings
- ✅ Purchase college projects
- ✅ Access placement preparation materials
- ✅ Buy professional services from freelancers
- ✅ Track order history and download purchases
- ✅ Rate and review freelancer services
- ❌ Cannot create or edit content
- ❌ Cannot access freelancer features

---

## 2. NAVIGATION BAR (UI Customization by Role)

### **Navigation Structure**

The navbar dynamically changes based on user role:

#### 🔐 Admin Navigation

```
HIRENIXA Logo (Dashboard) | Home | Manage Jobs | Manage Projects |
Manage Placement | Manage Services | All Users Dashboard

User: [Admin Badge] | Dashboard | Logout
```

**Admin-Only Links:**

- `/admin` - Main admin dashboard
- `/admin/analytics` - Platform analytics (NEW)
- Edit/Delete buttons in all management pages
- User management interface
- Revenue reporting

#### 💼 Freelancer Navigation

```
HIRENIXA Logo (Dashboard) | Home | Find Jobs | My Services |
Placement Help | Browse Services

User: [Freelancer Badge] | Dashboard | Logout
```

**Freelancer-Only Links:**

- `/freelancer/dashboard` - Service management dashboard
- `/freelancer/services` - Service management page (NEW)
- View own earnings
- Browse jobs to apply

#### 🛍️ Customer/User Navigation

```
HIRENIXA Logo (Dashboard) | Home | Apply Jobs | Buy Projects |
Placement Help | Our Services

User: [Customer Badge] | Dashboard | Logout
```

**Customer-Only Links:**

- `/user/dashboard` - Purchase history
- `/jobs` - Job applications
- `/projects` - Project purchases
- `/placement` - Preparation materials
- `/services` - Service browsing

#### 👤 Guest Navigation (No Login)

```
HIRENIXA Logo (Home) | Home | Apply Jobs | College Projects |
Placement Help | Our Services | Contact Us | About Us

[Log In] [Sign Up]
```

---

## 3. DASHBOARD PAGES BY ROLE

### **Admin Dashboard** (`/admin`)

**Full Platform Control Interface**

**Features:**

- 📊 System-wide statistics
  - Total users count
  - Active jobs, projects, services
  - Platform revenue
  - User engagement metrics

- 👥 User Management
  - View all registered users
  - Filter by role (admin, freelancer, user)
  - Suspend/activate accounts
  - Edit user profiles
  - View user activity history

- 📝 Content Management
  - Edit any job posting
  - Modify project details
  - Update service offerings
  - Review and approve placements
  - Delete inappropriate content

- 💰 Revenue & Analytics
  - Transaction history
  - Service sales tracking
  - Payment settlement
  - Tax reporting
  - Performance trends

- ⚙️ System Settings
  - Platform configuration
  - Feature toggles
  - Email settings
  - Payment gateway configuration
  - Security settings

**Additional Admin Page:**

- `/admin/analytics` - Detailed analytics dashboard (NEW)
  - User growth metrics
  - Role distribution
  - Feature utilization reports
  - System performance statistics

---

### **Freelancer Dashboard** (`/freelancer/dashboard`)

**Service Provider Management Hub**

**Current Features:**

- 💵 Earnings Tracking
  - Total earnings (sum of sales × price)
  - Average rating
  - Total orders/sales count
  - Monthly earnings chart

- 🎯 Quick Actions
  - Add new service
  - Edit profile
  - View analytics
  - Check messages

- 📦 Services Overview
  - List of all created services
  - Status indicators (active, pending, rejected)
  - Earnings per service
  - Order count per service

---

### **Freelancer Services Page** (`/freelancer/services`) ✨ NEW

**Comprehensive Service Management Interface**

**Features:**

- 📊 Service Statistics
  - Total earnings from all services
  - Number of active services
  - Total sales count

- ➕ Add/Edit/Delete Services
  - Create new service with inline form
  - Edit existing services with all fields
  - Delete services with confirmation
  - Status management (active, pending, paused)

- 📋 Service Details Editable
  - Service title
  - Description
  - Price (₹)
  - Delivery time (e.g., "3 days")
  - Category selection
  - Premium/regular toggle
  - Sales count display

- 🎨 UI Elements
  - Inline edit forms
  - Save/Cancel buttons
  - Edit/Delete buttons on hover
  - Service status badges
  - Empty state with CTA

---

### **Customer/User Dashboard** (`/user/dashboard`)

**Purchase & Engagement Hub**

**Features:**

- 📊 User Statistics
  - Total orders placed
  - Completed orders
  - Saved jobs count
  - Total spent (₹)

- 📦 Quick Access Links
  - Browse projects
  - Apply for jobs
  - Get placement help
  - Browse services

- 🛒 Recent Orders
  - List of recent purchases
  - Order status tracking
  - Download links for completed orders
  - Date and price information

- ❤️ Saved Items
  - Saved job postings
  - Saved services
  - Quick apply/purchase buttons

---

## 4. ROLE-SPECIFIC PAGES & FEATURES

### **Pages with Role-Based Access Control**

| Page                    | Admin          | Freelancer     | User           | Guest       | Admin Features               |
| ----------------------- | -------------- | -------------- | -------------- | ----------- | ---------------------------- |
| `/jobs`                 | ✅ Manage      | ✅ Browse      | ✅ Apply       | ✅ View     | ✏️ Edit/Delete jobs          |
| `/projects`             | ✅ Manage      | ✅ Browse      | ✅ Buy         | ✅ View     | ✏️ Edit/Delete projects      |
| `/placement`            | ✅ Manage      | ✅ View        | ✅ View        | ✅ View     | ✏️ Edit companies & services |
| `/services`             | ✅ Manage      | ✅ Browse      | ✅ Buy         | ✅ View     | ✏️ Edit/Delete services      |
| `/admin`                | ✅ Full Access | ❌ Redirect    | ❌ Redirect    | ❌ Redirect | Dashboard                    |
| `/admin/analytics`      | ✅ Full Access | ❌ Redirect    | ❌ Redirect    | ❌ Redirect | Analytics                    |
| `/freelancer/dashboard` | ❌ Redirect    | ✅ Full Access | ❌ Redirect    | ❌ Redirect | Earnings, services           |
| `/freelancer/services`  | ❌ Redirect    | ✅ Full Access | ❌ Redirect    | ❌ Redirect | Service CRUD                 |
| `/user/dashboard`       | ❌ Redirect    | ❌ Redirect    | ✅ Full Access | ❌ Redirect | Orders, wishlist             |

### **CRUD Operations by Role**

#### Jobs Page

- **Admin:** Can create, read, update, delete all jobs
- **Freelancer:** Can view and apply to jobs
- **User:** Can view and apply to jobs
- **Guest:** Can view all jobs (no apply)

#### Projects Page

- **Admin:** Can create, read, update, delete all projects
- **Freelancer:** Can view and browse projects
- **User:** Can view and purchase projects
- **Guest:** Can view but cannot purchase

#### Placement Page

- **Admin:** Can manage company materials and services
- **Freelancer:** Can view placement materials and services
- **User:** Can view placement materials and services
- **Guest:** Can view but limited access to downloads

#### Services Page

- **Admin:** Can manage all services
- **Freelancer:** Can manage own services (new path `/freelancer/services`)
- **User:** Can browse and purchase services
- **Guest:** Can browse but cannot purchase

---

## 5. KEY UI DIFFERENCES BY ROLE

### **Role Badge in Navbar** ✨

Each logged-in user sees a color-coded role badge:

```
🔴 Admin    - Red badge (bg-red-500/20 text-red-600)
🟣 Freelancer - Purple badge (bg-blue-500/20 text-blue-600)
🟢 Customer  - Green badge (bg-green-500/20 text-green-600)
```

### **Dashboard Links**

- Admin: "Dashboard" → `/admin`
- Freelancer: "Dashboard" → `/freelancer/dashboard`
- User: "Dashboard" → `/user/dashboard`

### **Edit/Delete Buttons**

- **Admin:** Visible on all list items and cards
- **Freelancer:** Only visible on own services
- **User:** Not visible (read-only access)

### **Action Buttons**

- **Admin:** Full CRUD buttons (Add, Edit, Delete, Save, Cancel)
- **Freelancer:** Service management buttons (Add Service, Edit, Delete)
- **User:** Purchase/download buttons (no edit capability)

---

## 6. DATA PERSISTENCE BY ROLE

### **localStorage Keys by Role**

#### Admin Data

```
hirenixa_jobs              - All job postings
hirenixa_projects          - All projects
hirenixa_placement_companies - Company materials
hirenixa_placement_services - Placement services
hirenixa_services          - All services
currentUser                - Current logged-in user
users                      - All registered users
```

#### Freelancer Data

```
freelancer_{userId}_services - Own services only
freelancer_{userId}_earnings - Earnings tracking
currentUser                   - Current freelancer user
```

#### User Data

```
user_{userId}_orders       - Purchase history
user_{userId}_saved_jobs   - Saved job postings
user_{userId}_saved_items  - Wishlist/saved services
currentUser                - Current user
```

---

## 7. PROTECTED ROUTES & REDIRECTS

### **Route Protection Logic**

```typescript
/admin                    → ProtectedRoute requireAdmin
↓ Admin: Access granted
↓ Freelancer: Redirect → /freelancer/dashboard
↓ User: Redirect → /user/dashboard
↓ Guest: Redirect → /login

/freelancer/dashboard     → ProtectedRoute allowedRoles={["freelancer"]}
↓ Freelancer: Access granted
↓ Others: Redirect to appropriate role dashboard

/user/dashboard           → ProtectedRoute allowedRoles={["user", "customer"]}
↓ User/Customer: Access granted
↓ Others: Redirect to appropriate role dashboard
```

### **Automatic Redirects After Login**

1. Admin logs in → `/admin`
2. Freelancer logs in → `/freelancer/dashboard`
3. User logs in → `/user/dashboard`

---

## 8. FEATURE UTILIZATION CHECKLIST

### **Admin Features** 🔐

- ✅ Platform analytics dashboard
- ✅ User management interface
- ✅ CRUD for all content
- ✅ Revenue tracking
- ✅ Content moderation
- ✅ System-wide statistics
- ✅ Role-specific navigation
- ✅ Admin-only pages

### **Freelancer Features** 💼

- ✅ Service management page (NEW)
- ✅ Earnings tracking
- ✅ Service CRUD operations
- ✅ Sales analytics
- ✅ Profile customization
- ✅ Job browsing
- ✅ Placement material access
- ✅ Role badge display

### **User Features** 🛍️

- ✅ Dashboard for purchases
- ✅ Order history tracking
- ✅ Job applications
- ✅ Service purchases
- ✅ Project purchases
- ✅ Ratings and reviews
- ✅ Wishlist/saved items
- ✅ Download purchase receipts

---

## 9. INDUSTRY STANDARDS IMPLEMENTED

### **Authentication & Authorization**

✅ Role-based access control (RBAC)
✅ Protected routes with auth guards
✅ Automatic role-based redirects
✅ Session management with localStorage

### **Navigation UX**

✅ Context-aware navigation menus
✅ Role badges with color coding
✅ Smart dashboard routing
✅ Breadcrumb navigation

### **Data Security**

✅ Client-side localStorage isolation by user role
✅ Protected API routes (ready for backend)
✅ Restricted CRUD operations per role
✅ Form validation on client

### **User Experience**

✅ Consistent UI across role-specific pages
✅ Inline editing for admin/freelancer
✅ Status indicators and badges
✅ Empty states with CTAs
✅ Loading states and animations

### **Accessibility**

✅ Semantic HTML
✅ ARIA labels on buttons
✅ Keyboard navigation support
✅ Color contrast compliance
✅ Mobile responsive design

---

## 10. FUTURE ENHANCEMENTS

**Backend Integration:**

- Move localStorage to secure backend database
- Implement JWT token authentication
- Add role-based API endpoints
- Database-backed user sessions

**Advanced Features:**

- Multi-admin hierarchy (super-admin, moderator)
- Role-specific API rate limiting
- Audit logs for admin actions
- Subscription tiers for freelancers
- KYC/verification workflows

**Analytics:**

- Role-based analytics dashboard
- User engagement metrics
- Revenue forecasting
- Fraud detection

---

## 11. TESTING CREDENTIALS

**Admin Account:**

```
Email: admin@hirenixa.com
Password: admin@123
Dashboard: /admin
```

**Freelancer Account:**

```
Email: freelancer@hirenixa.com
Password: freelancer@123
Dashboard: /freelancer/dashboard
Services: /freelancer/services (NEW)
```

**User Account:**

```
Email: user@hirenixa.com
Password: user@123
Dashboard: /user/dashboard
```

---

## 12. FILE STRUCTURE

### **New Files Created:**

- `src/pages/FreelancerServices.tsx` - Freelancer service management
- `src/pages/AdminAnalytics.tsx` - Admin analytics dashboard

### **Modified Files:**

- `src/components/Navbar.tsx` - Role-based navigation
- `src/App.tsx` - New routes added
- All existing pages - Better role-aware UI

### **Core RBAC Files:**

- `src/contexts/AuthContext.tsx` - Authentication logic
- `src/components/ProtectedRoute.tsx` - Route protection
- `src/components/ProtectedRoute.tsx` - Role validation

---

This comprehensive RBAC system ensures that Hirenixa operates with enterprise-standard access control, providing different experiences for admins, freelancers, and customers while maintaining security and usability.
