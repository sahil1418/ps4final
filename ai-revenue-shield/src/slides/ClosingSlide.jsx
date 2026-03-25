import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { BarChart3, GitBranch, FileSearch, Boxes, MessageSquare, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react'

const tech = [
  { label:'XGBoost', sub:'Churn Prediction', icon:<BarChart3 size={16} strokeWidth={1.5}/>, color:'#818cf8' },
  { label:'T-Learner', sub:'Uplift Modeling', icon:<GitBranch size={16} strokeWidth={1.5}/>, color:'#22d3ee' },
  { label:'SHAP', sub:'Explainability', icon:<FileSearch size={16} strokeWidth={1.5}/>, color:'#a78bfa' },
  { label:'Knapsack', sub:'Budget Optimisation', icon:<Boxes size={16} strokeWidth={1.5}/>, color:'#fbbf24' },
  { label:'GPT-4o', sub:'Message Generation', icon:<MessageSquare size={16} strokeWidth={1.5}/>, color:'#34d399' },
]

const metrics = [
  { prefix:'+', value:28, suffix:'%', label:'Retention Lift', color:'#34d399' },
  { prefix:'<', value:60, suffix:'s', label:'Event Response', color:'#22d3ee' },
  { prefix:'', value:0.86, suffix:'', label:'AUC-ROC Score', color:'#818cf8', decimals:2 },
]

const diff = [
  { icon:<Shield size={15} strokeWidth={1.5}/>, text:'DPDP Compliant', color:'#34d399' },
  { icon:<Zap size={15} strokeWidth={1.5}/>, text:'Real-time Kafka', color:'#fbbf24' },
  { icon:<Sparkles size={15} strokeWidth={1.5}/>, text:'Causal ML + Gen-AI', color:'#818cf8' },
]

export default function ClosingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-12 py-6 relative">
      {[...Array(8)].map((_,i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:4+i, height:4+i, background:['rgba(99,102,241,0.28)','rgba(6,182,212,0.2)','rgba(16,185,129,0.2)'][i%3], top:`${10+i*10}%`, left:`${5+i*11}%` }}
          animate={{y:[0,-14,0],opacity:[0.2,0.55,0.2]}} transition={{duration:3+i*0.35,repeat:Infinity,delay:i*0.2}}/>
      ))}

      <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}}
        className="text-5xl md:text-8xl font-black tracking-tight leading-tight text-center mb-4">
        <span className="text-white">AI </span>
        <span className="gradient-text">Revenue Protection</span><br />
        <span className="text-white">Platform</span>
      </motion.h1>

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
        className="text-base md:text-xl font-mono mb-7 flex items-center gap-2.5 flex-wrap justify-center" style={{color:'#cbd5e1'}}>
        {['Predict','Explain','Target','Act','Learn'].map((s,i,arr) => (
          <span key={s} className="flex items-center gap-2.5">
            <span className="text-white font-bold">{s}</span>
            {i < arr.length-1 && <ArrowRight size={13} style={{color:'#475569'}} strokeWidth={2}/>}
          </span>
        ))}
      </motion.p>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tech.map((t,i) => (
          <motion.div key={t.label} initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
            transition={{delay:0.6+i*0.08,duration:0.3}}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
            style={{background:`${t.color}0E`,border:`1px solid ${t.color}25`,color:t.color}}>
            {t.icon}
            <div>
              <p className="text-sm font-bold">{t.label}</p>
              <p className="text-xs" style={{opacity:0.65}}>{t.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:1.0}}
        className="flex gap-14 md:gap-20 mb-8">
        {metrics.map((m,i) => (
          <div key={m.label} className="text-center">
            <div className="text-4xl md:text-6xl font-black" style={{color:m.color}}>
              {m.prefix}<CountUp end={m.value} duration={2} delay={1.1+i*0.2} decimals={m.decimals||0}/>{m.suffix}
            </div>
            <p className="text-sm font-mono mt-1.5" style={{color:'#94a3b8'}}>{m.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}
        className="flex gap-6 mb-8">
        {diff.map((d,i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-mono font-semibold" style={{color:d.color}}>
            {d.icon}<span>{d.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.55}} className="text-center mb-7">
        <p className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{color:'#475569'}}>Built by Team 0rdinary</p>
        <p className="text-base" style={{color:'#94a3b8'}}>Vishal Pandey · Sahil Kumar · Hridyesh Kumar · Gaurav Kesherwani</p>
        <p className="text-sm font-mono mt-1" style={{color:'#475569'}}>IIIT Allahabad</p>
      </motion.div>

      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:1.75,duration:0.5}}>
        <span className="badge-indigo px-8 py-3 rounded-full text-base font-mono tracking-widest">Thank You</span>
      </motion.div>

      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t" style={{borderColor:'rgba(99,102,241,0.14)'}}/>
      <div className="absolute bottom-8 right-6 w-16 h-16 border-r border-b" style={{borderColor:'rgba(6,182,212,0.14)'}}/>
    </div>
  )
}
