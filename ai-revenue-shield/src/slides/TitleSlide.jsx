import { motion } from 'framer-motion'
import { Shield, Sparkles, Users, BarChart3, Zap, Brain } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-14 relative grid-bg overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: 6+i*4, height: 6+i*4, background: i%2===0?'rgba(99,102,241,0.28)':'rgba(6,182,212,0.2)', top:`${10+i*13}%`, left:`${7+i*14}%` }}
          animate={{ y:[0,-20,0], opacity:[0.25,0.7,0.25] }} transition={{ duration:3.5+i*0.4, repeat:Infinity, delay:i*0.25 }} />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div key={`r${i}`} className="absolute rounded-full pointer-events-none"
          style={{ width: 5+i*3, height: 5+i*3, background:'rgba(16,185,129,0.2)', top:`${18+i*18}%`, right:`${5+i*10}%` }}
          animate={{ y:[0,-14,0], opacity:[0.18,0.5,0.18] }} transition={{ duration:4+i*0.3, repeat:Infinity, delay:i*0.4+1 }} />
      ))}

      <motion.p initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} transition={{delay:0.15,duration:0.5}}
        className="mb-3 text-xs font-mono tracking-[0.25em] uppercase" style={{color:'#64748b'}}>
        An Initiative of Govt. of India · Ministry of Finance
      </motion.p>

      <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.5}}
        className="flex items-center gap-3 mb-6">
        <span className="badge-cyan px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">PSBs HACKATHON 2026</span>
        <span className="badge-indigo px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">PROBLEM STATEMENT 4</span>
      </motion.div>

      <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.7,ease:[0.16,1,0.3,1]}}
        className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-[1.02] text-center mb-3">
        <span className="text-white">AI </span>
        <span className="gradient-text">Revenue Protection</span><br />
        <span className="text-white">Platform</span>
      </motion.h1>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}
        className="glass-light px-6 py-3 mb-7 text-center max-w-3xl">
        <p className="text-base md:text-lg" style={{color:'#e2e8f0'}}>
          <TypewriterText text="A smart AI system that predicts which bank customers might leave — and convinces the right ones to stay, before it's too late." delay={0.95} speed={0.022} />
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4 justify-center mb-7">
        {[
          {icon:<Shield size={20} strokeWidth={1.5}/>, label:'Predict', sub:'who will leave', color:'#818cf8', bg:'rgba(99,102,241,0.1)'},
          {icon:<Sparkles size={20} strokeWidth={1.5}/>, label:'Decide', sub:'what offer to make', color:'#22d3ee', bg:'rgba(6,182,212,0.1)'},
          {icon:<Users size={20} strokeWidth={1.5}/>, label:'Retain', sub:'the right customer', color:'#34d399', bg:'rgba(16,185,129,0.1)'},
        ].map((p,i) => (
          <motion.div key={p.label} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
            transition={{delay:1.0+i*0.12,duration:0.4}}
            className="flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{background:p.bg, border:`1px solid ${p.color}25`}}>
            <span style={{color:p.color}}>{p.icon}</span>
            <div>
              <p className="text-base font-bold" style={{color:p.color}}>{p.label}</p>
              <p className="text-xs" style={{color:'#94a3b8'}}>{p.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:1.35,duration:0.5}}
        className="glass px-8 py-4 flex gap-10 md:gap-16 mb-7">
        {[
          {val:'+28%', label:'Customer Retention', icon:<BarChart3 size={16} strokeWidth={1.5}/>, color:'#34d399'},
          {val:'<60s', label:'Alert Response Time', icon:<Zap size={16} strokeWidth={1.5}/>, color:'#22d3ee'},
          {val:'0.86', label:'AI Accuracy (AUC)', icon:<Brain size={16} strokeWidth={1.5}/>, color:'#818cf8'},
        ].map(s => (
          <div key={s.label} className="flex items-center gap-2.5">
            <span style={{color:s.color}}>{s.icon}</span>
            <span className="text-2xl font-black" style={{color:s.color}}>{s.val}</span>
            <span className="text-sm font-mono" style={{color:'#94a3b8'}}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.6,duration:0.5}} className="text-center">
        <p className="text-xs font-mono tracking-[0.3em] uppercase mb-1.5" style={{color:'#64748b'}}>Team 0rdinary</p>
        <p className="text-base" style={{color:'#94a3b8'}}>Vishal Pandey · Sahil Kumar · Hridyesh Kumar · Gaurav Kesherwani</p>
        <p className="text-sm font-mono mt-1" style={{color:'#475569'}}>IIIT Allahabad</p>
      </motion.div>

      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t" style={{borderColor:'rgba(99,102,241,0.18)'}} />
      <div className="absolute bottom-8 right-6 w-16 h-16 border-r border-b" style={{borderColor:'rgba(6,182,212,0.18)'}} />
    </div>
  )
}
