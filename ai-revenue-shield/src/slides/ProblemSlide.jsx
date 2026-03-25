import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, EyeOff, DollarSign, XCircle, Wifi, Activity, ArrowDownRight } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const metrics = [
  { label:'Churn Rate', value:'18.4%', trend:'+3.2% this quarter', icon:<TrendingDown size={16} strokeWidth={1.5}/>, color:'#fb7185' },
  { label:'Budget Wasted', value:'72%', trend:'Spent on wrong customers', icon:<DollarSign size={16} strokeWidth={1.5}/>, color:'#fbbf24' },
  { label:'Response Time', value:'24 hrs', trend:'Events caught next day', icon:<Clock size={16} strokeWidth={1.5}/>, color:'#fbbf24' },
  { label:'Agent Trust', value:'LOW', trend:'No explanation given', icon:<EyeOff size={16} strokeWidth={1.5}/>, color:'#fb7185' },
]

const failures = [
  { title:'Prediction without Cause', desc:'Flags 100 customers but treats them all the same — no causal reasoning about who will actually respond.', icon:<AlertTriangle size={17} strokeWidth={1.5}/>, color:'#fb7185' },
  { title:'Flat Budget Allocation', desc:'Gives a ₹5,000 discount to everyone — even those who were never going to leave anyway.', icon:<DollarSign size={17} strokeWidth={1.5}/>, color:'#fbbf24' },
  { title:'Batch Processing Only', desc:'Sends a retention call after the customer already closed their account. Too late.', icon:<Clock size={17} strokeWidth={1.5}/>, color:'#fbbf24' },
  { title:'Black Box Decisions', desc:'Agent sees "Risk: 87%" with no reason. They cannot explain it to the customer either.', icon:<EyeOff size={17} strokeWidth={1.5}/>, color:'#fb7185' },
]

export default function ProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-rose px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">THE PROBLEM</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          Banks are <span className="gradient-text-warm">losing crores</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Every year, banks lose 15–20% of high-value customers to competitors. The current systems fail in 4 critical ways." delay={0.3} speed={0.018} />
        </p>
      </motion.div>

      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.5}} className="w-full max-w-6xl">
        <div className="mac-window">
          <div className="mac-dots">
            <div className="mac-dot" style={{background:'#ff5f57'}}/>
            <div className="mac-dot" style={{background:'#febc2e'}}/>
            <div className="mac-dot" style={{background:'#28c840'}}/>
            <span className="ml-4 text-xs font-mono" style={{color:'#64748b'}}>legacy-retention-dashboard.bank.internal</span>
            <div className="ml-auto flex items-center gap-2">
              <motion.div animate={{opacity:[1,0.3,1]}} transition={{duration:1.5,repeat:Infinity}} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{background:'#f43f5e'}}/>
                <span className="text-xs font-mono font-bold" style={{color:'#f43f5e'}}>⚠ ALERTS: 47</span>
              </motion.div>
            </div>
          </div>

          <div className="p-4 md:p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {metrics.map((m,i) => (
                <motion.div key={m.label} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}}
                  transition={{delay:0.4+i*0.1,duration:0.4}}
                  className="rounded-xl p-3 relative overflow-hidden"
                  style={{background:`${m.color}0C`,border:`1px solid ${m.color}22`}}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider" style={{color:'#94a3b8'}}>{m.label}</span>
                    <span style={{color:m.color}}>{m.icon}</span>
                  </div>
                  <div className="text-3xl font-black" style={{color:m.color}}>{m.value}</div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <ArrowDownRight size={11} style={{color:m.color}} strokeWidth={2}/>
                    <span className="text-xs font-mono" style={{color:`${m.color}AA`}}>{m.trend}</span>
                  </div>
                  <motion.div animate={{opacity:[0,0.07,0]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}
                    className="absolute inset-0 rounded-xl" style={{background:m.color}}/>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
              {failures.map((f,i) => (
                <motion.div key={f.title} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
                  transition={{delay:0.8+i*0.1,duration:0.4}}
                  className="rounded-xl p-3.5"
                  style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)'}}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg shrink-0" style={{background:`${f.color}14`,color:f.color}}>{f.icon}</div>
                    <span className="text-sm font-bold text-white">{f.title}</span>
                    <XCircle size={12} className="ml-auto shrink-0" style={{color:'rgba(244,63,94,0.35)'}} strokeWidth={1.5}/>
                  </div>
                  <p className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
              className="flex items-center justify-between rounded-lg p-3"
              style={{background:'rgba(244,63,94,0.05)',border:'1px solid rgba(244,63,94,0.12)'}}>
              <div className="flex items-center gap-5 text-xs font-mono" style={{color:'#94a3b8'}}>
                <div className="flex items-center gap-1.5"><Wifi size={12} style={{color:'#f43f5e'}} strokeWidth={1.5}/><span>BATCH_ONLY</span></div>
                <span style={{color:'#1e293b'}}>|</span>
                <div className="flex items-center gap-1.5"><Activity size={12} style={{color:'#f43f5e'}} strokeWidth={1.5}/><span>Model: <span style={{color:'#fb7185'}}>NO CAUSALITY</span></span></div>
              </div>
              <span className="text-sm font-mono font-bold" style={{color:'#fb7185'}}>Revenue at Risk: ~15–20% of CLV Base</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.45}}
        className="mt-3 glass-light px-6 py-2.5">
        <p className="text-sm text-center" style={{color:'#cbd5e1'}}>
          <span className="text-white font-semibold">The core issue:</span> Predicting churn isn't the problem.{' '}
          <span style={{color:'#fb7185'}}>Acting on it correctly</span> is.
        </p>
      </motion.div>
    </div>
  )
}
