import { motion } from 'framer-motion'
import { Database, Globe, Cpu, Radio, Server, MessageSquare, Monitor, RotateCcw, ChevronRight } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const stack = [
  { label:'Frontend', value:'Next.js + Tailwind', icon:<Globe size={14} strokeWidth={1.5}/>, color:'#22d3ee' },
  { label:'API Layer', value:'FastAPI (async)', icon:<Server size={14} strokeWidth={1.5}/>, color:'#818cf8' },
  { label:'ML Engine', value:'XGBoost + T-Learner + SHAP', icon:<Cpu size={14} strokeWidth={1.5}/>, color:'#a78bfa' },
  { label:'Streaming', value:'Apache Kafka (6 topics)', icon:<Radio size={14} strokeWidth={1.5}/>, color:'#fbbf24' },
  { label:'Database', value:'PostgreSQL + JSONB', icon:<Database size={14} strokeWidth={1.5}/>, color:'#34d399' },
  { label:'Gen-AI', value:'GPT-4o / Gemini 1.5', icon:<MessageSquare size={14} strokeWidth={1.5}/>, color:'#fb7185' },
]

const flow = [
  {label:'CBS / Core Banking', color:'#fbbf24'},
  {label:'ETL + Kafka', color:'#818cf8'},
  {label:'XGBoost Score', color:'#22d3ee'},
  {label:'T-Learner Uplift', color:'#a78bfa'},
  {label:'SHAP Explain', color:'#34d399'},
  {label:'ROI Gate', color:'#fbbf24'},
  {label:'Knapsack', color:'#818cf8'},
  {label:'Gen-AI Draft', color:'#fb7185'},
  {label:'Multi-Channel', color:'#22d3ee'},
  {label:'Agent Dashboard', color:'#34d399'},
]

const kafka = ['txn_drop','salary_miss','complaint','large_debit','bureau_signal','app_uninstall']

export default function TechSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-indigo px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">TECHNICAL ARCHITECTURE</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          <span className="gradient-text">Architecture</span> <span className="text-white">& Stack</span>
        </h2>
        <p className="text-base mt-1.5 max-w-2xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Hybrid batch + streaming. ML scores computed nightly — zero latency at query time. Kafka provides instant real-time triggers." delay={0.3} speed={0.02} />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-6xl">
        <div className="md:col-span-3">
          <motion.div initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{delay:0.2,duration:0.4}} className="glass p-4 h-full">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4" style={{color:'#94a3b8'}}>Technology Stack</h3>
            <div className="space-y-3">
              {stack.map((t,i) => (
                <motion.div key={t.label} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}}
                  transition={{delay:0.3+i*0.07,duration:0.3}} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg shrink-0" style={{background:`${t.color}10`,color:t.color,border:`1px solid ${t.color}20`}}>{t.icon}</div>
                  <div>
                    <span className="text-xs font-mono uppercase" style={{color:'#64748b'}}>{t.label}</span>
                    <p className="text-sm text-white font-semibold leading-tight">{t.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-9">
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.4}} className="glass p-4 h-full">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-3" style={{color:'#94a3b8'}}>Data Flow — Bank to Customer</h3>

            <div className="flex flex-wrap items-center gap-1 mb-5">
              {flow.map((node,i) => (
                <motion.div key={node.label} className="flex items-center gap-0.5" initial={{opacity:0,scale:0.85}}
                  animate={{opacity:1,scale:1}} transition={{delay:0.4+i*0.06,duration:0.3}}>
                  <span className="px-2.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap font-semibold"
                    style={{background:`${node.color}0E`,color:node.color,border:`1px solid ${node.color}28`}}>
                    {node.label}
                  </span>
                  {i < flow.length-1 && <ChevronRight size={10} style={{color:'#334155'}} strokeWidth={2}/>}
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}} className="mb-4">
              <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{color:'#64748b'}}>Real-time Kafka Trigger Topics (6)</p>
              <div className="flex flex-wrap gap-2">
                {kafka.map((t,i) => (
                  <motion.span key={t} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1+i*0.07}}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
                    style={{background:'rgba(245,158,11,0.07)',border:'1px solid rgba(245,158,11,0.2)',color:'#fbbf24'}}>
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.3}}
                className="p-3.5 rounded-xl" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="flex items-center gap-2 mb-2">
                  <RotateCcw size={13} style={{color:'#818cf8'}} strokeWidth={1.5}/>
                  <span className="text-xs font-mono uppercase" style={{color:'#94a3b8'}}>Self-improving Loop</span>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>
                  Intervention outcomes are captured and used to retrain both the churn model and the uplift estimator continuously.
                </p>
              </motion.div>
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.4}}
                className="p-3.5 rounded-xl" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="flex items-center gap-2 mb-2">
                  <Monitor size={13} style={{color:'#22d3ee'}} strokeWidth={1.5}/>
                  <span className="text-xs font-mono uppercase" style={{color:'#94a3b8'}}>Zero Inference Latency</span>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>
                  Scores are pre-computed nightly. The dashboard loads instantly — no waiting for the ML model to run on demand.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
