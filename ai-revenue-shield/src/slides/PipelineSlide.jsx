// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { BarChart3, FileSearch, GitBranch, Calculator, Boxes, MessageSquare, RotateCcw, ArrowRight } from 'lucide-react'
// import TypewriterText from '../components/TypewriterText.jsx'

// const steps = [
//   { num:1, title:'Predict', desc:'XGBoost AI scores every customer overnight — no manual work needed', icon:<BarChart3 size={22} strokeWidth={1.5}/>, color:'#818cf8' },
//   { num:2, title:'Explain', desc:'SHAP gives top 3 human-readable reasons per customer score', icon:<FileSearch size={22} strokeWidth={1.5}/>, color:'#a78bfa' },
//   { num:3, title:'Segment', desc:'Uplift model classifies: Persuadable / Sure Thing / Lost Cause / Sleeping Dog', icon:<GitBranch size={22} strokeWidth={1.5}/>, color:'#22d3ee' },
//   { num:4, title:'Decide', desc:'ROI gate checks: will this intervention actually earn more than it costs?', icon:<Calculator size={22} strokeWidth={1.5}/>, color:'#34d399' },
//   { num:5, title:'Optimise', desc:'Knapsack fills the daily budget with highest value customers first', icon:<Boxes size={22} strokeWidth={1.5}/>, color:'#fbbf24' },
//   { num:6, title:'Act', desc:'Gen-AI writes a personalised message + dispatches via best channel', icon:<MessageSquare size={22} strokeWidth={1.5}/>, color:'#fb7185' },
//   { num:7, title:'Learn', desc:'Outcomes feed back into the model — system gets smarter every day', icon:<RotateCcw size={22} strokeWidth={1.5}/>, color:'#818cf8' },
// ]

// const innovations = [
//   { title:'Uplift Modeling', desc:'Two XGBoost models compute causal effect', color:'#818cf8' },
//   { title:'A/B Testing', desc:'20% holdout to measure true lift', color:'#22d3ee' },
//   { title:'Kafka Real-time', desc:'6 event topics, 48-hr cooldown', color:'#fbbf24' },
//   { title:'Knapsack Engine', desc:'Greedy O(n log n) budget allocation', color:'#34d399' },
//   { title:'Lifecycle Aware', desc:'Different strategy per customer stage', color:'#a78bfa' },
//   { title:'Action Explainer', desc:'Why this action was chosen', color:'#fb7185' },
// ]

// export default function PipelineSlide() {
//   const [revealed, setRevealed] = useState(-1)

//   useEffect(() => {
//     // Reveal steps one-by-one with a delay
//     let timers = []
//     steps.forEach((_, i) => {
//       timers.push(setTimeout(() => setRevealed(i), 400 + i * 500))
//     })
//     return () => timers.forEach(clearTimeout)
//   }, [])

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
//       <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-5">
//         <span className="badge-cyan px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">END-TO-END PIPELINE</span>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
//           7 Steps from <span className="gradient-text">Data to Action</span>
//         </h2>
//         <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto" style={{color:'#cbd5e1'}}>
//           The entire process happens automatically — from raw bank data to a personalised customer message.
//         </p>
//       </motion.div>

//       {/* Visual Timeline */}
//       <div className="w-full max-w-6xl mb-5">
//         {/* Horizontal connector line */}
//         <div className="relative mb-4">
//           <div className="hidden md:block absolute top-[36px] left-[4%] right-[4%] h-[2px]" style={{background:'rgba(255,255,255,0.05)'}} />
//           <motion.div
//             className="hidden md:block absolute top-[36px] left-[4%] h-[2px] origin-left"
//             style={{background:'linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4,#10b981,#f59e0b,#f43f5e,#6366f1)'}}
//             initial={{right:'96%'}}
//             animate={{right: revealed >= 0 ? `${96 - (revealed+1)/7*92}%` : '96%'}}
//             transition={{duration:0.4, ease:[0.16,1,0.3,1]}}
//           />

//           <div className="grid grid-cols-4 md:grid-cols-7 gap-2 relative z-10">
//             {steps.map((s, i) => (
//               <div key={s.num} className="flex flex-col items-center text-center">
//                 <AnimatePresence>
//                   {revealed >= i ? (
//                     <motion.div
//                       initial={{scale:0, opacity:0}}
//                       animate={{scale:1, opacity:1}}
//                       transition={{type:'spring', stiffness:260, damping:18}}
//                       className="w-[68px] h-[68px] md:w-[76px] md:h-[76px] rounded-2xl flex flex-col items-center justify-center mb-2 relative"
//                       style={{background:`${s.color}12`, border:`2px solid ${s.color}40`}}>
//                       {/* Pulse ring on reveal */}
//                       <motion.div
//                         initial={{scale:1, opacity:0.6}}
//                         animate={{scale:1.6, opacity:0}}
//                         transition={{duration:0.6}}
//                         className="absolute inset-0 rounded-2xl"
//                         style={{border:`2px solid ${s.color}`}}
//                       />
//                       <span style={{color:s.color}}>{s.icon}</span>
//                       <span className="text-[10px] font-mono font-bold mt-0.5" style={{color:s.color}}>0{s.num}</span>
//                     </motion.div>
//                   ) : (
//                     <div className="w-[68px] h-[68px] md:w-[76px] md:h-[76px] rounded-2xl mb-2"
//                       style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)'}} />
//                   )}
//                 </AnimatePresence>

