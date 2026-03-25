import { motion } from 'framer-motion'
import { ShieldCheck, Activity, AlertCircle, Zap, Check, Eye, Trash2, MapPin, FileCheck, Thermometer } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const compliance = [
  { text:'Consent verified before every action', icon:<Check size={11} strokeWidth={2.5}/> },
  { text:'All PII masked in logs and AI explanations', icon:<Eye size={11} strokeWidth={2.5}/> },
  { text:'Right to Erasure: DELETE cascade supported', icon:<Trash2 size={11} strokeWidth={2.5}/> },
  { text:'Customer data stays within India only', icon:<MapPin size={11} strokeWidth={2.5}/> },
  { text:'Full audit trail: agent + model + timestamp', icon:<FileCheck size={11} strokeWidth={2.5}/> },
]

const health = [
  { label:'Model Accuracy (AUC)', threshold:'> 0.82 is healthy', value:'0.865', pct:86 },
  { label:'Data Drift (PSI)', threshold:'< 0.20 is safe', value:'0.081', pct:40 },
  { label:'API Response Time (p95)', threshold:'< 200ms target', value:'85 ms', pct:42 },
  { label:'Retention Success Rate', threshold:'> 55% target', value:'62.4%', pct:62 },
]

const edge = [
  { title:'Cold Start', desc:'New customer with no history? Gets a neutral 50% score until data builds up.', icon:<Thermometer size={16} strokeWidth={1.5}/>, color:'#22d3ee' },
  { title:'Model Drift', desc:'If the AI starts getting worse, automatic alerts fire before it causes damage.', icon:<AlertCircle size={16} strokeWidth={1.5}/>, color:'#fbbf24' },
  { title:'System Failures', desc:'Gen-AI fails? Falls back to templates. Channel fails? Tries the next one.', icon:<Zap size={16} strokeWidth={1.5}/>, color:'#fb7185' },
]

const lifecycle = [
  { stage:'New Customer', action:'Onboarding call + digital activation', color:'#22d3ee' },
  { stage:'Growing', action:'Cross-sell savings / credit card', color:'#34d399' },
  { stage:'Mature', action:'Fee waiver + assign Relationship Manager', color:'#818cf8' },
  { stage:'At-Risk', action:'Immediate offer via highest priority channel', color:'#fb7185' },
]

export default function FeasibilitySlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-emerald px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">FEASIBILITY & COMPLIANCE</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          Enterprise <span className="gradient-text-emerald">Ready</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Built with Indian banking regulations in mind. Designed to work reliably even when things go wrong." delay={0.3} speed={0.022} />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full max-w-6xl">
        <motion.div initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{delay:0.2,duration:0.4}} className="glass p-4">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={15} style={{color:'#34d399'}} strokeWidth={1.5}/>
            <h3 className="text-sm font-bold text-white">DPDP Act 2023</h3>
          </div>
          <div className="space-y-2.5">
            {compliance.map((item,i) => (
              <motion.div key={i} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.08,duration:0.3}} className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{background:'rgba(16,185,129,0.14)',color:'#34d399'}}>{item.icon}</div>
                <span className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.4}} className="glass p-4">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={15} style={{color:'#22d3ee'}} strokeWidth={1.5}/>
            <h3 className="text-sm font-bold text-white">System Health</h3>
          </div>
          <div className="space-y-4">
            {health.map((m,i) => (
              <motion.div key={m.label} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4+i*0.1}}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs" style={{color:'#cbd5e1'}}>{m.label}</span>
                  <span className="text-sm font-mono font-bold" style={{color:'#34d399'}}>{m.value}</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.06)'}}>
                  <motion.div initial={{width:0}} animate={{width:`${m.pct}%`}}
                    transition={{delay:0.5+i*0.1,duration:0.9,ease:[0.16,1,0.3,1]}}
                    className="h-full rounded-full" style={{background:'#10b981'}}/>
                </div>
                <span className="text-xs font-mono" style={{color:'#64748b'}}>{m.threshold}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.4,duration:0.4}} className="glass p-4">
          <h3 className="text-sm font-mono tracking-widest uppercase mb-3" style={{color:'#94a3b8'}}>Edge Cases Handled</h3>
          <div className="space-y-3.5">
            {edge.map((r,i) => (
              <motion.div key={r.title} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
                transition={{delay:0.5+i*0.12,duration:0.3}} className="flex items-start gap-3">
                <div className="p-2 rounded-lg shrink-0" style={{background:`${r.color}12`,color:r.color}}>{r.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.title}</p>
                  <p className="text-sm mt-0.5 leading-relaxed" style={{color:'#cbd5e1'}}>{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:0.4}} className="glass p-4">
          <h3 className="text-sm font-mono tracking-widest uppercase mb-3" style={{color:'#94a3b8'}}>Customer Lifecycle Strategy</h3>
          <div className="space-y-2.5">
            {lifecycle.map((l,i) => (
              <motion.div key={l.stage} initial={{opacity:0,x:8}} animate={{opacity:1,x:0}}
                transition={{delay:0.6+i*0.1,duration:0.3}}
                className="p-3 rounded-xl" style={{background:`${l.color}09`,border:`1px solid ${l.color}20`}}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{background:l.color}}/>
                  <span className="text-xs font-mono font-bold" style={{color:l.color}}>{l.stage}</span>
                </div>
                <p className="text-sm" style={{color:'#cbd5e1'}}>{l.action}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
