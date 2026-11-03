# MORENT - Modern Car Rental Platform (Frontend Assignment)

> High-fidelity, fully responsive implementation of the MORENT Car Rental Web Application built with **Semantic HTML5**, **Modern CSS3 (Design Tokens)**, and **TypeScript**.

---

## 📌 Project Overview

This project is a pixel-perfect frontend implementation of two core screens from the MORENT Car Rental Figma design:

1. **Screen 1: Dashboard Admin Car Rent (`index.html` / `dashboard.html`)**
   - Rental map tracking overview & detailed pick-up/drop-off schedule
   - Top 5 Car Rental interactive SVG donut chart with categorized breakdown
   - Recent transaction feed with live pricing & vehicle information
   - Collapsible sidebar with active navigation states and dark mode toggle

2. **Screen 2: Car Detail & Catalog (`car-detail.html`)**
   - Left-hand interactive filter sidebar (Type, Capacity, Dynamic Price Slider)
   - Nissan GT-R feature showcase with responsive interactive thumbnail gallery
   - Detailed car specification sheet & pricing breakdown
   - Expandable user reviews section with star ratings
   - Recent Car and Recommendation Car responsive product card grids
   - Global application footer with structured links

---

## 🚀 Quick Start Guide

You can run this project in two ways:

### Method 1: Immediate Browser Preview (Zero Installation)
Double-click `index.html` or open it directly in any modern web browser (Chrome, Safari, Firefox, Edge). All compiled TypeScript bundles and assets are pre-packaged and ready to run immediately.

### Method 2: Local Development Server (Recommended)

1. **Install dependencies** (optional, dev tooling only):
   ```bash
   npm install
   ```

2. **Start the local server**:
   ```bash
   npm start
   # or
   npm run dev
   ```
   This launches a lightweight, zero-dependency static server:
   - 🌐 **Dashboard Admin**: `http://localhost:3000/index.html`
   - 🚗 **Car Detail & Catalog**: `http://localhost:3000/car-detail.html`

3. **Build / Type-check TypeScript**:
   ```bash
   npm run type-check   # Type-check TypeScript sources
   npm run build        # Compile TypeScript & generate dist/bundle.js
   npm run watch        # Watch mode for TypeScript development
   ```

---

## 📁 Project Structure

```text
ForceWeb/
├── index.html               # Primary Entry Point (Screen 1: Dashboard Admin)
├── dashboard.html           # Direct Alias for Dashboard Admin Screen
├── car-detail.html          # Screen 2: Car Detail & Catalog Screen
├── package.json             # Project metadata, scripts & dependencies
├── tsconfig.json            # TypeScript compiler configuration (ES2022)
├── .gitignore               # Standard Git ignore file
├── README.md                # Project documentation & assignment overview
│
├── src/                     # Modular TypeScript Source Code
│   ├── main.ts              # Application bootstrap & lifecycle orchestrator
│   ├── types.ts             # TypeScript interfaces and type definitions
│   ├── theme.ts             # Dark/Light theme manager with localStorage persistence
│   ├── drawer.ts            # Mobile off-canvas navigation & backdrop manager
│   ├── gallery.ts           # Interactive car thumbnail gallery switcher
│   ├── favorites.ts         # Heart toggle button state handlers
│   ├── slider.ts            # Dynamic price range slider filter
│   ├── reviews.ts           # Expandable reviews accordion controller
│   └── dashboard.ts         # Donut chart interaction & summary counters
│
├── dist/                    # Compiled JavaScript Output
│   ├── bundle.js            # Standalone, single-file bundle loaded in HTML
│   └── *.js, *.d.ts         # Compiled individual module files and declarations
│
├── css/                     # Modular Stylesheets
│   ├── main.css             # Design tokens, variables, typography, header, sidebar & dark theme
│   ├── dashboard.css        # Dashboard-specific layout, map, rental cards & donut chart
│   ├── car-detail.css       # Catalog-specific layout, filter sidebar, gallery & car cards
│   └── responsive.css       # Media queries for Desktop, Laptop, Tablet, and Mobile
│
├── assets/                  # Static Media Assets
│   ├── icons/               # Pixel-perfect Vuesax SVG vector icons (Home, Heart, Bell, Sun, etc.)
│   └── images/              # Optimized images
│       ├── avatars/         # User profile and reviewer avatars
│       ├── cars/            # Vehicle illustrations and interior previews (SVG)
│       └── map-bg.svg       # Vector route map graphic for rental tracking
│
└── scripts/                 # Development & Build Automation
    ├── bundle.js            # Build script to generate unified bundle.js
    └── serve.js             # Zero-dependency local development server
```

---

## ✨ Features & Architecture Highlights

### 1. 100% Responsive Layout
- **Desktop (1440px+)**: Multi-column expansive layout matching Figma specifications.
- **Laptop (1024px – 1439px)**: Optimized grid structures preventing overflow.
- **Tablet (768px – 1023px)**: Adaptive 2-column catalog grids with collapsible filter header.
- **Mobile (375px – 767px)**: Touch-optimized stacked layouts with smooth slide-in navigation drawer.

### 2. Design System & Theming (CSS Variables)
- Built on a comprehensive design token architecture (`css/main.css`) defining:
  - Color palettes (`--primary: #3563E9`, `--secondary: #1A202C`, `--muted: #90A3BF`, etc.)
  - Typography scale with Google Font **Plus Jakarta Sans**
  - Spacing, shadows, and smooth transition timing functions
- **Dark Mode**: Smooth animated theme toggle with persistent state saved in browser `localStorage`.

### 3. Strongly Typed TypeScript
- Zero runtime overhead: cleanly compiled from ES2022 TypeScript.
- Complete type safety covering DOM elements, application state, and component managers.

### 4. Interactive Components
- **Donut Chart**: Precision SVG chart visualizing rental ratios across 5 vehicle categories.
- **Image Gallery**: Clickable thumbnail selector on the Nissan GT-R showcase with active border states.
- **Filter Controls**: Working dual-handle-styled price slider with live counter feedback (`Max. $X.00`).
- **Favorite Hearts**: Interactive toggle with active filled state on all car cards.
- **Reviews Accordion**: "Show All / Show Less" expandable customer review list.

---

## 🛠 Tech Stack

- **Markup**: HTML5 (Semantic elements, accessible ARIA labels)
- **Styling**: CSS3 (Modern Flexbox, CSS Grid, Custom Properties, BEM-inspired naming)
- **Language**: TypeScript 5.0+ (Strict mode, ES Modules)
- **Icons**: Vuesax Vector Icons (SVG)
- **Fonts**: Plus Jakarta Sans (Google Fonts)

---

## 📄 License
This project is submitted as an evaluation assignment. MIT License.

