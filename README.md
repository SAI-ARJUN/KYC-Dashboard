# KYC Dashboard

A responsive and interactive **KYC Dashboard** built with **Next.js**, **Tailwind CSS**, and **Recharts**.  
This project recreates the provided KYC dashboard UI while demonstrating **component-based architecture**, **dynamic data handling**, and **responsive design**.

---

## 🚀 Features

### 📌 UI Layout
- **Sidebar Navigation** with active link highlighting
- **Top Navbar** with breadcrumb, search bar, notifications, and profile/date section
- **Dashboard Sections:**
  - Total KYCs (New & Modified with percentage change)
  - KYC Status Cards
  - Bar Chart (Individual vs Non-Individual comparison)
  - Categories (RI & NRI progress bars)
  - Circular Chart (Solicited & Unsolicited)
  - PAN & Data Stats

### ⚙️ Functionality
- Tab Switching:
  - Time range: Today, This Month, Custom (with date picker)
  - View type: Individual / Non-Individual
- Responsive Design:
  - Mobile-friendly layout
  - Collapsible sidebar for smaller screens
- Dynamic Data Loading:
  - All charts and stats load from mock API data
- Bonus:
  - Dark Mode
  - Interactive charts with tooltips

---

## 🛠️ Tech Stack

- **Next.js 14+** (App Router)
- **Tailwind CSS**
- **Lucide Icons**
- **Recharts** (for charts)
- **Mock API** via Next.js API Routes

---

## 📂 Project Structure
kyc-dashboard/
│
kyc-dashboard/
│
├── app/
│   ├── api/
│   │   └── data/route.ts           # Mock API endpoint returning dashboard data
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DashboardTabs.tsx
│   │   ├── TotalKycSection.tsx
│   │   ├── StatusCards.tsx
│   │   ├── BarChartCard.tsx
│   │   ├── Categories.tsx
│   │   ├── CircularChartCard.tsx
│   │   └── PanStats.tsx
│   └── page.tsx                    # Main dashboard page
│
├── public/                         # Static assets
├── styles/
│   └── globals.css                  # Tailwind + custom global styles
├── package.json
├── tailwind.config.js
└── README.md