//                 <AnimatePresence>
//                   {revealed >= i && (
//                     <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.15, duration:0.3}}>
//                       <h4 className="text-sm font-bold text-white mb-0.5">{s.title}</h4>
//                       <p className="text-xs leading-tight max-w-[120px]" style={{color:'#94a3b8'}}>{s.desc}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Active step detail card */}
//         <AnimatePresence mode="wait">
//           {revealed >= 0 && revealed < steps.length && (
//             <motion.div
//               key={revealed}
//               initial={{opacity:0, y:10}}
//               animate={{opacity:1, y:0}}
//               exit={{opacity:0, y:-6}}
//               transition={{duration:0.3}}
//               className="glass-light px-5 py-3 flex items-center gap-4 mb-2"
//               style={{border:`1px solid ${steps[revealed].color}20`}}>
//               <div className="p-2 rounded-xl shrink-0" style={{background:`${steps[revealed].color}12`, color:steps[revealed].color}}>
//                 {steps[revealed].icon}
//               </div>
//               <div>
//                 <span className="text-xs font-mono uppercase tracking-wider" style={{color:steps[revealed].color}}>
//                   Step {steps[revealed].num} — {steps[revealed].title}
//                 </span>
//                 <p className="text-base font-semibold text-white">
//                   <TypewriterText text={steps[revealed].desc} delay={0.05} speed={0.02} />
//                 </p>
//               </div>
//               <div className="ml-auto text-xs font-mono" style={{color:'#475569'}}>
//                 {revealed + 1} / {steps.length}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* 6 innovations */}
//       <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:4.0,duration:0.5}} className="w-full max-w-6xl">
//         <div className="flex items-center gap-2 mb-2.5">
//           <div className="h-px flex-1" style={{background:'rgba(255,255,255,0.06)'}}/>
//           <span className="text-xs font-mono tracking-widest uppercase" style={{color:'#64748b'}}>6 Core Technical Innovations</span>
//           <div className="h-px flex-1" style={{background:'rgba(255,255,255,0.06)'}}/>
//         </div>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
//           {innovations.map((inn,i) => (
//             <motion.div key={inn.title} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
//               transition={{delay:4.1+i*0.07,duration:0.3}}
//               className="p-3 rounded-xl text-center"
//               style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
//               <div className="w-2 h-2 rounded-full mx-auto mb-1.5" style={{background:inn.color}}/>
//               <p className="text-xs font-semibold text-white mb-0.5">{inn.title}</p>
//               <p className="text-xs" style={{color:'#94a3b8'}}>{inn.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   )
// }
import { useState, useEffect, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, FileSearch, GitBranch, Calculator, Boxes, MessageSquare, RotateCcw } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const steps = [
  { num:1, title:'Predict', desc:'XGBoost AI scores every customer overnight — no manual work needed', icon:<BarChart3 size={22} strokeWidth={1.5}/>, color:'#818cf8' },
  { num:2, title:'Explain', desc:'SHAP gives top 3 human-readable reasons per customer score', icon:<FileSearch size={22} strokeWidth={1.5}/>, color:'#a78bfa' },
  { num:3, title:'Segment', desc:'Uplift model classifies: Persuadable / Sure Thing / Lost Cause / Sleeping Dog', icon:<GitBranch size={22} strokeWidth={1.5}/>, color:'#22d3ee' },
  { num:4, title:'Decide', desc:'ROI gate checks: will this intervention actually earn more than it costs?', icon:<Calculator size={22} strokeWidth={1.5}/>, color:'#34d399' },
  { num:5, title:'Optimise', desc:'Knapsack fills the daily budget with highest value customers first', icon:<Boxes size={22} strokeWidth={1.5}/>, color:'#fbbf24' },
  { num:6, title:'Act', desc:'Gen-AI writes a personalised message + dispatches via best channel', icon:<MessageSquare size={22} strokeWidth={1.5}/>, color:'#fb7185' },
  { num:7, title:'Learn', desc:'Outcomes feed back into the model — system gets smarter every day', icon:<RotateCcw size={22} strokeWidth={1.5}/>, color:'#818cf8' },
]

