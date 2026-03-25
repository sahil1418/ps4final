import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import TitleSlide from './slides/TitleSlide.jsx'
import ProblemSlide from './slides/ProblemSlide.jsx'
import SolutionSlide from './slides/SolutionSlide.jsx'
import PipelineSlide from './slides/PipelineSlide.jsx'
import TechSlide from './slides/TechSlide.jsx'
import FeasibilitySlide from './slides/FeasibilitySlide.jsx'
import ImpactSlide from './slides/ImpactSlide.jsx'
import BusinessSlide from './slides/BusinessSlide.jsx'
import ResearchSlide from './slides/ResearchSlide.jsx'
import ClosingSlide from './slides/ClosingSlide.jsx'

const SLIDES = [
  { component: TitleSlide,       label: 'Intro',        accent: '#818cf8' },
  { component: ProblemSlide,     label: 'Problem',      accent: '#fb7185' },
  { component: SolutionSlide,    label: 'Solution',     accent: '#818cf8' },
  { component: PipelineSlide,    label: 'Pipeline',     accent: '#22d3ee' },
  { component: TechSlide,        label: 'Architecture', accent: '#a78bfa' },
  { component: FeasibilitySlide, label: 'Feasibility',  accent: '#34d399' },
  { component: ImpactSlide,      label: 'Impact',       accent: '#34d399' },
  { component: BusinessSlide,    label: 'Business',     accent: '#fbbf24' },
  { component: ResearchSlide,    label: 'Research',     accent: '#818cf8' },
  { component: ClosingSlide,     label: 'Thank You',    accent: '#22d3ee' },
]

const slideVariants = {
  enter:  (d) => ({ opacity: 0, y: d > 0 ? 48 : -48, scale: 0.98 }),
  center: { opacity: 1, y: 0, scale: 1 },
  exit:   (d) => ({ opacity: 0, y: d > 0 ? -36 : 36, scale: 0.98 }),
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showHint, setShowHint] = useState(true)
  const touchRef = useRef(null)
  const transitioning = useRef(false)

  const goTo = useCallback((next) => {
    if (transitioning.current || next < 0 || next >= SLIDES.length) return
    transitioning.current = true
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
    setTimeout(() => { transitioning.current = false }, 700)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Keyboard
  useEffect(() => {
    const fn = (e) => {
      if (['ArrowRight', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); next() }
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [next, prev])

  // Hide hint after 4s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(t)
  }, [])

  // Touch swipe
  const onTouchStart = (e) => { touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }
  const onTouchEnd   = (e) => {
    if (!touchRef.current) return
    const dx = e.changedTouches[0].clientX - touchRef.current.x
    const dy = e.changedTouches[0].clientY - touchRef.current.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) { dx < 0 ? next() : prev() }
    touchRef.current = null
  }

  const SlideComponent = SLIDES[current].component
  const accent = SLIDES[current].accent
  const progress = ((current + 1) / SLIDES.length) * 100

  return (
    <div
      className="w-full h-screen overflow-hidden relative select-none"
      style={{ background: '#020617' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Ambient glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="ambient-glow-3" />
      <div className="noise-overlay" />

      {/* Per-slide accent bloom */}
      <motion.div
        key={`accent-${current}`}
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 100%, ${accent}08 0%, transparent 70%)`,
        }}
      />

      {/* Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative z-10"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* ─── Progress bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 h-[3px] progress-track z-50">
        <motion.div
          className="progress-fill h-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* ─── Dot navigation ─── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={s.label}
            className="group relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                width: i === current ? 20 : 6,
                background: i === current ? accent : 'rgba(100,116,139,0.4)',
              }}
              transition={{ duration: 0.3 }}
              style={{ height: 6, borderRadius: 3 }}
            />
            {/* Tooltip */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* ─── Slide counter ─── */}
      <div className="fixed bottom-4 right-5 z-50 font-mono text-[11px] tracking-wider" style={{ color: '#475569' }}>
        <span style={{ color: accent }}>{String(current + 1).padStart(2, '0')}</span>
        <span className="mx-0.5">/</span>
        <span>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* ─── Slide label (top-left) ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${current}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
          className="fixed top-5 left-6 z-50 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#475569' }}>
            {SLIDES[current].label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* ─── Nav arrows ─── */}
      <div className="fixed bottom-4 left-5 z-50 flex gap-2">
        <button onClick={prev} disabled={current === 0}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-20"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button onClick={next} disabled={current === SLIDES.length - 1}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-20"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ─── Keyboard hint ─── */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed top-5 right-6 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
            style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 2h-2a2 2 0 0 0-2 2v1h6V4a2 2 0 0 0-2-2z"/></svg>
            <span className="text-[9px] font-mono">Arrow keys / Space / Swipe</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
