# 🎯 Quick Reference Card - Role-Based UI Differences

## At a Glance

### What Each Role Sees

| Aspect                 | Admin                     | Freelancer                  | Customer                  | Guest       |
| ---------------------- | ------------------------- | --------------------------- | ------------------------- | ----------- |
| **Navbar Items**       | Manage All                | Find Jobs + Manage Services | Apply Jobs + Buy Services | Browse Only |
| **Has Edit Buttons**   | ✅ All Content            | ✅ Own Services             | ❌ None                   | ❌ None     |
| **Has Delete Buttons** | ✅ All Content            | ✅ Own Services             | ❌ None                   | ❌ None     |
| **Can Add Content**    | ✅ Jobs/Projects/Services | ✅ Services Only            | ❌ None                   | ❌ None     |
| **Can Purchase**       | ✅ Yes                    | ✅ Yes                      | ✅ Yes                    | ❌ No       |
| **Dashboard URL**      | /admin                    | /freelancer/dashboard       | /user/dashboard           | N/A         |
| **Role Badge**         | 🔴 Red                    | 🟣 Blue                     | 🟢 Green                  | -           |
| **Can Login**          | ✅ Yes                    | ✅ Yes                      | ✅ Yes                    | ❌ No       |

---

## Navigation Menu by Role

### 🔴 ADMIN

```
Home
Manage Jobs ..................... Edit/Delete all jobs
Manage Projects ............... Edit/Delete all projects
Manage Placement ........... Edit/Delete companies & materials
Manage Services ............. Edit/Delete all services
Admin Dashboard ............ System admin panel
       └─ Analytics ............. Platform statistics & metrics
```

### 🟣 FREELANCER

```
Home
Find Jobs ....................... Browse & apply to jobs
My Services ................... Manage own service listings
     └─ Add Service
     └─ Edit Services (inline)
     └─ Delete Services
     └─ View Sales
Placement Help .............. View courses & materials
Browse Services ............ View all available services
Freelancer Dashboard ... View earnings & stats
```

### 🟢 CUSTOMER

```
Home
Apply Jobs ..................... Browse and apply for positions
Buy Projects .................. Purchase college projects
     └─ Download after purchase
Placement Help .............. Access prep materials
Our Services .................. Buy freelancer services
User Dashboard ............ Track purchases & downloads
```

### 👤 GUEST

```
Home
Apply Jobs ..................... View only (login to apply)
College Projects ............ View only (login to purchase)
Placement Help .............. View only (login to download)
Our Services .................. View only (login to purchase)
Contact Us
About Us
[Log In]  [Sign Up]
```

---

## Quick Feature Access Guide

### 👨‍💼 Admin Can:

- ✏️ Create jobs, projects, services, placements
- ✏️ Edit any existing content
- ❌ Delete any content (with confirmation)
- 📊 View platform analytics
- 👥 Manage all user accounts
- 💰 Track platform revenue
- 🔧 Configure system settings

### 💼 Freelancer Can:

- ➕ Create own services
- ✏️ Edit own services
- ❌ Delete own services
- 💵 Track personal earnings
- 📈 View service sales stats
- 📊 Manage service status
- 🎯 Browse and apply for jobs
- 📚 View placement materials

### 🛍️ Customer Can:

- 🔍 Browse all jobs/projects/services
- 💼 Apply for job postings
- 🛒 Purchase projects
- 💳 Buy services
- 📥 Download purchased items
- ⭐ Rate and review services
- ❤️ Save items to wishlist
- 📋 View order history

### 👤 Guest Can:

- 👁️ View all public content (read-only)
- 📄 View job descriptions
- 🎓 View project details
- 📚 View service descriptions
- ❌ Cannot apply, purchase, or download

---

## Sample Page Views

### Jobs Page - What Each Role Sees:

**Admin View:**

```
Job Card [Full Details]
┌────────────────────────────┐
│ [EDIT] [DELETE]            │  ← Can edit/delete
│ Title, Company, Location   │
│ Salary, Tech Stack, etc.   │
└────────────────────────────┘
```

**Freelancer View:**

```
Job Card
┌────────────────────────────┐
│ [APPLY TO JOB]             │  ← Can apply
│ Title, Company, Location   │
│ Salary, Tech Stack, etc.   │
└────────────────────────────┘
```

**Customer View:**

```
Job Card
┌────────────────────────────┐
│ [APPLY TO JOB]             │  ← Can apply
│ Title, Company, Location   │
│ Salary, Tech Stack, etc.   │
└────────────────────────────┘
```

**Guest View:**

```
Job Card
┌────────────────────────────┐
│ [LOGIN TO APPLY]           │  ← Must login
│ Title, Company, Location   │
│ Salary, Tech Stack, etc.   │
└────────────────────────────┘
```

---

## Page Access Control

### Protected Routes