const innovations = [
  { title:'Uplift Modeling', desc:'Two XGBoost models compute causal effect', color:'#818cf8' },
  { title:'A/B Testing', desc:'20% holdout to measure true lift', color:'#22d3ee' },
  { title:'Kafka Real-time', desc:'6 event topics, 48-hr cooldown', color:'#fbbf24' },
  { title:'Knapsack Engine', desc:'Greedy O(n log n) budget allocation', color:'#34d399' },
  { title:'Lifecycle Aware', desc:'Different strategy per customer stage', color:'#a78bfa' },
  { title:'Action Explainer', desc:'Why this action was chosen', color:'#fb7185' },
]

const BLOCK_SIZE = 76   // icon box height/width in px
const BLOCK_CENTER = BLOCK_SIZE / 2  // 38px — where the connector should align

export default function PipelineSlide() {
  const [revealed, setRevealed] = useState(-1)

  useEffect(() => {
    let timers = []
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed(i), 400 + i * 500))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center mb-5"
      >
        <span className="badge-cyan px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">END-TO-END PIPELINE</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          7 Steps from <span className="gradient-text">Data to Action</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
          The entire process happens automatically — from raw bank data to a personalised customer message.
        </p>
      </motion.div>

      {/* Visual Timeline */}
      <div className="w-full max-w-6xl mb-5">
        {/* Steps row with inline connectors between blocks */}
        <div className="flex items-start w-full mb-4">
          {steps.map((s, i) => (
            <Fragment key={s.num}>
              {/* ── Step column ── */}
              <div className="flex flex-col items-center text-center" style={{ flex: '0 0 auto', width: BLOCK_SIZE }}>
                <AnimatePresence>
                  {revealed >= i ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      style={{
                        width: BLOCK_SIZE,
                        height: BLOCK_SIZE,
                        background: `${s.color}12`,
                        border: `2px solid ${s.color}60`,
                        /* Glow on the block itself — replaces the passing-through line */
                        boxShadow: `0 0 18px 2px ${s.color}40, inset 0 0 12px ${s.color}18`,
                        borderRadius: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        marginBottom: 8,
                      }}
                    >
                      {/* Pulse ring on reveal */}
                      <motion.div
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 16,
                          border: `2px solid ${s.color}`,
                        }}
                      />
                      <span style={{ color: s.color }}>{s.icon}</span>
                      <span className="text-[10px] font-mono font-bold mt-0.5" style={{ color: s.color }}>
                        0{s.num}
                      </span>
                    </motion.div>
                  ) : (
                    <div
                      style={{
                        width: BLOCK_SIZE,
                        height: BLOCK_SIZE,
                        borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: 8,
                      }}
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {revealed >= i && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      <h4 className="text-sm font-bold text-white mb-0.5">{s.title}</h4>
                      <p className="text-xs leading-tight" style={{ color: '#94a3b8', maxWidth: 88 }}>{s.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Connector between blocks (not through them) ── */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    flex: '1 1 0',
                    /* Push line down to the vertical centre of the icon boxes */
                    paddingTop: BLOCK_CENTER - 1,
                  }}
                >
                  {/* Track (dim baseline) */}
                  <div style={{ position: 'relative', height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 1 }}>
                    {/* Animated fill — only appears once NEXT step is revealed */}
                    <AnimatePresence>
                      {revealed >= i + 1 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 1,
                            transformOrigin: 'left',
                            background: `linear-gradient(90deg, ${s.color}, ${steps[i + 1].color})`,
                            /* Glow on the connector line */
                            boxShadow: `0 0 6px 1px ${s.color}80`,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Active step detail card */}
        <AnimatePresence mode="wait">
          {revealed >= 0 && revealed < steps.length && (
            <motion.div
              key={revealed}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-light px-5 py-3 flex items-center gap-4 mb-2"
              style={{ border: `1px solid ${steps[revealed].color}20` }}
            >
              <div
                className="p-2 rounded-xl shrink-0"
                style={{ background: `${steps[revealed].color}12`, color: steps[revealed].color }}
              >
                {steps[revealed].icon}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider" style={{ color: steps[revealed].color }}>
                  Step {steps[revealed].num} — {steps[revealed].title}
                </span>
                <p className="text-base font-semibold text-white">
                  <TypewriterText text={steps[revealed].desc} delay={0.05} speed={0.02} />
                </p>
              </div>
              <div className="ml-auto text-xs font-mono" style={{ color: '#475569' }}>
                {revealed + 1} / {steps.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 6 innovations */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.0, duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#64748b' }}>6 Core Technical Innovations</span>
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {innovations.map((inn, i) => (
            <motion.div
              key={inn.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.1 + i * 0.07, duration: 0.3 }}
              className="p-3 rounded-xl text-center"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-1.5" style={{ background: inn.color }} />
              <p className="text-xs font-semibold text-white mb-0.5">{inn.title}</p>
              <p className="text-xs" style={{ color: '#94a3b8' }}>{inn.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
