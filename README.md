# Fitracker 🏋️‍♂️

Fitracker is a modern, premium workout tracking application designed for simplicity and deep insights. It features a glassmorphic UI, real-time analytics, and robust tools for logging exercises.

## ✨ Features

- **Premium UI**: Sleek, glassmorphic design system using Vanilla CSS.
- **Dynamic Dashboard**: 
  - **Volume Over Time**: Monitor your total rep volume per day.
  - **Daily Exercise Splits**: Stacked bar charts showing exactly what exercises are logged per day.
  - **Workout Type Distribution**: Pie chart showing frequency of workout types (Push, Pull, Legs, Endurance, etc.) based on unique days.
- **Workout Logging**:
  - Manual entry with real-time history updates.
  - Bulk import from CSV or Excel (XLSX) files.
  - **Import Staging Area**: Preview and edit imported data before finalizing. No more timezone-shifted dates or typos in your database!
- **Authentication**: Secure user authentication and role-based access using Supabase.
- **Shared Branding**: Unified logo and design system across the entire app.

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (Custom Glassmorphism)
- **Backend/Auth**: Supabase
- **Visuals**: Recharts, Lucide React
- **Data Handling**: Papa Parse (CSV), SheetJS (XLSX)

## 🛠️ Getting Started

### Prerequisites

- Node.js installed
- A Supabase project

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sleshjan/fitracker.git
   cd fitracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_public_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📈 Future Roadmap

- [ ] Advanced progress comparison between workout types.
- [ ] Personalized exercise suggestions.
- [ ] Mobile-optimized view (PWA).

---

Built with ❤️ by [sleshjan](https://github.com/sleshjan)