| Route                   | Accessible To       | Redirect If Wrong Role                     |
| ----------------------- | ------------------- | ------------------------------------------ |
| `/admin`                | Admin only          | → /freelancer/dashboard or /user/dashboard |
| `/admin/analytics`      | Admin only          | → /freelancer/dashboard or /user/dashboard |
| `/freelancer/dashboard` | Freelancer only     | → /admin or /user/dashboard                |
| `/freelancer/services`  | Freelancer only     | → /admin or /user/dashboard                |
| `/user/dashboard`       | User/Customer only  | → /admin or /freelancer/dashboard          |
| `/jobs`                 | All logged-in users | Changes features based on role             |
| `/projects`             | All logged-in users | Changes features based on role             |
| `/services`             | All logged-in users | Changes features based on role             |
| `/placement`            | All logged-in users | Changes features based on role             |

---

## UI Element Visibility Matrix

### Edit/Delete Buttons

```
Admin:      ✅ Visible on ALL content items
Freelancer: ✅ Visible ONLY on own services/content
Customer:   ❌ Never visible (read-only)
Guest:      ❌ Never visible
```

### Apply/Purchase Buttons

```
Admin:      ✅ Can apply/purchase (test purposes)
Freelancer: ✅ Can apply/purchase
Customer:   ✅ Can apply/purchase
Guest:      ❌ Disabled (shows "Login to Apply")
```

### Save/Cancel Buttons

```
Admin:      ✅ When editing content
Freelancer: ✅ When editing services
Customer:   ❌ Never editable content
Guest:      ❌ Never editable content
```

### Role Badge

```
Admin:      [🔴 Admin]
Freelancer: [🟣 Freelancer]
Customer:   [🟢 Customer]
Guest:      (None shown)
```

---

## Login Behavior

### Automatic Redirects After Login

```
Admin logs in       → Redirect to /admin
Freelancer logs in  → Redirect to /freelancer/dashboard
Customer logs in    → Redirect to /user/dashboard
```

### Which Services Each Role Has

```
Admin:       Full system access
Freelancer:  Service provider features
Customer:    Consumer features
Guest:       Public views only
```

---

## Key Differences Summary

| Feature             | Admin                         | Freelancer                 | Customer                 |
| ------------------- | ----------------------------- | -------------------------- | ------------------------ |
| **CRUD Operations** | Create/Read/Update/Delete all | Create/Update own services | Read-only                |
| **Dashboard Focus** | System management             | Earnings/Services          | Purchase history         |
| **Main Purpose**    | Platform administration       | Service provision          | Service consumption      |
| **Edit Access**     | All content                   | Own content                | None                     |
| **Delete Access**   | All content                   | Own content                | None                     |
| **View Access**     | Everything                    | Most things                | Purchased items + public |
| **Finance Focus**   | Platform revenue              | Personal earnings          | Order history            |
| **Unique Feature**  | Admin analytics               | Service management         | Download purchases       |

---

## Testing Quick Links

### Create Test Accounts

```
Admin:       admin@hirenixa.com / admin@123
Freelancer:  freelancer@hirenixa.com / freelancer@123
Customer:    user@hirenixa.com / user@123
```

### Test Each Role's Dashboard

```
1. Login as Admin      → Visit /admin (should work)
2. Login as Freelancer → Visit /freelancer/dashboard (should work)
3. Login as Customer   → Visit /user/dashboard (should work)
```

### Test Navigation Changes

```
1. Login as Admin      → Notice "Manage" items in navbar
2. Login as Freelancer → Notice "Find Jobs" and "My Services"
3. Login as Customer   → Notice "Apply Jobs" and "Buy Projects"
```

### Test Edit/Delete Visibility

```
1. Login as Admin      → See [Edit] [Delete] on every item
2. Login as Freelancer → See [Edit] [Delete] only on services
3. Login as Customer   → Don't see any edit/delete buttons
```

---

## Role Badge Identification

Speed quickly identify role in navbar:

```
🔴 RED    = Admin      (System access, all editions)
🟣 BLUE   = Freelancer (Service provider)
🟢 GREEN  = Customer   (Service consumer)
(nothing) = Guest      (Not logged in)
```

---

## Navigation Items Quick Reference

### Admin Sees These Links

```
Home
Manage Jobs
Manage Projects
Manage Placement
Manage Services
Admin Dashboard
```

### Freelancer Sees These Links

```
Home
Find Jobs
My Services
Placement Help
Browse Services
Freelancer Dashboard
```

### Customer Sees These Links

```
Home
Apply Jobs
Buy Projects
Placement Help
Our Services
User Dashboard
```

### Guest Sees These Links

```
Home
Apply Jobs
College Projects
Placement Help
Our Services
Contact Us
About Us
```

---

## 🎯 Bottom Line

**The same features serve different purposes for different users:**

- **Admin** = Platform Manager (sees management tools)
- **Freelancer** = Service Creator (sees earning tools)
- **Customer** = Service Buyer (sees purchase tools)
- **Guest** = Window Shopper (sees preview only)

**Each has:**

- ✅ Different navigation
- ✅ Different dashboard
- ✅ Different buttons visible
- ✅ Different access levels
- ✅ Different color badges
- ✅ Automatic redirects to appropriate area

This ensures every user sees exactly what they need!
