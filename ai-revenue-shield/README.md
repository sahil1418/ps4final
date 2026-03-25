# AI Revenue Protection Platform
### PSBs Hackathon 2026 — Problem Statement 4
**Team Ordinary** | IIIT Allahabad

A cinematic hackathon pitch deck built with React + Framer Motion.

---

## 🚀 Quick Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

Done! Your presentation is live.

---

## 💻 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🎮 Navigation

| Action | Key / Gesture |
|--------|--------------|
| Next slide | `→` Arrow / `Space` / Swipe Left |
| Previous slide | `←` Arrow / Swipe Right |
| Jump to slide | Click the nav dots at the bottom |

---

## 📁 Project Structure

```
src/
├── App.jsx              # Master slide controller + navigation
├── index.css            # Global theme, animations, glass styles
├── main.jsx             # React entry point
├── components/
│   ├── SlideWrapper.jsx # Animated slide transitions
│   ├── GlassCard.jsx    # Reusable glass card components
│   └── TypewriterText.jsx
└── slides/
    ├── TitleSlide.jsx       # Slide 1 — Intro
    ├── ProblemSlide.jsx     # Slide 2 — The Problem
    ├── SolutionSlide.jsx    # Slide 3 — Our Solution
    ├── PipelineSlide.jsx    # Slide 4 — End-to-End Pipeline
    ├── TechSlide.jsx        # Slide 5 — Technical Architecture
    ├── FeasibilitySlide.jsx # Slide 6 — Feasibility & Compliance
    ├── ImpactSlide.jsx      # Slide 7 — Impact & Numbers
    ├── BusinessSlide.jsx    # Slide 8 — Business Model
    ├── ResearchSlide.jsx    # Slide 9 — Research & References
    └── ClosingSlide.jsx     # Slide 10 — Thank You
```

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Framer Motion** — animations
- **react-countup** — animated numbers
- **Tailwind CSS** — styling
- **Lucide React** — icons
- **Outfit + JetBrains Mono** — typography

---

*Built with ❤️ for PSBs Hackathon 2026*
