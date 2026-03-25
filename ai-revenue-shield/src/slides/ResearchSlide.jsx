import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, Lightbulb, ArrowRight, Equal } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const refs = [
  { author:'Athey & Imbens (2015)', topic:'Heterogeneous Treatment Effects — Causal inference for uplift' },
  { author:'Lundberg & Lee (2017)', topic:'SHAP: Unified Approach to Interpreting Model Predictions' },
  { author:'Chen & Guestrin (2016)', topic:'XGBoost: A Scalable Tree Boosting System' },
  { author:'DPDP Act, India (2023)', topic:"Digital Personal Data Protection — compliance backbone" },
  { author:'Knapsack (OR Literature)', topic:'Budget-constrained combinatorial optimisation' },
]

const formulas = [
  { label:'Uplift Score', formula:'P(retain|treat) − P(retain|ctrl)', color:'#22d3ee' },
  { label:'Expected Gain', formula:'uplift × CLV', color:'#34d399' },
  { label:'Net ROI', formula:'gain − cost', color:'#818cf8' },
  { label:'Budget Opt.', formula:'max Σ(gi·xi)  s.t. Σci ≤ B', color:'#fbbf24' },
  { label:'Confidence', formula:'max(p, 1−p)', color:'#94a3b8' },
  { label:'Drift Flag', formula:'|avg − baseline| > 0.10', color:'#fb7185' },
]

const insights = [
  { text:'Uplift modeling stops you wasting budget on customers who were going to stay anyway', color:'#22d3ee' },
  { text:'Knapsack optimization maximises revenue from a fixed daily intervention budget', color:'#34d399' },
  { text:'Real-time Kafka enables sub-60s action on critical life events like missed salary', color:'#fbbf24' },
]

export default function ResearchSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-indigo px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">RESEARCH & REFERENCES</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          <span className="gradient-text">Research</span> <span className="text-white">Foundation</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Every technical decision is grounded in peer-reviewed research and proven industry methods." delay={0.3} speed={0.022} />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-6xl">
        <div className="md:col-span-5">
          <motion.div initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{delay:0.2,duration:0.4}} className="glass p-4 h-full">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={15} style={{color:'#818cf8'}} strokeWidth={1.5}/>
              <h3 className="text-sm font-bold text-white">Academic References</h3>
            </div>
            <div className="space-y-2.5">
              {refs.map((r,i) => (
                <motion.div key={r.author} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}}
                  transition={{delay:0.3+i*0.08,duration:0.3}}
                  className="p-3 rounded-xl" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <span className="text-sm font-mono font-bold" style={{color:'#818cf8'}}>{r.author}</span>
                  <p className="text-sm mt-0.5" style={{color:'#cbd5e1'}}>{r.topic}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-4">
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.4}} className="glass p-4 h-full">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical size={15} style={{color:'#22d3ee'}} strokeWidth={1.5}/>
              <h3 className="text-sm font-bold text-white">Key Formulas</h3>
            </div>
            <div className="space-y-2">
              {formulas.map((f,i) => (
                <motion.div key={f.label} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
                  transition={{delay:0.4+i*0.07,duration:0.3}}
                  className="flex items-center gap-2 p-2.5 rounded-lg"
                  style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <span className="text-sm font-semibold w-28 shrink-0" style={{color:'#cbd5e1'}}>{f.label}</span>
                  <Equal size={10} style={{color:'#334155'}} strokeWidth={1.5}/>
                  <span className="text-sm font-mono" style={{color:f.color}}>{f.formula}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-3">
          <motion.div initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:0.4,duration:0.4}} className="glass p-4 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={15} style={{color:'#fbbf24'}} strokeWidth={1.5}/>
              <h3 className="text-sm font-bold text-white">Key Insights</h3>
            </div>
            <div className="space-y-3.5">
              {insights.map((ins,i) => (
                <motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
                  transition={{delay:0.5+i*0.1,duration:0.3}} className="flex items-start gap-2">
                  <ArrowRight size={12} className="shrink-0 mt-0.5" style={{color:ins.color}} strokeWidth={2}/>
                  <p className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>{ins.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}
              className="mt-4 p-3.5 rounded-xl" style={{background:'rgba(16,185,129,0.07)',border:'1px solid rgba(16,185,129,0.18)'}}>
              <p className="text-sm font-semibold text-center" style={{color:'#34d399'}}>
                Retention becomes a revenue engine, not a cost center
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
